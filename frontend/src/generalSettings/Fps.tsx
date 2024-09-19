import { useEffect, useState } from "react";
import { ActivateElement, DeactivateElement, GetElements, GetFpsLoadColor0, GetFpsLoadColor1, GetFpsLoadColor2, GetFpsLoadValue, SetFpsLoadColors, SetFpsLoadValue } from "../../wailsjs/go/main/App";
import SettingBox from "../ui/SettingBox"
import { SketchPicker } from "react-color";

function Fps() {
    const [fpsLoadColor0, setFpsLoadColor0] = useState<string>("");
    const [showFpsLoadPicker0, setShowFpsLoadPicker0] = useState<boolean>(false);

    const [fpsLoadColor1, setFpsLoadColor1] = useState<string>("");
    const [showFpsLoadPicker1, setShowFpsLoadPicker1] = useState<boolean>(false);

    const [fpsLoadColor2, setFpsLoadColor2] = useState<string>("");
    const [showFpsLoadPicker2, setShowFpsLoadPicker2] = useState<boolean>(false);

    const [fpsLoadValue, setFpsLoadValue] = useState<string>("")
    const [fpsColorChange, setFpsColorChange] = useState<boolean>(false)

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
                    <input
                        id="showLoadColors"
                        type="checkbox"
                        checked={fpsColorChange}
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
                    <button
                        style={{
                            backgroundColor: "#" + fpsLoadColor0
                        }}
                        onClick={() => {
                            setShowFpsLoadPicker0(!showFpsLoadPicker0)
                        }}
                        className="cursor-pointer p-1 rounded border border-gray-500 w-28 block mb-2"
                    >
                        {fpsLoadColor0}
                    </button>
                    {showFpsLoadPicker0 ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowFpsLoadPicker0(false)
                            }}> </div>
                            <SketchPicker color={fpsLoadColor0} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setFpsLoadColor0(col)
                                SetFpsLoadColors(col, fpsLoadColor1, fpsLoadColor2)
                            }} />
                        </div>) : null}
                    <button
                        style={{
                            backgroundColor: "#" + fpsLoadColor1
                        }}
                        onClick={() => {
                            setShowFpsLoadPicker1(!showFpsLoadPicker1)
                        }}
                        className="cursor-pointer p-1 rounded border border-gray-500 w-28 block mb-2"
                    >
                        {fpsLoadColor1}
                    </button>
                    {showFpsLoadPicker1 ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowFpsLoadPicker1(false)
                            }}> </div>
                            <SketchPicker color={fpsLoadColor1} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setFpsLoadColor1(col)
                                SetFpsLoadColors(fpsLoadColor0, col, fpsLoadColor2)
                            }} />
                        </div>) : null}
                    <button
                        style={{
                            backgroundColor: "#" + fpsLoadColor2
                        }}
                        onClick={() => {
                            setShowFpsLoadPicker2(!showFpsLoadPicker2)
                        }}
                        className="cursor-pointer p-1 rounded border border-gray-500 w-28 block"
                    >
                        {fpsLoadColor2}
                    </button>
                    {showFpsLoadPicker2 ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowFpsLoadPicker2(false)
                            }}> </div>
                            <SketchPicker color={fpsLoadColor2} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setFpsLoadColor2(col)
                                SetFpsLoadColors(fpsLoadColor0, fpsLoadColor1, col)
                            }} />
                        </div>) : null}
                </div>
            </div>
        </SettingBox>
    )
}
export default Fps
