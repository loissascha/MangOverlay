import preset1Img from "../assets/images/presets-1.png";
import presetMinimal from "../assets/images/preset-minimal.png";
import presetFpsOnly from "../assets/images/preset-fps-only.png";

export default function PresetsSettings() {
  return (
    <>
      <div className="text-center mb-3 text-xl">
        ⚠️ <strong>Warning!</strong> This action will{" "}
        <strong>overwrite all</strong> of your current settings!
      </div>
      <div className="grid grid-cols-2">
        <div className="border-r border-b border-t p-2 border-latte-surface2 dark:border-mocha-surface2">
          <div className="text-center text-xl">FPS Only</div>
          <img src={presetFpsOnly} className="mx-auto max-h-96" />
          <div className="text-center">
            <PresetButton>Apply</PresetButton>
          </div>
        </div>
        <div className="border-b border-t p-2 border-latte-surface2 dark:border-mocha-surface2">
          <div className="text-center text-xl">Minimal</div>
          <img src={presetMinimal} className="mx-auto max-h-96" />
          <div className="text-center">
            <PresetButton>Apply</PresetButton>
          </div>
        </div>
        <div className="border-r border-b p-2 border-latte-surface2 dark:border-mocha-surface2">
          <div className="text-center text-xl">Preset 3</div>
          <img src={preset1Img} className="mx-auto max-h-96" />
          <div className="text-center">
            <PresetButton>Apply</PresetButton>
          </div>
        </div>
        <div className="border-b p-2 border-latte-surface2 dark:border-mocha-surface2">
          <div className="text-center text-xl">Preset 4</div>
          <img src={preset1Img} className="mx-auto max-h-96" />
          <div className="text-center">
            <PresetButton>Apply</PresetButton>
          </div>
        </div>
        <div className="border-r p-2 border-latte-surface2 dark:border-mocha-surface2">
          <div className="text-center text-xl">Preset 5</div>
          <img src={preset1Img} className="mx-auto max-h-96" />
          <div className="text-center">
            <PresetButton>Apply</PresetButton>
          </div>
        </div>
        <div className="p-2">
          <div className="text-center text-xl">Preset 6</div>
          <img src={preset1Img} className="mx-auto max-h-96" />
          <div className="text-center">
            <PresetButton>Apply</PresetButton>
          </div>
        </div>
      </div>
    </>
  );
}

interface ButtonProps {
  children: any;
}
function PresetButton({ children }: ButtonProps) {
  return (
    <button className="py-2 px-3 mb-2 bg-latte-surface0 dark:bg-mocha-surface0 rounded border border-latte-surface2 dark:border-mocha-surface2 cursor-pointer hover:bg-latte-surface1 dark:hover:bg-mocha-surface2">
      {children}
    </button>
  );
}
