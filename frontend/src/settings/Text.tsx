import SettingBox from "../ui/SettingBox";
import { GetOrientation, GetRoundCorners, GetBackgroundAlpha, GetBackgroundColor, GetFontSize, SetBackgroundColor, SetBackgroundAlpha, SetRoundedCorners, SetFontSize, SetOrientation, GetTextColor, SetTextColor, GetCpuLoadColor0, GetCpuLoadColor1, GetCpuLoadColor2, SetCpuLoadColors, GetGpuLoadColor0, GetGpuLoadColor1, GetGpuLoadColor2, SetGpuLoadColors } from "../../wailsjs/go/main/App";
import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

function Text() {
    const [textColor, setTextColor] = useState<string>("");
    const [showTextPicker, setShowTextPicker] = useState<boolean>(false);

    const defaultTextColor = "FFFFFF"


    const [fontSize, setFontSize] = useState<string>("");

    useEffect(() => {
        GetTextColor().then((r) => {
            setTextColor(r)
        })
        GetFontSize().then((r) => {
            if (r == "") {
                r = "24"
            }
            setFontSize(r)
        })
    }, [])

    return (
        <SettingBox header="Text">
            <div className="grid grid-cols-2 gap-3">
                <label htmlFor="fontsize" className="me-2">Size:</label>
                <input
                    type="number"
                    id="fontsize"
                    className="w-28 bg-gray-700 p-1 border border-gray-500 rounded text-center"
                    defaultValue={fontSize}
                    min="8"
                    max="50"
                    onChange={(event) => {
                        let num = event.target.value
                        if (parseInt(num) < 8) {
                            num = "8"
                        }
                        setFontSize(num)
                        SetFontSize(num)
                    }}
                />
                <label htmlFor="textcolor" className="me-2">Color:</label>
                <div>
                    <div className="flex gap-2">
                        <button
                            style={{
                                backgroundColor: "#" + textColor
                            }}
                            onClick={() => {
                                setShowTextPicker(!showTextPicker)
                            }}
                            className="cursor-pointer p-1 rounded border border-gray-500 w-28"
                        >
                            {textColor}
                        </button>
                        {textColor != defaultTextColor && (
                            <button
                                onClick={() => {
                                    setTextColor(defaultTextColor)
                                    SetTextColor(defaultTextColor)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
                    {showTextPicker ? (
                        <div className="absolute z-50 text-black">
                            <div className="fixed top-0 left-0 right-0 bottom-0" onClick={() => {
                                setShowTextPicker(false)
                            }}> </div>
                            <SketchPicker color={textColor} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setTextColor(col)
                                SetTextColor(col)
                            }} />
                        </div>) : null}
                </div>
            </div>
        </SettingBox>
    );
}
export default Text;
