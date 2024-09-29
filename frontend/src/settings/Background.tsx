import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import SettingBox from "../ui/SettingBox";
import { SketchPicker } from "react-color";
import { useEffect, useState } from "react";
import { GetBackgroundAlpha, GetBackgroundColor, GetRoundCorners, SetBackgroundAlpha, SetBackgroundColor, SetRoundedCorners } from "../../wailsjs/go/main/App";

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

    return (
        <SettingBox header="Background">
            <div className="grid grid-cols-2 gap-3">
                <label htmlFor="bgcolor" className="me-2">Color:</label>
                <div>
                    <Popover className="relative">
                        <PopoverButton style={{
                            backgroundColor: "#" + backgroundColor
                        }} className="cursor-pointer p-1 rounded border border-gray-500 w-28">{backgroundColor}</PopoverButton>
                        <PopoverPanel anchor="bottom" className="flex flex-col bg-gray-500">
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
                    className="w-28 bg-gray-700 p-1 text-center border border-gray-500 rounded"
                    defaultValue={backgroundAlpha}
                    onChange={(event) => {
                        setBackgroundAlpha(event.target.value);
                        SetBackgroundAlpha(event.target.value)
                    }}
                />
                <label htmlFor="roundedCheck">Rounded Corners</label>
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
                </div>
            </div>
        </SettingBox>
    )
}
export default Background
