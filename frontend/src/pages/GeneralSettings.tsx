import { useEffect, useState } from "react";
import { GetOrientation, GetRoundCorners, GetBackgroundAlpha, GetBackgroundColor, SetBackgroundColor, SetBackgroundAlpha, SetRoundedCorners, SetOrientation, GetPosition, GetKbToggleHud, GetKbToggleHudPosition, GetKbTogglePreset, GetKbToggleFpsLimit, GetKbToggleLogging, GetKbReloadCfg, GetKbUploadLog, SetKbToggleHud, SetKbToggleHudPosition, SetKbTogglePreset, SetKbToggleFpsLimit, SetKbToggleLogging, SetKbReloadCfg, SetKbUploadLog } from "../../wailsjs/go/main/App";
import SettingBox from "../ui/SettingBox";
import { SketchPicker } from "react-color";
import Colors from "../generalSettings/Colors";
import Text from "../generalSettings/Text";
import Position from "../generalSettings/Position";
import Gpu from "../generalSettings/Gpu";
import Cpu from "../generalSettings/Cpu";

function GeneralSettings() {
    const [orientation, setOrientation] = useState<string>("");
    const [rounded, setRounded] = useState<boolean>(false);

    const [kbToggleHud, setKbToggleHud] = useState<string>("")
    const [kbToggleHudPosition, setKbToggleHudPosition] = useState<string>("")
    const [kbTogglePreset, setKbTogglePreset] = useState<string>("")
    const [kbToggleFpsLimit, setKbToggleFpsLimit] = useState<string>("")
    const [kbToggleLogging, setKbToggleLogging] = useState<string>("")
    const [kbReloadCfg, setKbReloadCfg] = useState<string>("")
    const [kbUploadLog, setKbUploadLog] = useState<string>("")

    const [backgroundColor, setBackgroundColor] = useState<string>("");
    const [showBackgroundPicker, setShowBackgroundPicker] = useState<boolean>(false);

    const [backgroundAlpha, setBackgroundAlpha] = useState<string>("");

    useEffect(() => {
        GetOrientation().then((or) => {
            setOrientation(or)
        })
        GetRoundCorners().then((r: boolean) => {
            setRounded(r)
        })
        GetBackgroundColor().then((r) => {
            setBackgroundColor(r)
        })
        GetBackgroundAlpha().then((r) => {
            if (r == "") {
                r = "0.8"
            }
            setBackgroundAlpha(r)
        })
        GetKbToggleHud().then((r) => {
            setKbToggleHud(r)
        })
        GetKbToggleHudPosition().then((r) => {
            setKbToggleHudPosition(r)
        })
        GetKbTogglePreset().then((r) => {
            setKbTogglePreset(r)
        })
        GetKbToggleFpsLimit().then((r) => {
            setKbToggleFpsLimit(r)
        })
        GetKbToggleLogging().then((r) => {
            setKbToggleLogging(r)
        })
        GetKbReloadCfg().then((r) => {
            setKbReloadCfg(r)
        })
        GetKbUploadLog().then((r) => {
            setKbUploadLog(r)
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
                    <Position />
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
                                    className="cursor-pointer p-1 rounded border border-gray-500 w-28"
                                >
                                    {backgroundColor}
                                </button>
                                {showBackgroundPicker ? (
                                    <div className="absolute z-50 text-black">
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
                                className="w-28 bg-gray-700 p-1 text-center border border-gray-500 rounded"
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
                    <Text />
                </div>

                <div>

                    <Cpu />
                    <Gpu />
                </div>

                <div>
                    <Colors />
                </div>
                <SettingBox header="Keybinds">
                    <div className="grid grid-cols-2 gap-3">
                        <label htmlFor="togglehud" className="me-2">Toggle HUD:</label>
                        <input
                            type="text"
                            id="togglehud"
                            className="w-28 bg-gray-700 p-1 rounded border border-gray-500"
                            defaultValue={kbToggleHud}
                            onChange={(event) => {
                                const v = event.target.value
                                setKbToggleHud(v)
                                SetKbToggleHud(v)
                            }}
                        />
                        <label htmlFor="togglehudposition" className="me-2">Toggle Position:</label>
                        <input
                            type="text"
                            id="togglehudposition"
                            className="w-28 bg-gray-700 p-1 rounded border border-gray-500"
                            defaultValue={kbToggleHudPosition}
                            onChange={(event) => {
                                const v = event.target.value
                                setKbToggleHudPosition(v)
                                SetKbToggleHudPosition(v)
                            }}
                        />
                        <label htmlFor="togglepreset" className="me-2">Toggle Preset:</label>
                        <input
                            type="text"
                            id="togglepreset"
                            className="w-28 bg-gray-700 p-1 rounded border border-gray-500"
                            defaultValue={kbTogglePreset}
                            onChange={(event) => {
                                const v = event.target.value
                                setKbTogglePreset(v)
                                SetKbTogglePreset(v)
                            }}
                        />
                        <label htmlFor="togglefpslimit" className="me-2">Toggle FPS Limit:</label>
                        <input
                            type="text"
                            id="togglefpslimit"
                            className="w-28 bg-gray-700 p-1 rounded border border-gray-500"
                            defaultValue={kbToggleFpsLimit}
                            onChange={(event) => {
                                const v = event.target.value
                                setKbToggleFpsLimit(v)
                                SetKbToggleFpsLimit(v)
                            }}
                        />
                        <label htmlFor="togglelogging" className="me-2">Toggle Logging:</label>
                        <input
                            type="text"
                            id="togglelogging"
                            className="w-28 bg-gray-700 p-1 rounded border border-gray-500"
                            defaultValue={kbToggleLogging}
                            onChange={(event) => {
                                const v = event.target.value
                                setKbToggleLogging(v)
                                SetKbToggleLogging(v)
                            }}
                        />
                        <label htmlFor="reloadcfg" className="me-2">Reload Cfg:</label>
                        <input
                            type="text"
                            id="reloadcfg"
                            className="w-28 bg-gray-700 p-1 rounded border border-gray-500"
                            defaultValue={kbReloadCfg}
                            onChange={(event) => {
                                const v = event.target.value
                                setKbReloadCfg(v)
                                SetKbReloadCfg(v)
                            }}
                        />
                        <label htmlFor="uploadlog" className="me-2">Upload Log:</label>
                        <input
                            type="text"
                            id="uploadlog"
                            className="w-28 bg-gray-700 p-1 rounded border border-gray-500"
                            defaultValue={kbUploadLog}
                            onChange={(event) => {
                                const v = event.target.value
                                setKbUploadLog(v)
                                SetKbUploadLog(v)
                            }}
                        />
                    </div>
                </SettingBox>
            </div>

        </>
    );
}
export default GeneralSettings;
