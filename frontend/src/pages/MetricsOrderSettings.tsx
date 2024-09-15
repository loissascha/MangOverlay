import { useEffect, useState } from "react"
import { GetElements, ReplaceElements } from "../../wailsjs/go/main/App"
import SettingBox from "../ui/SettingBox"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown, faShuffle } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faCircleXmark } from "@fortawesome/free-regular-svg-icons"

function MetricsOrderSettings() {
    const [elements, setElements] = useState<any>([])
    const [activeElements, setActiveElements] = useState<any>([])
    const [hasSelection, setHasSelection] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>("")

    useEffect(() => {
        GetElements().then((r) => {
            setElements(r)
        })
    }, [])

    useEffect(() => {
        function getActiveElements() {
            let data = []
            for (const element of elements) {
                if (!element.Active) continue
                data.push(element)
            }
            data.sort((a, b) => a.Index - b.Index)
            setActiveElements(data)
            console.log(data)
        }
        getActiveElements()
    }, [elements])

    function ElementUp(name: string) {
        let lastElement = undefined
        for (const e of activeElements) {
            if (e.Name == name) {
                if (lastElement !== undefined) {
                    // GoReplaceFunc(name, lastElement.Name)
                    ReplaceElements(name, lastElement.Name).then(() => {
                        GetElements().then((r) => {
                            setElements(r)
                        })
                    })
                    console.log("replace " + name + " with " + lastElement.Name)
                }
                break
            }
            lastElement = e
        }
    }

    function ElementDown(name: string) {
        let doNow = false
        for (const e of activeElements) {
            if (doNow) {
                // GoReplaceFunc(name, e.Name)
                ReplaceElements(name, e.Name).then(() => {
                    GetElements().then((r) => {
                        setElements(r)
                    })
                })

                console.log("replace " + name + " with " + e.Name)
                break
            }
            if (e.Name == name) {
                doNow = true
            }
        }
    }

    function SelectElement(name: string) {
        setHasSelection(true)
        setSelected(name)
    }

    function UnselectElement() {
        setHasSelection(false)
    }

    function SwapSelectionWith(name: string) {
        ReplaceElements(selected, name).then(() => {
            setHasSelection(false)
            GetElements().then((r) => {
                setElements(r)
            })
        })
    }

    return (
        <>
            <div className="flex gap-5 flex-auto flex-wrap">
                <div>
                    <SettingBox header="Active Elements">
                        {activeElements.map((e: any) => (
                            <div key={e.Index} className="grid grid-cols-[1fr_auto]">
                                <div>
                                    {hasSelection ?
                                        e.Name == selected ? (
                                            <a
                                                className="cursor-pointer me-3"
                                                onClick={() => {
                                                    UnselectElement()
                                                }}
                                                title="Unselect"
                                            ><FontAwesomeIcon icon={faCircleXmark} className="me-2" />{e.Name}</a>
                                        ) : (
                                            <a
                                                className="cursor-pointer me-3"
                                                onClick={() => {
                                                    SwapSelectionWith(e.Name)
                                                }}
                                                title="Swap with selection"
                                            ><FontAwesomeIcon icon={faShuffle} className="me-2" />{e.Name}</a>
                                        ) : (
                                            <a
                                                className="cursor-pointer me-3"
                                                onClick={() => {
                                                    SelectElement(e.Name)
                                                }}
                                                title="Select"
                                            ><FontAwesomeIcon icon={faCircle} className="me-2" />{e.Name}</a>
                                        )}
                                </div>
                                <div>
                                    <a
                                        className="cursor-pointer ms-3 me-3"
                                        onClick={() => {
                                            ElementUp(e.Name)
                                        }}
                                        title="Sort Up"
                                    ><FontAwesomeIcon icon={faSortUp} /></a>
                                    <a
                                        className="cursor-pointer"
                                        onClick={() => {
                                            ElementDown(e.Name)
                                        }}
                                        title="Sort Down"
                                    ><FontAwesomeIcon icon={faSortDown} /></a>
                                </div>
                            </div>
                        ))}
                    </SettingBox>
                </div>
            </div>
        </>
    )
}
export default MetricsOrderSettings
