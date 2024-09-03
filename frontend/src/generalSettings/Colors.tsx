import { useEffect, useState } from "react";
import SettingBox from "../general/SettingBox";
import { SketchPicker } from "react-color";
import { GetBatteryColor, GetCpuColor, GetCpuLoadColor0, GetCpuLoadColor1, GetCpuLoadColor2, GetEngineColor, GetFrametimeColor, GetGpuColor, GetIoColor, GetMediaColor, GetNetworkColor, GetRamColor, GetVramColor, GetWineColor, SetBatteryColor, SetCpuColor, SetCpuLoadColors, SetEngineColor, SetFrametimeColor, SetGpuColor, SetIoColor, SetMediaColor, SetNetworkColor, SetRamColor, SetVramColor, SetWineColor } from "../../wailsjs/go/main/App";

function Colors() {
    const [gpuColor, setGpuColor] = useState<string>("");
    const [showGpuPicker, setShowGpuPicker] = useState<boolean>(false);

    const [cpuColor, setCpuColor] = useState<string>("");
    const [showCpuPicker, setShowCpuPicker] = useState<boolean>(false);

    const [cpuLoadColor0, setCpuLoadColor0] = useState<string>("");
    const [showCpuLoadPicker0, setShowCpuLoadPicker0] = useState<boolean>(false);

    const [cpuLoadColor1, setCpuLoadColor1] = useState<string>("");
    const [showCpuLoadPicker1, setShowCpuLoadPicker1] = useState<boolean>(false);

    const [cpuLoadColor2, setCpuLoadColor2] = useState<string>("");
    const [showCpuLoadPicker2, setShowCpuLoadPicker2] = useState<boolean>(false);

    const [vramColor, setVramColor] = useState<string>("");
    const [showVramPicker, setShowVramPicker] = useState<boolean>(false);

    const [ramColor, setRamColor] = useState<string>("");
    const [showRamPicker, setShowRamPicker] = useState<boolean>(false);

    const [engineColor, setEngineColor] = useState<string>("");
    const [showEnginePicker, setShowEnginePicker] = useState<boolean>(false);

    const [ioColor, setIoColor] = useState<string>("");
    const [showIoPicker, setShowIoPicker] = useState<boolean>(false);

    const [frametimeColor, setFrametimeColor] = useState<string>("");
    const [showFrametimePicker, setShowFrametimePicker] = useState<boolean>(false);

    const [mediaColor, setMediaColor] = useState<string>("");
    const [showMediaPicker, setShowMediaPicker] = useState<boolean>(false);

    const [wineColor, setWineColor] = useState<string>("");
    const [showWinePicker, setShowWinePicker] = useState<boolean>(false);

    const [batteryColor, setBatteryColor] = useState<string>("");
    const [showBatteryPicker, setShowBatteryPicker] = useState<boolean>(false);

    const [networkColor, setNetworkColor] = useState<string>("");
    const [showNetworkPicker, setShowNetworkPicker] = useState<boolean>(false);

    useEffect(() => {
        GetGpuColor().then((r) => {
            setGpuColor(r)
        })
        GetCpuColor().then((r) => {
            setCpuColor(r)
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
        GetVramColor().then((r) => {
            setVramColor(r)
        })
        GetRamColor().then((r) => {
            setRamColor(r)
        })
        GetEngineColor().then((r) => {
            setEngineColor(r)
        })
        GetIoColor().then((r) => {
            setIoColor(r)
        })
        GetFrametimeColor().then((r) => {
            setFrametimeColor(r)
        })
        GetMediaColor().then((r) => {
            setMediaColor(r)
        })
        GetWineColor().then((r) => {
            setWineColor(r)
        })
        GetBatteryColor().then((r) => {
            setBatteryColor(r)
        })
        GetNetworkColor().then((r) => {
            setNetworkColor(r)
        })
    }, [])

    return (
        <SettingBox header="Colors">
            <div className="grid grid-cols-2 gap-3">
                <label htmlFor="cpucolor" className="me-2">CPU:</label>
                <div>
                    <button
                        style={{
                            backgroundColor: "#" + cpuColor
                        }}
                        onClick={() => {
                            setShowCpuPicker(!showCpuPicker)
                        }}
                        className="cursor-pointer p-1 rounded border w-28"
                    >
                        {cpuColor}
                    </button>
                    {showCpuPicker ? (
                        <div className="absolute z-50">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowCpuPicker(false)
                            }}> </div>
                            <SketchPicker color={cpuColor} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setCpuColor(col)
                                SetCpuColor(col)
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
                        className="cursor-pointer p-1 rounded border w-28 block mb-2"
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
                                SetCpuLoadColors(cpuLoadColor0, cpuLoadColor1, cpuLoadColor2)
                            }} />
                        </div>) : null}
                    <button
                        style={{
                            backgroundColor: "#" + cpuLoadColor1
                        }}
                        onClick={() => {
                            setShowCpuLoadPicker1(!showCpuLoadPicker1)
                        }}
                        className="cursor-pointer p-1 rounded border w-28 block mb-2"
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
                                SetCpuLoadColors(cpuLoadColor0, cpuLoadColor1, cpuLoadColor2)
                            }} />
                        </div>) : null}
                    <button
                        style={{
                            backgroundColor: "#" + cpuLoadColor2
                        }}
                        onClick={() => {
                            setShowCpuLoadPicker2(!showCpuLoadPicker2)
                        }}
                        className="cursor-pointer p-1 rounded border w-28 block"
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
                                SetCpuLoadColors(cpuLoadColor0, cpuLoadColor1, cpuLoadColor2)
                            }} />
                        </div>) : null}
                </div>
                <label htmlFor="gpucolor" className="me-2">GPU:</label>
                <div>
                    <button
                        style={{
                            backgroundColor: "#" + gpuColor
                        }}
                        onClick={() => {
                            setShowGpuPicker(!showGpuPicker)
                        }}
                        className="cursor-pointer p-1 rounded border w-28"
                    >
                        {gpuColor}
                    </button>
                    {showGpuPicker ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowGpuPicker(false)
                            }}> </div>
                            <SketchPicker color={gpuColor} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setGpuColor(col)
                                SetGpuColor(col)
                            }} />
                        </div>) : null}
                </div>
                <label htmlFor="vramcolor" className="me-2">VRAM:</label>
                <div>
                    <button
                        style={{
                            backgroundColor: "#" + vramColor
                        }}
                        onClick={() => {
                            setShowVramPicker(!showVramPicker)
                        }}
                        className="cursor-pointer p-1 rounded border w-28"
                    >
                        {vramColor}
                    </button>
                    {showVramPicker ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowVramPicker(false)
                            }}> </div>
                            <SketchPicker color={vramColor} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setVramColor(col)
                                SetVramColor(col)
                            }} />
                        </div>) : null}
                </div>
                <label htmlFor="ramcolor" className="me-2">RAM:</label>
                <div>
                    <button
                        style={{
                            backgroundColor: "#" + ramColor
                        }}
                        onClick={() => {
                            setShowRamPicker(!showRamPicker)
                        }}
                        className="cursor-pointer p-1 rounded border w-28"
                    >
                        {ramColor}
                    </button>
                    {showRamPicker ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowRamPicker(false)
                            }}> </div>
                            <SketchPicker color={ramColor} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setRamColor(col)
                                SetRamColor(col)
                            }} />
                        </div>) : null}
                </div>
                <label htmlFor="enginecolor" className="me-2">Engine:</label>
                <div>
                    <button
                        style={{
                            backgroundColor: "#" + engineColor
                        }}
                        onClick={() => {
                            setShowEnginePicker(!showEnginePicker)
                        }}
                        className="cursor-pointer p-1 rounded border w-28"
                    >
                        {engineColor}
                    </button>
                    {showEnginePicker ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowEnginePicker(false)
                            }}> </div>
                            <SketchPicker color={engineColor} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setEngineColor(col)
                                SetEngineColor(col)
                            }} />
                        </div>) : null}
                </div>
                <label htmlFor="iocolor" className="me-2">IO:</label>
                <div>
                    <button
                        style={{
                            backgroundColor: "#" + ioColor
                        }}
                        onClick={() => {
                            setShowIoPicker(!showIoPicker)
                        }}
                        className="cursor-pointer p-1 rounded border w-28"
                    >
                        {ioColor}
                    </button>
                    {showIoPicker ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowIoPicker(false)
                            }}> </div>
                            <SketchPicker color={ioColor} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setIoColor(col)
                                SetIoColor(col)
                            }} />
                        </div>) : null}
                </div>
                <label htmlFor="frametimecolor" className="me-2">Frametime:</label>
                <div>
                    <button
                        style={{
                            backgroundColor: "#" + frametimeColor
                        }}
                        onClick={() => {
                            setShowFrametimePicker(!showFrametimePicker)
                        }}
                        className="cursor-pointer p-1 rounded border w-28"
                    >
                        {frametimeColor}
                    </button>
                    {showFrametimePicker ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowFrametimePicker(false)
                            }}> </div>
                            <SketchPicker color={frametimeColor} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setFrametimeColor(col)
                                SetFrametimeColor(col)
                            }} />
                        </div>) : null}
                </div>
                <label htmlFor="mediacolor" className="me-2">Media Player:</label>
                <div>
                    <button
                        style={{
                            backgroundColor: "#" + mediaColor
                        }}
                        onClick={() => {
                            setShowMediaPicker(!showMediaPicker)
                        }}
                        className="cursor-pointer p-1 rounded border w-28"
                    >
                        {mediaColor}
                    </button>
                    {showMediaPicker ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowMediaPicker(false)
                            }}> </div>
                            <SketchPicker color={mediaColor} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setMediaColor(col)
                                SetMediaColor(col)
                            }} />
                        </div>) : null}
                </div>
                <label htmlFor="winecolor" className="me-2">Wine:</label>
                <div>
                    <button
                        style={{
                            backgroundColor: "#" + wineColor
                        }}
                        onClick={() => {
                            setShowWinePicker(!showWinePicker)
                        }}
                        className="cursor-pointer p-1 rounded border w-28"
                    >
                        {wineColor}
                    </button>
                    {showWinePicker ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowWinePicker(false)
                            }}> </div>
                            <SketchPicker color={wineColor} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setWineColor(col)
                                SetWineColor(col)
                            }} />
                        </div>) : null}
                </div>
                <label htmlFor="batterycolor" className="me-2">Battery:</label>
                <div>
                    <button
                        style={{
                            backgroundColor: "#" + batteryColor
                        }}
                        onClick={() => {
                            setShowBatteryPicker(!showBatteryPicker)
                        }}
                        className="cursor-pointer p-1 rounded border w-28"
                    >
                        {batteryColor}
                    </button>
                    {showBatteryPicker ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowBatteryPicker(false)
                            }}> </div>
                            <SketchPicker color={batteryColor} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setBatteryColor(col)
                                SetBatteryColor(col)
                            }} />
                        </div>) : null}
                </div>
                <label htmlFor="networkcolor" className="me-2">Network:</label>
                <div>
                    <button
                        style={{
                            backgroundColor: "#" + networkColor
                        }}
                        onClick={() => {
                            setShowNetworkPicker(!showNetworkPicker)
                        }}
                        className="cursor-pointer p-1 rounded border w-28"
                    >
                        {networkColor}
                    </button>
                    {showNetworkPicker ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowNetworkPicker(false)
                            }}> </div>
                            <SketchPicker color={networkColor} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setNetworkColor(col)
                                SetNetworkColor(col)
                            }} />
                        </div>) : null}
                </div>
            </div>
        </SettingBox>
    );
}
export default Colors;
