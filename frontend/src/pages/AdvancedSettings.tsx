import FpsLimits from "../settings/FpsLimits";
import Graphs from "../settings/Graphs";
import UserLines from "../settings/UserLines";

function AdvancedSettings() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-3">
          <UserLines />
          <FpsLimits />
          <Graphs />
        </div>
      </div>
    </>
  );
}
export default AdvancedSettings;
