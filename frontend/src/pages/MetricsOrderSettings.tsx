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
                let name = element.Name
                if (name.includes("cpu_") && name != "cpu_stats") continue
                if (name.includes("gpu_") && name != "gpu_stats" && name != "gpu_name") continue
                if (name == "engine_short_names") continue
                if (name == "frametime" || name == "throttling_status_graph" || name == "fps_color_change") continue
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
                                <div className="bg-gray-700 p-2 rounded cursor-pointer border border-gray-500" onClick={() => {
                                    if (hasSelection) {
                                        if (e.Name == selected) {
                                            UnselectElement()
                                        }
                                        else {
                                            SwapSelectionWith(e.Name)
                                        }
                                    } else {
                                        SelectElement(e.Name)
                                    }
                                }}>
                                    {hasSelection ?
                                        e.Name == selected ? (
                                            <a
                                                className="cursor-pointer me-3"
                                                title="Unselect"
                                            ><FontAwesomeIcon icon={faCircleXmark} className="me-2" />{e.Name}</a>
                                        ) : (
                                            <a
                                                className="cursor-pointer me-3"
                                                title="Swap with selection"
                                            ><FontAwesomeIcon icon={faShuffle} className="me-2" />{e.Name}</a>
                                        ) : (
                                            <a
                                                className="cursor-pointer me-3"
                                                title="Select"
                                            ><FontAwesomeIcon icon={faCircle} className="me-2" />{e.Name}</a>
                                        )}
                                </div>
                                <div className="flex gap-1 ms-2">
                                    <button
                                        className="cursor-pointer bg-gray-700 p-2 rounded border border-gray-500 hover:bg-gray-600"
                                        onClick={() => {
                                            ElementUp(e.Name)
                                        }}
                                        title="Sort Up"
                                    ><FontAwesomeIcon icon={faSortUp} /></button>
                                    <button
                                        className="cursor-pointer bg-gray-700 p-2 rounded border border-gray-500 hover:bg-gray-600"
                                        onClick={() => {
                                            ElementDown(e.Name)
                                        }}
                                        title="Sort Down"
                                    ><FontAwesomeIcon icon={faSortDown} /></button>
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
