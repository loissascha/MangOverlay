import { useEffect, useState } from "react";
import SettingBox from "../ui/SettingBox";
import { SketchPicker } from "react-color";
import { GetCpuLoadColor0, GetCpuLoadColor1, GetCpuLoadColor2, GetCpuLoadValue, GetCpuText, SetCpuLoadValue, SetCpuText } from "../../wailsjs/go/main/App";

function Cpu() {
    const [cpuLoadColor0, setCpuLoadColor0] = useState<string>("");
    const [showCpuLoadPicker0, setShowCpuLoadPicker0] = useState<boolean>(false);

    const [cpuLoadColor1, setCpuLoadColor1] = useState<string>("");
    const [showCpuLoadPicker1, setShowCpuLoadPicker1] = useState<boolean>(false);

    const [cpuLoadColor2, setCpuLoadColor2] = useState<string>("");
    const [showCpuLoadPicker2, setShowCpuLoadPicker2] = useState<boolean>(false);

    const [cpuText, setCpuText] = useState<string>("")
    const [cpuLoadValue, setCpuLoadValue] = useState<string>("")

    useEffect(() => {
        GetCpuText().then((r) => {
            setCpuText(r)
        })
        GetCpuLoadValue().then((r) => {
            setCpuLoadValue(r)
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
    }, [])

    return (
        <SettingBox header="CPU">
            <div className="grid grid-cols-2 gap-3">
                <label htmlFor="cputext">Text:</label>
                <input
                    type="text"
                    id="cputext"
                    className="w-28 bg-gray-700 p-1 border border-gray-500 rounded text-center"
                    min="8"
                    max="50"
                    defaultValue={cpuText}
                    onChange={(event) => {
                        const nv = event.target.value
                        setCpuText(nv)
                        SetCpuText(nv)
                    }}
                />
                <label htmlFor="cpuloadvalue">Load Value:</label>
                <input
                    type="text"
                    id="cpuloadvalue"
                    className="w-28 bg-gray-700 p-1 border border-gray-500 rounded text-center"
                    min="8"
                    max="50"
                    defaultValue={cpuLoadValue}
                    onChange={(event) => {
                        const nv = event.target.value
                        setCpuLoadValue(nv)
                        SetCpuLoadValue(nv)
                    }}
                />
                <label htmlFor="cpucolor" className="me-2">Load Colors:</label>
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
            </div>
        </SettingBox>
    );
}
export default Cpu;
