import { useEffect, useState } from "react";
import SettingBox from "../ui/SettingBox";
import { ActivateElement, DeactivateElement, GetElements, GetPosition, GetTableColumns, SetPosition, SetTableColumns } from "../../wailsjs/go/main/App";

function Position() {
    const [position, setPosition] = useState<string>("");
    const [compactMode, setCompactMode] = useState<boolean>(false)
    const [noMargin, setNoMargin] = useState<boolean>(false)
    const [tableColumns, setTableColumns] = useState<string>("3")

    useEffect(() => {
        GetPosition().then((r) => {
            setPosition(r)
            console.log("position: ", r)
        })
        reloadTableColumns()
    }, [])

    async function reloadTableColumns() {
        setTableColumns(await GetTableColumns())
    }

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
                    <div className="w-28 h-20 bg-gray-500 grid grid-cols-3 p-1">
                        <div className="grid grid-rows-3">
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
                            <div>
                                <input
                                    type="radio"
                                    name="position"
                                    checked={(position == "middle-left")}
                                    onChange={() => {
                                        setPosition("middle-left")
                                        SetPosition("middle-left")
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
                        <div className="grid grid-rows-3">
                            <div className="flex items-start justify-center">
                                <input
                                    type="radio"
                                    name="position"
                                    checked={(position == "top-center")}
                                    onChange={() => {
                                        setPosition("top-center")
                                        SetPosition("top-center")
                                    }}
                                />
                            </div>
                            <div>
                            </div>
                            <div className="flex items-end justify-center">
                                <input
                                    type="radio"
                                    name="position"
                                    checked={(position == "bottom-center")}
                                    onChange={() => {
                                        setPosition("bottom-center")
                                        SetPosition("bottom-center")
                                    }}
                                />
                            </div>
                        </div>
                        <div className="grid grid-rows-3">
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
                            <div className="flex justify-end items-center">
                                <input
                                    type="radio"
                                    name="position"
                                    checked={(position == "middle-right")}
                                    onChange={() => {
                                        setPosition("middle-right")
                                        SetPosition("middle-right")
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
            <div className="grid grid-cols-2 gap-3">
                <div><label htmlFor="tableColumns" className="cursor-pointer">Columns</label></div>
                <div>
                    <input id="tableColumns"
                        type="number"
                        min="1"
                        max="10"
                        step="1"
                        className="w-28 bg-gray-700 p-1 text-center border border-gray-500 rounded"
                        defaultValue={tableColumns}
                        onChange={(event) => {
                            setTableColumns(event.target.value)
                            SetTableColumns(event.target.value)
                        }}
                    />
                </div>
            </div>
        </SettingBox>
    );
}
export default Position;
