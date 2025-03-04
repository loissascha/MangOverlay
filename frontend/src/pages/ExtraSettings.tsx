import Colors from "../settings/Colors";
import Cpu from "../settings/Cpu";
import Fps from "../settings/Fps";
import Gpu from "../settings/Gpu";

export default function ExtraSettings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="flex flex-col gap-5">
        <Cpu />
        <Gpu />
        <Fps />
      </div>
      <div className="flex flex-col gap-5">
        <Colors />
      </div>
    </div>
  );
}
