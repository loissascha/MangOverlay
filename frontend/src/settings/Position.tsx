import { useEffect, useState } from "react";
import SettingBox from "../ui/SettingBox";
import { ActivateElement, DeactivateElement, GetElements, GetPosition, SetPosition } from "../../wailsjs/go/main/App";

function Position() {
    const [position, setPosition] = useState<string>("");
    const [compactMode, setCompactMode] = useState<boolean>(false)
    const [noMargin, setNoMargin] = useState<boolean>(false)

    useEffect(() => {
        GetPosition().then((r) => {
            setPosition(r)
            console.log("position: ", r)
        })
    }, [])

    function reloadElements() {
        GetElements().then((r: any) => {
            for (var element of r) {
                if (element.Name == "hud_compact") {
                    setCompactMode(element.Active)
                } else if (element.Name == "hud_no_margin") {
                    setNoMargin(element.Active)
                }
            }
        })
    }

    useEffect(() => {
        reloadElements()
    }, [])

    if (position == "") {
        return null
    }

    return (
        <SettingBox header="HUD">
            <div className="grid grid-cols-2 gap-3">
                <div>Position</div>
                <div>
                    <div className="w-28 h-20 bg-gray-500 grid grid-cols-2 p-1">
                        <div className="grid grid-rows-2">
                            <div className="flex items-start">
                                <input
                                    type="radio"
                                    name="position"
                                    checked={(position == "top-left")}
                                    onChange={() => {
                                        setPosition("top-left")
                                        SetPosition("top-left")
                                    }}
                                />
                            </div>
                            <div className="flex items-end">
                                <input
                                    type="radio"
                                    name="position"
                                    checked={(position == "bottom-left")}
                                    onChange={() => {
                                        setPosition("bottom-left")
                                        SetPosition("bottom-left")
                                    }}
                                />
                            </div>
                        </div>
                        <div className="grid grid-rows-2">
                            <div className="flex justify-end">
                                <input
                                    type="radio"
                                    name="position"
                                    checked={(position == "top-right")}
                                    onChange={() => {
                                        setPosition("top-right")
                                        SetPosition("top-right")
                                    }}
                                />
                            </div>
                            <div className="flex justify-end items-end">
                                <input
                                    type="radio"
                                    name="position"
                                    checked={(position == "bottom-right")}
                                    onChange={() => {
                                        setPosition("bottom-right")
                                        SetPosition("bottom-right")
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div><label htmlFor="compactMode" className="cursor-pointer">Compact Mode</label></div>
                <div>
                    <input id="compactMode" type="checkbox" checked={compactMode} onChange={() => {
                        if (compactMode) {
                            DeactivateElement("hud_compact").then(() => {
                                reloadElements()
                            })
                        } else {
                            ActivateElement("hud_compact").then(() => {
                                reloadElements()
                            })
                        }
                    }} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div><label htmlFor="noMargin" className="cursor-pointer">No Margin</label></div>
                <div>
                    <input id="noMargin" type="checkbox" checked={noMargin} onChange={() => {
                        if (noMargin) {
                            DeactivateElement("hud_no_margin").then(() => {
                                reloadElements()
                            })
                        } else {
                            ActivateElement("hud_no_margin").then(() => {
                                reloadElements()
                            })
                        }
                    }} />
                </div>
            </div>
        </SettingBox>
    );
}
export default Position;