import React from "react";
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

    return (
        <>
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

            <SettingBox header="Corners">
                <div>
                    <input
                        onClick={() => { setRounded(!rounded); }}
                        type="checkbox"
                        id="roundedCheck"
                        className="me-2"
                        readOnly={true}
                        checked={rounded}
                    />
                    <label htmlFor="roundedCheck">Rounded</label>
                </div>
            </SettingBox>

            <SettingBox header="Colors / Text">
                <div>
                    <label htmlFor="bgcolor" className="me-2">Background:</label>
                    <input
                        type="text"
                        id="bgcolor"
                        className="w-28 bg-gray-700"
                        defaultValue={backgroundColor}
                        onChange={(event) => {
                            setBackgroundColor(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="bgalpha" className="me-2">Background Alpha:</label>
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
                    <label htmlFor="fontsize" className="me-2">Font Size:</label>
                    <input
                        type="text"
                        id="fontsize"
                        className="w-28 bg-gray-700"
                        defaultValue={fontSize}
                        onChange={(event) => {
                            setFontSize(event.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="textcolor" className="me-2">Text Color:</label>
                    <input
                        type="text"
                        id="textcolor"
                        className="w-28 bg-gray-700"
                    />
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

        </>
    );
}
export default GeneralSettings;
