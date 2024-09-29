import SettingBox from "../ui/SettingBox";
import { GetFontSize, SetFontSize, GetTextColor, SetTextColor } from "../../wailsjs/go/main/App";
import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

function Text() {
    const [textColor, setTextColor] = useState<string>("");

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
                        <Popover className="relative">
                            <PopoverButton style={{
                                backgroundColor: "#" + textColor
                            }} className="cursor-pointer p-1 rounded border border-gray-500 w-28">{textColor}</PopoverButton>
                            <PopoverPanel anchor="bottom" className="flex flex-col bg-gray-500">
                                <SketchPicker color={textColor} onChange={(color) => {
                                    let col = color.hex;
                                    if (col[0] == "#") {
                                        col = col.substring(1)
                                    }
                                    setTextColor(col)
                                    SetTextColor(col)
                                }} />
                            </PopoverPanel>
                        </Popover>
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
                </div>
            </div>
        </SettingBox>
    );
}
export default Text;
