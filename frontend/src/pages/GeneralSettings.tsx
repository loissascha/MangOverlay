import React from "react";
import SettingBox from "../general/SettingBox";

interface Props {
    orientation: string;
    setOrientation: React.Dispatch<string>;
    rounded: boolean;
    setRounded: React.Dispatch<boolean>;
}
function GeneralSettings({ orientation, setOrientation, rounded, setRounded }: Props) {

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
                        className="w-28"
                    />
                </div>
                <div>
                    <label htmlFor="bgalpha" className="me-2">Background Alpha:</label>
                    <input
                        type="text"
                        id="bgalpha"
                        className="w-28"
                    />
                </div>
                <div>
                    <label htmlFor="fontsize" className="me-2">Font Size:</label>
                    <input
                        type="text"
                        id="fontsize"
                        className="w-28"
                    />
                </div>
                <div>
                    <label htmlFor="textcolor" className="me-2">Text Color:</label>
                    <input
                        type="text"
                        id="textcolor"
                        className="w-28"
                    />
                </div>
            </SettingBox>

            <SettingBox header="Position">
                <div>
                    <label htmlFor="textcolor" className="me-2">Text Color:</label>
                    <input
                        type="text"
                        id="textcolor"
                        className="w-28"
                    />
                </div>
            </SettingBox>

            <SettingBox header="Keybinds">
                <div>
                    <label htmlFor="textcolor" className="me-2">Text Color:</label>
                    <input
                        type="text"
                        id="textcolor"
                        className="w-28"
                    />
                </div>
            </SettingBox>

        </>
    );
}
export default GeneralSettings;
