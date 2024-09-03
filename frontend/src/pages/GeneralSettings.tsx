import { useEffect, useState } from "react";
import { GetOrientation, GetRoundCorners, GetBackgroundAlpha, GetBackgroundColor, GetFontSize, SetBackgroundColor, SetBackgroundAlpha, SetRoundedCorners, SetFontSize, SetOrientation, GetTextColor, SetTextColor } from "../../wailsjs/go/main/App";
import SettingBox from "../general/SettingBox";
import { SketchPicker } from "react-color";
import Colors from "../generalSettings/Colors";

function GeneralSettings() {
    const [textColor, setTextColor] = useState<string>("");

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
                                type="number"
                                id="fontsize"
                                className="w-28 bg-gray-700 p-1 border rounded text-center"
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

                <Colors />

            </div>

        </>
    );
}
export default GeneralSettings;
