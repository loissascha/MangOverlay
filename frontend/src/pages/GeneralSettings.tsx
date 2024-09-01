import React from "react";

interface Props {
    orientation: string;
    setOrientation: React.Dispatch<string>;
    rounded: boolean;
    setRounded: React.Dispatch<boolean>;
}
function GeneralSettings({ orientation, setOrientation, rounded, setRounded }: Props) {

    return (
        <>
            <div className="inline-block me-5">
                <h1 className="text-lg">Orientation</h1>
                <div className="border-2 border-gray-400 py-3 px-5 rounded flex flex-col gap-3">
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
                </div>
            </div>

            <div className="inline-block">
                <h1 className="text-lg">Corners</h1>
                <div className="border-2 border-gray-400 py-3 px-5 rounded flex flex-col gap-3">
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
                </div>
            </div>
        </>
    );
}
export default GeneralSettings;
