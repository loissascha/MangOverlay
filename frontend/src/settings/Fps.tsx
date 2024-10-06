import { useEffect, useState } from "react";
import { ActivateElement, DeactivateElement, GetElements, GetFpsLoadColor0, GetFpsLoadColor1, GetFpsLoadColor2, GetFpsLoadValue, SetFpsLoadColors, SetFpsLoadValue } from "../../wailsjs/go/main/App";
import SettingBox from "../ui/SettingBox"
import { SketchPicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons";

function Fps() {
    const [fpsLoadColor0, setFpsLoadColor0] = useState<string>("");
    const [fpsLoadColor1, setFpsLoadColor1] = useState<string>("");
    const [fpsLoadColor2, setFpsLoadColor2] = useState<string>("");

    const [fpsLoadValue, setFpsLoadValue] = useState<string>("")
    const [fpsColorChange, setFpsColorChange] = useState<boolean>(false)

    const defaultFpsLoadColor0 = "39F900"
    const defaultFpsLoadColor1 = "FDFD09"
    const defaultFpsLoadColor2 = "B22222"

    useEffect(() => {
        GetFpsLoadValue().then((r) => {
            setFpsLoadValue(r)
        })
        GetFpsLoadColor0().then((r) => {
            setFpsLoadColor0(r)
        })
        GetFpsLoadColor1().then((r) => {
            setFpsLoadColor1(r)
        })
        GetFpsLoadColor2().then((r) => {
            setFpsLoadColor2(r)
        })
        reloadElement()
    }, [])

    function reloadElement() {
        GetElements().then((r: any) => {
            for (var element of r) {
                if (element.Name == "fps_color_change") {
                    setFpsColorChange(element.Active)
                }
            }
        })
    }

    return (
        <SettingBox header="FPS">
            <div className="grid grid-cols-2 gap-3">
                <label htmlFor="showLoadColors" className="cursor-pointer">FPS Color Change</label>
                <div>
                    {fpsColorChange ? (
                        <FontAwesomeIcon icon={faCheckSquare} className="cursor-pointer" onClick={() => {
                            DeactivateElement("fps_color_change").then(() => {
                                reloadElement()
                            })
                        }} />
                    ) : (
                        <FontAwesomeIcon icon={faSquare} className="cursor-pointer" onClick={() => {
                            ActivateElement("fps_color_change").then(() => {
                                reloadElement()
                            })
                        }} />
                    )}
                    <input
                        id="showLoadColors"
                        type="checkbox"
                        checked={fpsColorChange}
                        className="hidden"
                        onChange={() => {
                            if (fpsColorChange) {
                                DeactivateElement("fps_color_change").then(() => {
                                    reloadElement()
                                })
                            } else {
                                ActivateElement("fps_color_change").then(() => {
                                    reloadElement()
                                })
                            }
                        }}
                    />
                </div>
                <label htmlFor="fpsloadvalue">Load Value:</label>
                <input
                    type="text"
                    id="fpsloadvalue"
                    className="w-28 bg-gray-700 p-1 border border-gray-500 rounded text-center"
                    min="8"
                    max="50"
                    defaultValue={fpsLoadValue}
                    onChange={(event) => {
                        const nv = event.target.value
                        setFpsLoadValue(nv)
                        SetFpsLoadValue(nv)
                    }}
                />
                <label htmlFor="fpsloadcolors">Load Colors:</label>
                <div>
                    <div className="flex gap-2">
                        <Popover className="relative">
                            <PopoverButton style={{
                                backgroundColor: "#" + fpsLoadColor0
                            }} className="cursor-pointer p-1 rounded border border-gray-500 w-28 mb-2">{fpsLoadColor0}</PopoverButton>
                            <PopoverPanel anchor="bottom" className="flex flex-col bg-gray-500">
                                <SketchPicker color={fpsLoadColor0} onChange={(color) => {
                                    let col = color.hex;
                                    if (col[0] == "#") {
                                        col = col.substring(1)
                                    }
                                    setFpsLoadColor0(col)
                                    SetFpsLoadColors(col, fpsLoadColor1, fpsLoadColor2)
                                }} />
                            </PopoverPanel>
                        </Popover>
                        {fpsLoadColor0 != defaultFpsLoadColor0 && (
                            <button
                                onClick={() => {
                                    setFpsLoadColor0(defaultFpsLoadColor0)
                                    SetFpsLoadColors(defaultFpsLoadColor0, fpsLoadColor1, fpsLoadColor2)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <Popover className="relative">
                            <PopoverButton style={{
                                backgroundColor: "#" + fpsLoadColor1
                            }} className="cursor-pointer p-1 rounded border border-gray-500 w-28 mb-2">{fpsLoadColor1}</PopoverButton>
                            <PopoverPanel anchor="bottom" className="flex flex-col bg-gray-500">
                                <SketchPicker color={fpsLoadColor1} onChange={(color) => {
                                    let col = color.hex;
                                    if (col[0] == "#") {
                                        col = col.substring(1)
                                    }
                                    setFpsLoadColor1(col)
                                    SetFpsLoadColors(fpsLoadColor0, col, fpsLoadColor2)
                                }} />
                            </PopoverPanel>
                        </Popover>
                        {fpsLoadColor1 != defaultFpsLoadColor1 && (
                            <button
                                onClick={() => {
                                    setFpsLoadColor1(defaultFpsLoadColor1)
                                    SetFpsLoadColors(fpsLoadColor0, defaultFpsLoadColor1, fpsLoadColor2)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <Popover className="relative">
                            <PopoverButton style={{
                                backgroundColor: "#" + fpsLoadColor2
                            }} className="cursor-pointer p-1 rounded border border-gray-500 w-28">{fpsLoadColor2}</PopoverButton>
                            <PopoverPanel anchor="bottom" className="flex flex-col bg-gray-500">
                                <SketchPicker color={fpsLoadColor2} onChange={(color) => {
                                    let col = color.hex;
                                    if (col[0] == "#") {
                                        col = col.substring(1)
                                    }
                                    setFpsLoadColor2(col)
                                    SetFpsLoadColors(fpsLoadColor0, fpsLoadColor1, col)
                                }} />
                            </PopoverPanel>
                        </Popover>
                        {fpsLoadColor2 != defaultFpsLoadColor2 && (
                            <button
                                onClick={() => {
                                    setFpsLoadColor2(defaultFpsLoadColor2)
                                    SetFpsLoadColors(fpsLoadColor0, fpsLoadColor1, defaultFpsLoadColor2)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </SettingBox>
    )
}
export default Fps
