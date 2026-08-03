import SettingBox from "../ui/SettingBox";
import { GetFontSize, SetFontSize, GetTextColor, SetTextColor, GetTextOutlineColor, SetTextOutlineColor, GetTextOutlineThickness, SetTextOutlineThickness } from "../../wailsjs/go/main/App";
import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

function Text() {
    const [textColor, setTextColor] = useState<string>("");
    const [textOutlineColor, setTextOutlineColor] = useState<string>("")
    const [textOutlineThickness, setTextOutlineThickness] = useState<string>("")

    const defaultTextColor = "FFFFFF"
    const defaultTextOutlineColor = "000000"

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
        GetTextOutlineColor().then((r) => {
            setTextOutlineColor(r)
        })
        GetTextOutlineThickness().then((r) => {
            setTextOutlineThickness(r)
        })
    }, [])


    return (
        <SettingBox header="Text">
            <div className="grid grid-cols-2 gap-3">
                <label htmlFor="fontsize" className="me-2">Size:</label>
                <input
                    type="number"
                    id="fontsize"
                    className="w-28 bg-latte-surface0 dark:bg-mocha-surface0 p-1 border border-latte-surface2 dark:border-mocha-surface2 rounded text-center"
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
                            }} className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28">{textColor}</PopoverButton>
                            <PopoverPanel anchor="bottom" className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1">
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
                <label htmlFor="textoutlinecolor" className="me-2">Outline Color:</label>
                <div>
                    <div className="flex gap-2">
                        <Popover className="relative">
                            <PopoverButton style={{
                                backgroundColor: "#" + textOutlineColor
                            }} className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28">{textOutlineColor}</PopoverButton>
                            <PopoverPanel anchor="bottom" className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1">
                                <SketchPicker color={textOutlineColor} onChange={(color) => {
                                    let col = color.hex;
                                    if (col[0] == "#") {
                                        col = col.substring(1)
                                    }
                                    setTextOutlineColor(col)
                                    SetTextOutlineColor(col)
                                }} />
                            </PopoverPanel>
                        </Popover>
                        {textOutlineColor != defaultTextOutlineColor && (
                            <button
                                onClick={() => {
                                    setTextOutlineColor(defaultTextOutlineColor)
                                    SetTextOutlineColor(defaultTextOutlineColor)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
                </div>
                <label htmlFor="outlinethickness" className="me-2">Outline Thickness:</label>
                <input
                    type="number"
                    id="outlinethickness"
                    className="w-28 bg-latte-surface0 dark:bg-mocha-surface0 p-1 border border-latte-surface2 dark:border-mocha-surface2 rounded text-center"
                    defaultValue={textOutlineThickness}
                    step="0.1"
                    onChange={(event) => {
                        let num = event.target.value
                        setTextOutlineThickness(num)
                        SetTextOutlineThickness(num)
                    }}
                />
            </div>
        </SettingBox>
    );
}
export default Text;
