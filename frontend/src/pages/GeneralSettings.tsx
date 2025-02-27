import Text from "../settings/Text";
import Position from "../settings/Position";
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

        <Keybinds />
      </div>
    </>
  );
}
export default GeneralSettings;
