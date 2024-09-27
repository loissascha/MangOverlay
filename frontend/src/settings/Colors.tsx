import { useEffect, useState } from "react";
import SettingBox from "../ui/SettingBox";
import { SketchPicker } from "react-color";
import { GetBatteryColor, GetCpuColor, GetCpuLoadColor0, GetCpuLoadColor1, GetCpuLoadColor2, GetEngineColor, GetFrametimeColor, GetGpuColor, GetGpuLoadColor0, GetGpuLoadColor1, GetGpuLoadColor2, GetIoColor, GetMediaColor, GetNetworkColor, GetRamColor, GetVramColor, GetWineColor, SetBatteryColor, SetCpuColor, SetCpuLoadColors, SetEngineColor, SetFrametimeColor, SetGpuColor, SetGpuLoadColors, SetIoColor, SetMediaColor, SetNetworkColor, SetRamColor, SetVramColor, SetWineColor } from "../../wailsjs/go/main/App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

function Colors() {
    const [gpuColor, setGpuColor] = useState<string>("");
    const [showGpuPicker, setShowGpuPicker] = useState<boolean>(false);


    const [cpuColor, setCpuColor] = useState<string>("");
    const [showCpuPicker, setShowCpuPicker] = useState<boolean>(false);

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

    const defaultCpuColor = "2E97CB"
    const defaultGpuColor = "2E9762"
    const defaultVramColor = "AD64C1"
    const defaultRamColor = "C26693"
    const defaultEngineColor = "EB5B5B"
    const defaultIoColor = "A491D3"
    const defaultFrametimeColor = "00FF00"
    const defaultMediaPlayerColor = "FFFFFF"
    const defaultWineColor = "EB4B4B"
    const defaultBatteryColor = "FF9078"
    const defaultNetworkColor = "E07B85"

    useEffect(() => {
        GetGpuColor().then((r) => {
            setGpuColor(r)
        })
        GetCpuColor().then((r) => {
            setCpuColor(r)
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
        <SettingBox nomargin={true} header="Colors">
            <div className="grid grid-cols-2 gap-3">
                <label htmlFor="cpucolor" className="me-2">CPU:</label>
                <div>
                    <div className="flex gap-2">
                        <button
                            style={{
                                backgroundColor: "#" + cpuColor
                            }}
                            onClick={() => {
                                setShowCpuPicker(!showCpuPicker)
                            }}
                            className="cursor-pointer p-1 rounded border border-gray-500 w-28"
                        >
                            {cpuColor}
                        </button>
                        {cpuColor != defaultCpuColor && (
                            <button
                                onClick={() => {
                                    setCpuColor(defaultCpuColor)
                                    SetCpuColor(defaultCpuColor)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
                    {showCpuPicker ? (
                        <div className="absolute z-50 text-black">
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
                <label htmlFor="gpucolor" className="me-2">GPU:</label>
                <div>
                    <div className="flex gap-2">
                        <button
                            style={{
                                backgroundColor: "#" + gpuColor
                            }}
                            onClick={() => {
                                setShowGpuPicker(!showGpuPicker)
                            }}
                            className="cursor-pointer p-1 rounded border border-gray-500 w-28"
                        >
                            {gpuColor}
                        </button>
                        {gpuColor != defaultGpuColor && (
                            <button
                                onClick={() => {
                                    setGpuColor(defaultGpuColor)
                                    SetGpuColor(defaultGpuColor)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
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
                    <div className="flex gap-2">
                        <button
                            style={{
                                backgroundColor: "#" + vramColor
                            }}
                            onClick={() => {
                                setShowVramPicker(!showVramPicker)
                            }}
                            className="cursor-pointer p-1 rounded border border-gray-500 w-28"
                        >
                            {vramColor}
                        </button>
                        {vramColor != defaultVramColor && (
                            <button
                                onClick={() => {
                                    setVramColor(defaultVramColor)
                                    SetVramColor(defaultVramColor)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
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
                    <div className="flex gap-2">
                        <button
                            style={{
                                backgroundColor: "#" + ramColor
                            }}
                            onClick={() => {
                                setShowRamPicker(!showRamPicker)
                            }}
                            className="cursor-pointer p-1 rounded border border-gray-500 w-28"
                        >
                            {ramColor}
                        </button>
                        {ramColor != defaultRamColor && (
                            <button
                                onClick={() => {
                                    setRamColor(defaultRamColor)
                                    SetRamColor(defaultRamColor)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
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
                    <div className="flex gap-2">
                        <button
                            style={{
                                backgroundColor: "#" + engineColor
                            }}
                            onClick={() => {
                                setShowEnginePicker(!showEnginePicker)
                            }}
                            className="cursor-pointer p-1 rounded border border-gray-500 w-28"
                        >
                            {engineColor}
                        </button>
                        {engineColor != defaultEngineColor && (
                            <button
                                onClick={() => {
                                    setEngineColor(defaultEngineColor)
                                    SetEngineColor(defaultEngineColor)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
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
                    <div className="flex gap-2">
                        <button
                            style={{
                                backgroundColor: "#" + ioColor
                            }}
                            onClick={() => {
                                setShowIoPicker(!showIoPicker)
                            }}
                            className="cursor-pointer p-1 rounded border border-gray-500 w-28"
                        >
                            {ioColor}
                        </button>
                        {ioColor != defaultIoColor && (
                            <button
                                onClick={() => {
                                    setIoColor(defaultIoColor)
                                    SetIoColor(defaultIoColor)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
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
                    <div className="flex gap-2">
                        <button
                            style={{
                                backgroundColor: "#" + frametimeColor
                            }}
                            onClick={() => {
                                setShowFrametimePicker(!showFrametimePicker)
                            }}
                            className="cursor-pointer p-1 rounded border border-gray-500 w-28"
                        >
                            {frametimeColor}
                        </button>
                        {frametimeColor != defaultFrametimeColor && (
                            <button
                                onClick={() => {
                                    setFrametimeColor(defaultFrametimeColor)
                                    SetFrametimeColor(defaultFrametimeColor)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
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
                    <div className="flex gap-2">
                        <button
                            style={{
                                backgroundColor: "#" + mediaColor
                            }}
                            onClick={() => {
                                setShowMediaPicker(!showMediaPicker)
                            }}
                            className="cursor-pointer p-1 rounded border border-gray-500 w-28"
                        >
                            {mediaColor}
                        </button>
                        {mediaColor != defaultMediaPlayerColor && (
                            <button
                                onClick={() => {
                                    setMediaColor(defaultMediaPlayerColor)
                                    SetMediaColor(defaultMediaPlayerColor)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
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
                    <div className="flex gap-2">
                        <button
                            style={{
                                backgroundColor: "#" + wineColor
                            }}
                            onClick={() => {
                                setShowWinePicker(!showWinePicker)
                            }}
                            className="cursor-pointer p-1 rounded border border-gray-500 w-28"
                        >
                            {wineColor}
                        </button>
                        {wineColor != defaultWineColor && (
                            <button
                                onClick={() => {
                                    setWineColor(defaultWineColor)
                                    SetWineColor(defaultWineColor)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
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
                    <div className="flex gap-2">
                        <button
                            style={{
                                backgroundColor: "#" + batteryColor
                            }}
                            onClick={() => {
                                setShowBatteryPicker(!showBatteryPicker)
                            }}
                            className="cursor-pointer p-1 rounded border border-gray-500 w-28"
                        >
                            {batteryColor}
                        </button>
                        {batteryColor != defaultBatteryColor && (
                            <button
                                onClick={() => {
                                    setBatteryColor(defaultBatteryColor)
                                    SetBatteryColor(defaultBatteryColor)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
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
                    <div className="flex gap-2">
                        <button
                            style={{
                                backgroundColor: "#" + networkColor
                            }}
                            onClick={() => {
                                setShowNetworkPicker(!showNetworkPicker)
                            }}
                            className="cursor-pointer p-1 rounded border border-gray-500 w-28"
                        >
                            {networkColor}
                        </button>
                        {networkColor != defaultNetworkColor && (
                            <button
                                onClick={() => {
                                    setNetworkColor(defaultNetworkColor)
                                    SetNetworkColor(defaultNetworkColor)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
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
