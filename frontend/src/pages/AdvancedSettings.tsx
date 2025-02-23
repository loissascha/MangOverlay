import FpsLimits from "../settings/FpsLimits";
import UserLines from "../settings/UserLines";

function AdvancedSettings() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-3">
          <UserLines />
          <FpsLimits />
        </div>
      </div>
    </>
  );
}
export default AdvancedSettings;
