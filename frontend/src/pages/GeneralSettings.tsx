import Colors from "../settings/Colors";
import Text from "../settings/Text";
import Position from "../settings/Position";
import Gpu from "../settings/Gpu";
import Cpu from "../settings/Cpu";
import Fps from "../settings/Fps";
import Graphs from "../settings/Graphs";
import Keybinds from "../settings/Keybinds";
import Background from "../settings/Background";
import Orientation from "../settings/Orientation";

function GeneralSettings() {

    return (
        <>
            <div className="">
                <div className="flex flex-col gap-2">
                    <Orientation />
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
