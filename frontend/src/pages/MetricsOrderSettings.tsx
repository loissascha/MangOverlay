import { useEffect, useState } from "react"
import { GetElements, ReplaceElements } from "../../wailsjs/go/main/App"
import SettingBox from "../ui/SettingBox"

function MetricsOrderSettings() {
    const [elements, setElements] = useState<any>([])
    const [activeElements, setActiveElements] = useState<any>([])

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

    return (
        <>
            <div className="flex gap-5 flex-auto flex-wrap">
                <div>
                    <SettingBox header="Active Elements">
                        {activeElements.map((e: any) => (
                            <div key={e.Index} className="grid grid-cols-[1fr_auto]">
                                <div>
                                    {e.Name}
                                </div>
                                <div>
                                    <a
                                        className="cursor-pointer ms-3 me-3"
                                        onClick={() => {
                                            ElementUp(e.Name)
                                        }}
                                    >Up</a>
                                    <a
                                        className="cursor-pointer"
                                        onClick={() => {
                                            ElementDown(e.Name)
                                        }}
                                    >Down</a>
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
