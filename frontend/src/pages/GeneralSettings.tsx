import Text from "../settings/Text";
import Position from "../settings/Position";
import Keybinds from "../settings/Keybinds";
import Background from "../settings/Background";
import Orientation from "../settings/Orientation";

function GeneralSettings() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-5">
          <Position />
          <Keybinds />
        </div>
        <div className="flex flex-col gap-5">
          <Orientation />
          <Background />
          <Text />
        </div>
      </div>
    </>
  );
}
export default GeneralSettings;
