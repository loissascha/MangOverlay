import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import SettingBox from "../ui/SettingBox";
import { SketchPicker } from "react-color";
import { useEffect, useState } from "react";
import { GetBackgroundAlpha, GetBackgroundColor, GetRoundCorners, SetBackgroundAlpha, SetBackgroundColor, SetRoundedCorners } from "../../wailsjs/go/main/App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";

function Background() {
    const [backgroundColor, setBackgroundColor] = useState<string>("");
    const [backgroundAlpha, setBackgroundAlpha] = useState<string>("");
    const [rounded, setRounded] = useState<boolean>(false);

    useEffect(() => {
        GetBackgroundColor().then((r) => {
            setBackgroundColor(r)
        })
        GetBackgroundAlpha().then((r) => {
            if (r == "") {
                r = "0.8"
            }
            setBackgroundAlpha(r)
        })
        GetRoundCorners().then((r: boolean) => {
            setRounded(r)
        })
    }, [])

    function toggleRounded() {
        const newV = !rounded;
        setRounded(newV);
        SetRoundedCorners(newV)
    }

    return (
        <SettingBox header="Background">
            <div className="grid grid-cols-2 gap-3">
                <label htmlFor="bgcolor" className="me-2">Color:</label>
                <div>
                    <Popover className="relative">
                        <PopoverButton style={{
                            backgroundColor: "#" + backgroundColor
                        }} className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28">{backgroundColor}</PopoverButton>
                        <PopoverPanel anchor="bottom" className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1">
                            <SketchPicker color={backgroundColor} onChange={(color) => {
                                let col = color.hex;
                                if (col[0] == "#") {
                                    col = col.substring(1)
                                }
                                setBackgroundColor(col)
                                SetBackgroundColor(col)
                            }} />
                        </PopoverPanel>
                    </Popover>
                </div>
                <label htmlFor="bgalpha" className="me-2">Alpha:</label>
                <input
                    type="number"
                    min="0.1"
                    max="1"
                    step="0.1"
                    id="bgalpha"
                    className="w-28 bg-latte-surface0 dark:bg-mocha-surface0 p-1 text-center border border-latte-surface2 dark:border-mocha-surface2 rounded"
                    defaultValue={backgroundAlpha}
                    onChange={(event) => {
                        setBackgroundAlpha(event.target.value);
                        SetBackgroundAlpha(event.target.value)
                    }}
                />
                <label htmlFor="roundedCheck" className="cursor-pointer">Rounded Corners</label>
                <div>
                    {rounded ? (
                        <FontAwesomeIcon icon={faSquareCheck} className="cursor-pointer" onClick={() => { toggleRounded() }} />
                    ) : (
                        <FontAwesomeIcon icon={faSquare} className="cursor-pointer" onClick={() => { toggleRounded() }} />
                    )}
                    <input
                        onClick={() => {
                            toggleRounded()
                        }}
                        type="checkbox"
                        id="roundedCheck"
                        className="hidden"
                        readOnly={true}
                        checked={rounded}
                    />
                </div>
            </div>
        </SettingBox>
    )
}
export default Background
