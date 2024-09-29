import { useEffect, useState } from "react";
import { GetOrientation, GetRoundCorners, GetBackgroundAlpha, GetBackgroundColor, SetBackgroundColor, SetBackgroundAlpha, SetRoundedCorners, SetOrientation } from "../../wailsjs/go/main/App";
import SettingBox from "../ui/SettingBox";
import Colors from "../settings/Colors";
import Text from "../settings/Text";
import Position from "../settings/Position";
import Gpu from "../settings/Gpu";
import Cpu from "../settings/Cpu";
import Fps from "../settings/Fps";
import Graphs from "../settings/Graphs";
import Keybinds from "../settings/Keybinds";
import Background from "../settings/Background";

function GeneralSettings() {
    const [orientation, setOrientation] = useState<string>("");

    useEffect(() => {
        GetOrientation().then((or) => {
            setOrientation(or)
        })
    }, [])

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-auto flex-wrap">
                <div className="flex flex-col gap-2">
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
                    <Background />
                    <Text />
                    <Graphs />
                </div>

                <div className="flex flex-col gap-2">
                    <Cpu />
                    <Gpu />
                    <Fps />
                </div>

                <div className="flex flex-col gap-2">
                    <Colors />
                    <Keybinds />
                </div>
            </div >

        </>
    );
}
export default GeneralSettings;
