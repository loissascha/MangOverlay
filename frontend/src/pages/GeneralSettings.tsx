import React, { useEffect, useState } from "react";
import { GetBatteryColor, GetCpuColor, GetEngineColor, GetFrametimeColor, GetGpuColor, GetIoColor, GetMediaColor, GetNetworkColor, GetRamColor, GetVramColor, GetWineColor, SetBatteryColor, SetCpuColor, SetEngineColor, SetFrametimeColor, SetGpuColor, SetIoColor, SetMediaColor, SetNetworkColor, SetRamColor, SetVramColor, SetWineColor } from "../../wailsjs/go/main/App";
import SettingBox from "../general/SettingBox";

interface Props {
    orientation: string;
    setOrientation: React.Dispatch<string>;
    rounded: boolean;
    setRounded: React.Dispatch<boolean>;
    backgroundColor: string;
    setBackgroundColor: React.Dispatch<string>;
    backgroundAlpha: string;
    setBackgroundAlpha: React.Dispatch<string>;
    fontSize: string;
    setFontSize: React.Dispatch<string>;
}
function GeneralSettings({ orientation, setOrientation, rounded, setRounded, backgroundColor, setBackgroundColor, backgroundAlpha, setBackgroundAlpha, fontSize, setFontSize }: Props) {
    const [gpuColor, setGpuColor] = useState<string>("");
    const [cpuColor, setCpuColor] = useState<string>("");
    const [vramColor, setVramColor] = useState<string>("");
    const [ramColor, setRamColor] = useState<string>("");
    const [engineColor, setEngineColor] = useState<string>("");
    const [ioColor, setIoColor] = useState<string>("");
    const [frametimeColor, setFrametimeColor] = useState<string>("");
    const [mediaColor, setMediaColor] = useState<string>("");
    const [wineColor, setWineColor] = useState<string>("");
    const [batteryColor, setBatteryColor] = useState<string>("");
    const [networkColor, setNetworkColor] = useState<string>("");

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
        <>
            <div className="flex gap-5 flex-auto flex-wrap">
                <div>
                    <SettingBox header="Orientation">
                        <div>
                            <input
                                onClick={() => { setOrientation("vertical"); }}
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
                                onClick={() => { setOrientation("horizontal"); }}
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
                                onClick={() => { setOrientation("horizontal_stretch"); }}
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
                        <div>
                            <label htmlFor="position" className="me-2">Position</label>
                            <input
                                type="text"
                                id="position"
                                className="w-28 bg-gray-700"
                            />
                        </div>
                    </SettingBox>
                </div>

                <div>
                    <SettingBox header="Background">
                        <div className="grid grid-cols-2 gap-3">
                            <label htmlFor="bgcolor" className="me-2">Color:</label>
                            <input
                                type="text"
                                id="bgcolor"
                                className="w-28 bg-gray-700"
                                defaultValue={backgroundColor}
                                onChange={(event) => {
                                    setBackgroundColor(event.target.value);
                                }}
                            />
                            <label htmlFor="bgalpha" className="me-2">Alpha:</label>
                            <input
                                type="number"
                                min="0.1"
                                max="1"
                                step="0.1"
                                id="bgalpha"
                                className="w-28 bg-gray-700"
                                defaultValue={backgroundAlpha}
                                onChange={(event) => {
                                    setBackgroundAlpha(event.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <input
                                onClick={() => { setRounded(!rounded); }}
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
                                }}
                            />
                            <label htmlFor="textcolor" className="me-2">Color:</label>
                            <input
                                type="text"
                                id="textcolor"
                                className="w-28 bg-gray-700"
                            />
                        </div>
                    </SettingBox>
                </div>

                <SettingBox header="Colors">
                    <div className="grid grid-cols-2 gap-3">
                        <label htmlFor="cpucolor" className="me-2">CPU:</label>
                        <input
                            type="text"
                            id="cpucolor"
                            className="w-28 bg-gray-700"
                            defaultValue={cpuColor}
                            onChange={(event) => {
                                setCpuColor(event.target.value)
                                SetCpuColor(event.target.value)
                            }}
                        />
                        <label htmlFor="gpucolor" className="me-2">GPU:</label>
                        <input
                            type="text"
                            id="gpucolor"
                            className="w-28 bg-gray-700"
                            defaultValue={gpuColor}
                            onChange={(event) => {
                                setGpuColor(event.target.value)
                                SetGpuColor(event.target.value)
                            }}
                        />
                        <label htmlFor="vramcolor" className="me-2">VRAM:</label>
                        <input
                            type="text"
                            id="vramcolor"
                            className="w-28 bg-gray-700"
                            defaultValue={vramColor}
                            onChange={(event) => {
                                setVramColor(event.target.value)
                                SetVramColor(event.target.value)
                            }}
                        />
                        <label htmlFor="ramcolor" className="me-2">RAM:</label>
                        <input
                            type="text"
                            id="ramcolor"
                            className="w-28 bg-gray-700"
                            defaultValue={ramColor}
                            onChange={(event) => {
                                setRamColor(event.target.value)
                                SetRamColor(event.target.value)
                            }}
                        />
                        <label htmlFor="enginecolor" className="me-2">Engine:</label>
                        <input
                            type="text"
                            id="enginecolor"
                            className="w-28 bg-gray-700"
                            defaultValue={engineColor}
                            onChange={(event) => {
                                setEngineColor(event.target.value)
                                SetEngineColor(event.target.value)
                            }}
                        />
                        <label htmlFor="iocolor" className="me-2">IO:</label>
                        <input
                            type="text"
                            id="iocolor"
                            className="w-28 bg-gray-700"
                            defaultValue={ioColor}
                            onChange={(event) => {
                                setIoColor(event.target.value)
                                SetIoColor(event.target.value)
                            }}
                        />
                        <label htmlFor="frametimecolor" className="me-2">Frametime:</label>
                        <input
                            type="text"
                            id="frametimecolor"
                            className="w-28 bg-gray-700"
                            defaultValue={frametimeColor}
                            onChange={(event) => {
                                setFrametimeColor(event.target.value)
                                SetFrametimeColor(event.target.value)
                            }}
                        />
                        <label htmlFor="mediacolor" className="me-2">Media Player:</label>
                        <input
                            type="text"
                            id="mediacolor"
                            className="w-28 bg-gray-700"
                            defaultValue={mediaColor}
                            onChange={(event) => {
                                setMediaColor(event.target.value)
                                SetMediaColor(event.target.value)
                            }}
                        />
                        <label htmlFor="winecolor" className="me-2">Wine:</label>
                        <input
                            type="text"
                            id="winecolor"
                            className="w-28 bg-gray-700"
                            defaultValue={wineColor}
                            onChange={(event) => {
                                setWineColor(event.target.value)
                                SetWineColor(event.target.value)
                            }}
                        />
                        <label htmlFor="batterycolor" className="me-2">Battery:</label>
                        <input
                            type="text"
                            id="batterycolor"
                            className="w-28 bg-gray-700"
                            defaultValue={batteryColor}
                            onChange={(event) => {
                                setBatteryColor(event.target.value)
                                SetBatteryColor(event.target.value)
                            }}
                        />
                        <label htmlFor="networkcolor" className="me-2">Network:</label>
                        <input
                            type="text"
                            id="networkcolor"
                            className="w-28 bg-gray-700"
                            defaultValue={networkColor}
                            onChange={(event) => {
                                setNetworkColor(event.target.value)
                                SetNetworkColor(event.target.value)
                            }}
                        />
                    </div>
                </SettingBox>

                <SettingBox header="Keybinds">
                    <div>
                        <label htmlFor="showhide" className="me-2">Show/Hide:</label>
                        <input
                            type="text"
                            id="showhide"
                            className="w-28 bg-gray-700"
                        />
                    </div>
                </SettingBox>
            </div>

        </>
    );
}
export default GeneralSettings;
