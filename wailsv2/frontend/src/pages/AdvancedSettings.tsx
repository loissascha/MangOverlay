import FpsLimits from "../settings/FpsLimits";
import Graphs from "../settings/Graphs";
import UserLines from "../settings/UserLines";

function AdvancedSettings() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-5">
          <UserLines />
          <div className="border-t border-latte-surface2 dark:border-mocha-surface2"></div>
          <FpsLimits />
          <div className="border-t border-latte-surface2 dark:border-mocha-surface2"></div>
          <Graphs />
        </div>
      </div>
    </>
  );
}
export default AdvancedSettings;
