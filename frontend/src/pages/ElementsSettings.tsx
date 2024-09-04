import { useEffect, useState } from "react";
import { ActivateElement, DeactivateElement, GetElements } from "../../wailsjs/go/main/App";
import SettingBox from "../ui/SettingBox";

function ElementsSettings() {
    const [elements, setElements] = useState<any>()
    const [activeElements, setActiveElements] = useState<any>([])
    const [inactiveElements, setInactiveElements] = useState<any>([])

    useEffect(() => {
        GetElements().then((r) => {
            setElements(r)
        })
    }, [])

    useEffect(() => {
        function getActiveElements() {
            if (elements === undefined) {
                return
            }
            let data = []
            for (var element of elements) {
                if (!element.Active) {
                    continue
                }
                data.push(element)
            }
            data.sort((a, b) => a.Index - b.Index)
            console.log(data)
            setActiveElements(data)
        }
        function getInactiveElements() {
            if (elements === undefined) {
                return
            }
            let data = []
            let newId = 100000
            for (var element of elements) {
                if (element.Active) {
                    continue
                }
                var newe = element
                newe.id = newId
                newId++
                data.push(newe)
            }
            console.log(data)
            setInactiveElements(data)
        }
        getActiveElements()
        getInactiveElements()
    }, [elements])


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
                                        className="cursor-pointer"
                                        onClick={() => {
                                            DeactivateElement(e.Name).then(() => {
                                                GetElements().then((r) => {
                                                    setElements(r)
                                                })
                                            })
                                        }}
                                    >Deactivate</a>
                                </div>
                            </div>
                        ))}
                    </SettingBox>
                </div>
                <div>
                    <SettingBox header="Available Elements">
                        {inactiveElements.map((e: any) => (
                            <div key={e.Id} className="grid grid-cols-[1fr_auto]">
                                <div>
                                    {e.Name}
                                </div>
                                <div>
                                    <a
                                        className="cursor-pointer"
                                        onClick={() => {
                                            ActivateElement(e.Name).then(() => {
                                                GetElements().then((r2) => {
                                                    setElements(r2)
                                                })
                                            })
                                        }}
                                    >Activate</a>
                                </div>
                            </div>
                        ))}
                    </SettingBox>
                </div>
            </div>
        </>
    );
}
export default ElementsSettings;
