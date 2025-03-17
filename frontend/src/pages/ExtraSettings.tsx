import Colors from "../settings/Colors";
import Cpu from "../settings/Cpu";
import Fps from "../settings/Fps";
import Gpu from "../settings/Gpu";

export default function ExtraSettings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full">
      <div className="flex flex-col gap-5 border-r border-latte-surface2 dark:border-mocha-surface2 p-3">
        <Cpu />
        <div className="border-t border-latte-surface2 dark:border-mocha-surface2"></div>
        <Gpu />
        <div className="border-t border-latte-surface2 dark:border-mocha-surface2"></div>
        <Fps />
      </div>
      <div className="flex flex-col gap-5 p-3">
        <Colors />
      </div>
    </div>
  );
}
