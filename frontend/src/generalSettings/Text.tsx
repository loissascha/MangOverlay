import SettingBox from "../general/SettingBox";
import { GetOrientation, GetRoundCorners, GetBackgroundAlpha, GetBackgroundColor, GetFontSize, SetBackgroundColor, SetBackgroundAlpha, SetRoundedCorners, SetFontSize, SetOrientation, GetTextColor, SetTextColor, GetCpuLoadColor0, GetCpuLoadColor1, GetCpuLoadColor2, SetCpuLoadColors, GetGpuLoadColor0, GetGpuLoadColor1, GetGpuLoadColor2, SetGpuLoadColors } from "../../wailsjs/go/main/App";
import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";

function Text() {
    const [textColor, setTextColor] = useState<string>("");
    const [showTextPicker, setShowTextPicker] = useState<boolean>(false);

    const [cpuLoadColor0, setCpuLoadColor0] = useState<string>("");
    const [showCpuLoadPicker0, setShowCpuLoadPicker0] = useState<boolean>(false);

    const [cpuLoadColor1, setCpuLoadColor1] = useState<string>("");
    const [showCpuLoadPicker1, setShowCpuLoadPicker1] = useState<boolean>(false);

    const [cpuLoadColor2, setCpuLoadColor2] = useState<string>("");
    const [showCpuLoadPicker2, setShowCpuLoadPicker2] = useState<boolean>(false);

    const [gpuLoadColor0, setGpuLoadColor0] = useState<string>("");
    const [showGpuLoadPicker0, setShowGpuLoadPicker0] = useState<boolean>(false);

    const [gpuLoadColor1, setGpuLoadColor1] = useState<string>("");
    const [showGpuLoadPicker1, setShowGpuLoadPicker1] = useState<boolean>(false);

    const [gpuLoadColor2, setGpuLoadColor2] = useState<string>("");
    const [showGpuLoadPicker2, setShowGpuLoadPicker2] = useState<boolean>(false);

    const [fontSize, setFontSize] = useState<string>("");

    useEffect(() => {
        GetTextColor().then((r) => {
            setTextColor(r)
        })
        GetFontSize().then((r) => {
            if (r == "") {
                r = "24"
            }
            setFontSize(r)
        })
        GetCpuLoadColor0().then((r) => {
            setCpuLoadColor0(r)
        })
        GetCpuLoadColor1().then((r) => {
            setCpuLoadColor1(r)
        })
        GetCpuLoadColor2().then((r) => {
            setCpuLoadColor2(r)
        })
        GetGpuLoadColor0().then((r) => {
            setGpuLoadColor0(r)
        })
        GetGpuLoadColor1().then((r) => {
            setGpuLoadColor1(r)
        })
        GetGpuLoadColor2().then((r) => {
            setGpuLoadColor2(r)
        })
    }, [])

    return (
        <SettingBox header="Text">
            <div className="grid grid-cols-2 gap-3">
                <label htmlFor="fontsize" className="me-2">Size:</label>
                <input
                    type="number"
                    id="fontsize"
                    className="w-28 bg-gray-700 p-1 border border-gray-500 rounded text-center"
                    defaultValue={fontSize}
                    min="8"
                    max="50"
                    onChange={(event) => {
                        let num = event.target.value
                        if (parseInt(num) < 8) {
                            num = "8"
                        }
                        setFontSize(num)
                        SetFontSize(num)
                    }}
                />
                <label htmlFor="textcolor" className="me-2">Color:</label>
                <div>
                    <button
                        style={{
                            backgroundColor: "#" + textColor
                        }}
                        onClick={() => {
                            setShowTextPicker(!showTextPicker)
                        }}
                        className="cursor-pointer p-1 rounded border border-gray-500 w-28"
                    >
                        {textColor}
                    </button>
                    {showTextPicker ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowTextPicker(false)
                            }}> </div>
                            <SketchPicker color={textColor} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setTextColor(col)
                                SetTextColor(col)
                            }} />
                        </div>) : null}
                </div>
                <label htmlFor="cpucolor" className="me-2">CPU Load:</label>
                <div>
                    <button
                        style={{
                            backgroundColor: "#" + cpuLoadColor0
                        }}
                        onClick={() => {
                            setShowCpuLoadPicker0(!showCpuLoadPicker0)
                        }}
                        className="cursor-pointer p-1 rounded border border-gray-500 w-28 block mb-2"
                    >
                        {cpuLoadColor0}
                    </button>
                    {showCpuLoadPicker0 ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowCpuLoadPicker0(false)
                            }}> </div>
                            <SketchPicker color={cpuLoadColor0} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setCpuLoadColor0(col)
                                SetCpuLoadColors(col, cpuLoadColor1, cpuLoadColor2)
                            }} />
                        </div>) : null}
                    <button
                        style={{
                            backgroundColor: "#" + cpuLoadColor1
                        }}
                        onClick={() => {
                            setShowCpuLoadPicker1(!showCpuLoadPicker1)
                        }}
                        className="cursor-pointer p-1 rounded border border-gray-500 w-28 block mb-2"
                    >
                        {cpuLoadColor1}
                    </button>
                    {showCpuLoadPicker1 ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowCpuLoadPicker1(false)
                            }}> </div>
                            <SketchPicker color={cpuLoadColor1} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setCpuLoadColor1(col)
                                SetCpuLoadColors(cpuLoadColor0, col, cpuLoadColor2)
                            }} />
                        </div>) : null}
                    <button
                        style={{
                            backgroundColor: "#" + cpuLoadColor2
                        }}
                        onClick={() => {
                            setShowCpuLoadPicker2(!showCpuLoadPicker2)
                        }}
                        className="cursor-pointer p-1 rounded border border-gray-500 w-28 block"
                    >
                        {cpuLoadColor2}
                    </button>
                    {showCpuLoadPicker2 ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowCpuLoadPicker2(false)
                            }}> </div>
                            <SketchPicker color={cpuLoadColor2} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setCpuLoadColor2(col)
                                SetCpuLoadColors(cpuLoadColor0, cpuLoadColor1, col)
                            }} />
                        </div>) : null}
                </div>
                <label htmlFor="cpucolor" className="me-2">GPU Load:</label>
                <div>
                    <button
                        style={{
                            backgroundColor: "#" + gpuLoadColor0
                        }}
                        onClick={() => {
                            setShowGpuLoadPicker0(!showGpuLoadPicker0)
                        }}
                        className="cursor-pointer p-1 rounded border border-gray-500 w-28 block mb-2"
                    >
                        {gpuLoadColor0}
                    </button>
                    {showGpuLoadPicker0 ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowGpuLoadPicker0(false)
                            }}> </div>
                            <SketchPicker color={gpuLoadColor0} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setGpuLoadColor0(col)
                                SetGpuLoadColors(col, gpuLoadColor1, gpuLoadColor2)
                            }} />
                        </div>) : null}
                    <button
                        style={{
                            backgroundColor: "#" + gpuLoadColor1
                        }}
                        onClick={() => {
                            setShowGpuLoadPicker1(!showGpuLoadPicker1)
                        }}
                        className="cursor-pointer p-1 rounded border border-gray-500 w-28 block mb-2"
                    >
                        {gpuLoadColor1}
                    </button>
                    {showGpuLoadPicker1 ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowGpuLoadPicker1(false)
                            }}> </div>
                            <SketchPicker color={gpuLoadColor1} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setGpuLoadColor1(col)
                                SetGpuLoadColors(gpuLoadColor0, col, gpuLoadColor2)
                            }} />
                        </div>) : null}
                    <button
                        style={{
                            backgroundColor: "#" + gpuLoadColor2
                        }}
                        onClick={() => {
                            setShowGpuLoadPicker2(!showGpuLoadPicker2)
                        }}
                        className="cursor-pointer p-1 rounded border border-gray-500 w-28 block"
                    >
                        {gpuLoadColor2}
                    </button>
                    {showGpuLoadPicker2 ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowGpuLoadPicker2(false)
                            }}> </div>
                            <SketchPicker color={gpuLoadColor2} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setGpuLoadColor2(col)
                                SetGpuLoadColors(gpuLoadColor0, gpuLoadColor1, col)
                            }} />
                        </div>) : null}
                </div>
            </div>
        </SettingBox>
    );
}
export default Text;
