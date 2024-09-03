import { useEffect, useState } from "react";
import SettingBox from "../ui/SettingBox";
import { GetPosition, SetPosition } from "../../wailsjs/go/main/App";

function Position() {
    const [position, setPosition] = useState<string>("");

    useEffect(() => {
        GetPosition().then((r) => {
            setPosition(r)
            console.log("position: ", r)
        })
    }, [])

    if (position == "") {
        return null
    }

    return (
        <SettingBox header="Position">
            <div className="grid grid-cols-2 gap-3">
                <div>Position</div>
                <div>
                    <div className="w-28 h-20 bg-gray-500 grid grid-cols-2 p-1">
                        <div className="grid grid-rows-2">
                            <div className="flex items-start">
                                <input
                                    type="radio"
                                    name="position"
                                    checked={(position == "top-left")}
                                    onChange={() => {
                                        setPosition("top-left")
                                        SetPosition("top-left")
                                    }}
                                />
                            </div>
                            <div className="flex items-end">
                                <input
                                    type="radio"
                                    name="position"
                                    checked={(position == "bottom-left")}
                                    onChange={() => {
                                        setPosition("bottom-left")
                                        SetPosition("bottom-left")
                                    }}
                                />
                            </div>
                        </div>
                        <div className="grid grid-rows-2">
                            <div className="flex justify-end">
                                <input
                                    type="radio"
                                    name="position"
                                    checked={(position == "top-right")}
                                    onChange={() => {
                                        setPosition("top-right")
                                        SetPosition("top-right")
                                    }}
                                />
                            </div>
                            <div className="flex justify-end items-end">
                                <input
                                    type="radio"
                                    name="position"
                                    checked={(position == "bottom-right")}
                                    onChange={() => {
                                        setPosition("bottom-right")
                                        SetPosition("bottom-right")
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SettingBox>
    );
}
export default Position;
