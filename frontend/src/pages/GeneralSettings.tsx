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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Position />
        <Orientation />
        <Background />
        <Text />
        <Graphs />

        <Cpu />
        <Fps />
        <Gpu />

        <Colors />
        <Keybinds />
      </div>
    </>
  );
}
export default GeneralSettings;
