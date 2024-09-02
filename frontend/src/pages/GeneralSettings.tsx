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
                        />
                        <label htmlFor="gpucolor" className="me-2">GPU:</label>
                        <input
                            type="text"
                            id="gpucolor"
                            className="w-28 bg-gray-700"
                        />
                        <label htmlFor="vramcolor" className="me-2">VRAM:</label>
                        <input
                            type="text"
                            id="vramcolor"
                            className="w-28 bg-gray-700"
                        />
                        <label htmlFor="ramcolor" className="me-2">RAM:</label>
                        <input
                            type="text"
                            id="ramcolor"
                            className="w-28 bg-gray-700"
                        />
                        <label htmlFor="enginecolor" className="me-2">Engine:</label>
                        <input
                            type="text"
                            id="enginecolor"
                            className="w-28 bg-gray-700"
                        />
                        <label htmlFor="iocolor" className="me-2">IO:</label>
                        <input
                            type="text"
                            id="iocolor"
                            className="w-28 bg-gray-700"
                        />
                        <label htmlFor="frametimecolor" className="me-2">Frametime:</label>
                        <input
                            type="text"
                            id="frametimecolor"
                            className="w-28 bg-gray-700"
                        />
                        <label htmlFor="mediacolor" className="me-2">Media Player:</label>
                        <input
                            type="text"
                            id="mediacolor"
                            className="w-28 bg-gray-700"
                        />
                        <label htmlFor="winecolor" className="me-2">Wine:</label>
                        <input
                            type="text"
                            id="winecolor"
                            className="w-28 bg-gray-700"
                        />
                        <label htmlFor="batterycolor" className="me-2">Battery:</label>
                        <input
                            type="text"
                            id="batterycolor"
                            className="w-28 bg-gray-700"
                        />
                        <label htmlFor="networkcolor" className="me-2">Network:</label>
                        <input
                            type="text"
                            id="networkcolor"
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
            </div>

        </>
    );
}
export default GeneralSettings;
