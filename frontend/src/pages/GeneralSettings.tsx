import React, { useEffect, useRef, useState } from "react";
import { GetBatteryColor, GetCpuColor, GetEngineColor, GetFrametimeColor, GetGpuColor, GetIoColor, GetMediaColor, GetNetworkColor, GetRamColor, GetVramColor, GetWineColor, SetBatteryColor, SetCpuColor, SetEngineColor, SetFrametimeColor, SetGpuColor, SetIoColor, SetMediaColor, SetNetworkColor, SetRamColor, SetVramColor, SetWineColor, GetOrientation, GetRoundCorners, GetBackgroundAlpha, GetBackgroundColor, GetFontSize, SetBackgroundColor, SetBackgroundAlpha, SetRoundedCorners, SetFontSize, SetOrientation, GetTextColor, SetTextColor } from "../../wailsjs/go/main/App";
import SettingBox from "../general/SettingBox";
import { SketchPicker } from "react-color";

function GeneralSettings() {
    const [textColor, setTextColor] = useState<string>("");

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

    const [orientation, setOrientation] = useState<string>("");
    const [rounded, setRounded] = useState<boolean>(false);
    const [fontSize, setFontSize] = useState<string>("");

    const [backgroundColor, setBackgroundColor] = useState<string>("");
    const [showBackgroundPicker, setShowBackgroundPicker] = useState<boolean>(false);

    const [backgroundAlpha, setBackgroundAlpha] = useState<string>("");

    useEffect(() => {
        GetTextColor().then((r) => {
            setTextColor(r)
        })
        GetOrientation().then((or) => {
            setOrientation(or);
        });
        GetRoundCorners().then((r: boolean) => {
            setRounded(r);
        });
        GetBackgroundColor().then((r) => {
            setBackgroundColor(r);
        });
        GetBackgroundAlpha().then((r) => {
            if (r == "") {
                r = "0.8"
            }
            setBackgroundAlpha(r);
        })
        GetFontSize().then((r) => {
            if (r == "") {
                r = "24"
            }
            setFontSize(r)
        })
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
        <>
            <div className="flex gap-5 flex-auto flex-wrap">
                <div>
                    <SettingBox header="Orientation">
                        <div>
                            <input
                                onClick={() => {
                                    setOrientation("vertical");
                                    SetOrientation("vertical")
                                }}
                                type="radio"
                                name="orientationRadio"
                                className="me-2"
                                id="orientationVertical"
                                readOnly={true}
                                checked={(orientation == "vertical")}
                            />
                            <label htmlFor="orientationVertical">Vertical</label>
                        </div>
                        <div>
                            <input
                                onClick={() => {
                                    setOrientation("horizontal");
                                    SetOrientation("horizontal")
                                }}
                                type="radio"
                                name="orientationRadio"
                                className="me-2"
                                id="orientationHorizontal"
                                readOnly={true}
                                checked={(orientation == "horizontal")}
                            />
                            <label htmlFor="orientationHorizontal">Horizontal</label>
                        </div>
                        <div>
                            <input
                                onClick={() => {
                                    setOrientation("horizontal_stretch");
                                    SetOrientation("horizontal_stretch")
                                }}
                                type="radio"
                                name="orientationRadio"
                                className="me-2"
                                id="orientationHorizontalStretch"
                                readOnly={true}
                                checked={(orientation == "horizontal_stretch")}
                            />
                            <label htmlFor="orientationHorizontalStretch">Horizontal Stretch</label>
                        </div>
                    </SettingBox>
                    <SettingBox header="Position">
                        <div className="grid grid-cols-2 gap-3">
                            <label htmlFor="position" className="me-2">Position</label>
                            <input
                                type="text"
                                id="position"
                                className="w-28 bg-gray-700"
                            />
                        </div>
                    </SettingBox>
                    <SettingBox header="Keybinds">
                        <div className="grid grid-cols-2 gap-3">
                            <label htmlFor="togglehud" className="me-2">Toggle HUD:</label>
                            <input
                                type="text"
                                id="togglehud"
                                className="w-28 bg-gray-700"
                            />
                            <label htmlFor="togglehudposition" className="me-2">Toggle Position:</label>
                            <input
                                type="text"
                                id="togglehudposition"
                                className="w-28 bg-gray-700"
                            />
                            <label htmlFor="togglepreset" className="me-2">Toggle Preset:</label>
                            <input
                                type="text"
                                id="togglepreset"
                                className="w-28 bg-gray-700"
                            />
                            <label htmlFor="togglefpslimit" className="me-2">Toggle FPS Limit:</label>
                            <input
                                type="text"
                                id="togglefpslimit"
                                className="w-28 bg-gray-700"
                            />
                            <label htmlFor="togglelogging" className="me-2">Toggle Logging:</label>
                            <input
                                type="text"
                                id="togglelogging"
                                className="w-28 bg-gray-700"
                            />
                            <label htmlFor="reloadcfg" className="me-2">Reload Cfg:</label>
                            <input
                                type="text"
                                id="reloadcfg"
                                className="w-28 bg-gray-700"
                            />
                        </div>
                    </SettingBox>
                </div>

                <div>
                    <SettingBox header="Background">
                        <div className="grid grid-cols-2 gap-3">
                            <label htmlFor="bgcolor" className="me-2">Color:</label>
                            <div>
                                <button
                                    style={{
                                        backgroundColor: "#" + backgroundColor
                                    }}
                                    onClick={() => {
                                        setShowBackgroundPicker(!showBackgroundPicker)
                                    }}
                                    className="cursor-pointer p-1 rounded border w-28"
                                >
                                    {backgroundColor}
                                </button>
                                {showBackgroundPicker ? (
                                    <div className="absolute z-50">
                                        <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                            setShowBackgroundPicker(false)
                                        }}> </div>
                                        <SketchPicker color={backgroundColor} onChange={(color) => {
                                            let col = color.hex;
                                            if (col[0] == "#") {
                                                col = col.substring(1)
                                            }
                                            setBackgroundColor(col)
                                            SetBackgroundColor(col)
                                        }} />
                                    </div>) : null}
                            </div>
                            <label htmlFor="bgalpha" className="me-2">Alpha:</label>
                            <input
                                type="number"
                                min="0.1"
                                max="1"
                                step="0.1"
                                id="bgalpha"
                                className="w-28 bg-gray-700 p-1 text-center border rounded"
                                defaultValue={backgroundAlpha}
                                onChange={(event) => {
                                    setBackgroundAlpha(event.target.value);
                                    SetBackgroundAlpha(event.target.value)
                                }}
                            />
                        </div>
                        <div>
                            <input
                                onClick={() => {
                                    const newV = !rounded;
                                    setRounded(newV);
                                    SetRoundedCorners(newV)
                                }}
                                type="checkbox"
                                id="roundedCheck"
                                className="me-2"
                                readOnly={true}
                                checked={rounded}
                            />
                            <label htmlFor="roundedCheck">Rounded Corners</label>
                        </div>
                    </SettingBox>

                    <SettingBox header="Text">
                        <div className="grid grid-cols-2 gap-3">
                            <label htmlFor="fontsize" className="me-2">Size:</label>
                            <input
                                type="text"
                                id="fontsize"
                                className="w-28 bg-gray-700"
                                defaultValue={fontSize}
                                onChange={(event) => {
                                    setFontSize(event.target.value)
                                    SetFontSize(event.target.value)
                                }}
                            />
                            <label htmlFor="textcolor" className="me-2">Color:</label>
                            <input
                                type="text"
                                id="textcolor"
                                className="w-28 bg-gray-700"
                                defaultValue={textColor}
                                onChange={(event) => {
                                    setTextColor(event.target.value)
                                    SetTextColor(event.target.value)
                                }}
                            />
                        </div>
                    </SettingBox>
                </div>

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

            </div>

        </>
    );
}
export default GeneralSettings;
