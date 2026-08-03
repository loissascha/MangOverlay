import Text from "../settings/Text";
import Position from "../settings/Position";
import Keybinds from "../settings/Keybinds";
import Background from "../settings/Background";
import Orientation from "../settings/Orientation";

function GeneralSettings() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full">
        <div className="flex flex-col gap-5 border-r border-latte-surface2 dark:border-mocha-surface2 p-3">
          <Position />
          <div className="border-t border-latte-surface2 dark:border-mocha-surface2"></div>
          <Keybinds />
        </div>
        <div className="flex flex-col gap-5 p-3">
          <Orientation />
          <div className="border-t border-latte-surface2 dark:border-mocha-surface2"></div>
          <Background />
          <div className="border-t border-latte-surface2 dark:border-mocha-surface2"></div>
          <Text />
        </div>
      </div>
    </>
  );
}
export default GeneralSettings;
