import { useEffect, useState } from "react";
import { GetOrientation, GetRoundCorners, GetBackgroundAlpha, GetBackgroundColor, SetBackgroundColor, SetBackgroundAlpha, SetRoundedCorners, SetOrientation } from "../../wailsjs/go/main/App";
import SettingBox from "../ui/SettingBox";
import { SketchPicker } from "react-color";
import Colors from "../generalSettings/Colors";
import Text from "../generalSettings/Text";
import Position from "../generalSettings/Position";
import Gpu from "../generalSettings/Gpu";
import Cpu from "../generalSettings/Cpu";
import Fps from "../generalSettings/Fps";

function GeneralSettings() {
    const [orientation, setOrientation] = useState<string>("");
    const [rounded, setRounded] = useState<boolean>(false);


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
    }, [])

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-auto flex-wrap">
                <div className="mb-72">
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

                <div className="mb-72">
                    <Cpu />
                    <Gpu />
                    <Fps />
                </div>

                <div className="mb-72">
                    <Colors />
                </div>
            </div>

        </>
    );
}
export default GeneralSettings;
