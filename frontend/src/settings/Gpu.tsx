import { useEffect, useState } from "react";
import { GetGpuLoadValue, SetGpuLoadColors, GetGpuLoadColor0, GetGpuLoadColor1, GetGpuLoadColor2, GetGpuText, SetGpuLoadValue, SetGpuText, GetElements, DeactivateElement, ActivateElement } from "../../wailsjs/go/main/App";
import SettingBox from "../ui/SettingBox";
import { SketchPicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

function Gpu() {
    const [gpuText, setGpuText] = useState<string>("")
    const [gpuLoadValue, setGpuLoadValue] = useState<string>("")

    const [gpuLoadColor0, setGpuLoadColor0] = useState<string>("");
    const [showGpuLoadPicker0, setShowGpuLoadPicker0] = useState<boolean>(false);

    const [gpuLoadColor1, setGpuLoadColor1] = useState<string>("");
    const [showGpuLoadPicker1, setShowGpuLoadPicker1] = useState<boolean>(false);

    const [gpuLoadColor2, setGpuLoadColor2] = useState<string>("");
    const [showGpuLoadPicker2, setShowGpuLoadPicker2] = useState<boolean>(false);

    const [gpuLoadChange, setGpuLoadChange] = useState<boolean>(false)

    const defaultGpuLoadColor0 = "39F900"
    const defaultGpuLoadColor1 = "FDFD09"
    const defaultGpuLoadColor2 = "B22222"

    useEffect(() => {
        GetGpuText().then((r) => {
            setGpuText(r)
        })
        GetGpuLoadValue().then((r) => {
            setGpuLoadValue(r)
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
        reloadElement()
    }, [])

    function reloadElement() {
        GetElements().then((r: any) => {
            for (var element of r) {
                if (element.Name == "gpu_load_change") {
                    setGpuLoadChange(element.Active)
                }
            }
        })
    }

    return (
        <SettingBox header="GPU">
            <div className="grid grid-cols-2 gap-3">
                <label htmlFor="gputext" className="me-2">Custom Text:</label>
                <input
                    type="text"
                    id="gputext"
                    className="w-28 bg-gray-700 p-1 border border-gray-500 rounded text-center"
                    min="8"
                    max="50"
                    defaultValue={gpuText}
                    onChange={(event) => {
                        const nv = event.target.value
                        setGpuText(nv)
                        SetGpuText(nv)
                    }}
                />
                <label htmlFor="showGpuLoadColors" className="cursor-pointer">GPU Color Change</label>
                <div>
                    <input
                        id="showGpuLoadColors"
                        type="checkbox"
                        checked={gpuLoadChange}
                        onChange={() => {
                            if (gpuLoadChange) {
                                DeactivateElement("gpu_load_change").then(() => {
                                    reloadElement()
                                })
                            } else {
                                ActivateElement("gpu_load_change").then(() => {
                                    reloadElement()
                                })
                            }
                        }}
                    />
                </div>
                <label htmlFor="gpuloadvalue" className="me-2">Load Value:</label>
                <input
                    type="text"
                    id="gpuloadvalue"
                    className="w-28 bg-gray-700 p-1 border border-gray-500 rounded text-center"
                    min="8"
                    max="50"
                    defaultValue={gpuLoadValue}
                    onChange={(event) => {
                        const nv = event.target.value
                        setGpuLoadValue(nv)
                        SetGpuLoadValue(nv)
                    }}
                />
                <label htmlFor="cpucolor" className="me-2">Load Colors:</label>
                <div>
                    <div className="flex gap-2">
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
                        {gpuLoadColor0 != defaultGpuLoadColor0 && (
                            <button
                                onClick={() => {
                                    setGpuLoadColor0(defaultGpuLoadColor0)
                                    SetGpuLoadColors(defaultGpuLoadColor0, gpuLoadColor1, gpuLoadColor2)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
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
                    <div className="flex gap-2">
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
                        {gpuLoadColor1 != defaultGpuLoadColor1 && (
                            <button
                                onClick={() => {
                                    setGpuLoadColor1(defaultGpuLoadColor1)
                                    SetGpuLoadColors(gpuLoadColor0, defaultGpuLoadColor1, gpuLoadColor2)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
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
                    <div className="flex gap-2">
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
                        {gpuLoadColor2 != defaultGpuLoadColor2 && (
                            <button
                                onClick={() => {
                                    setGpuLoadColor2(defaultGpuLoadColor2)
                                    SetGpuLoadColors(gpuLoadColor0, gpuLoadColor1, defaultGpuLoadColor2)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
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
export default Gpu;
