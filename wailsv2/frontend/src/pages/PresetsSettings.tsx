import presetMine from "../assets/images/preset-mine.png";
import presetMinimal from "../assets/images/preset-minimal.png";
import presetFpsOnly from "../assets/images/preset-fps-only.png";
import presetDefault from "../assets/images/preset-default.png";
import presetRiva from "../assets/images/preset-riva.png";
import presetFull from "../assets/images/preset-full.png";
import {
  ApplyPresetDefault,
  ApplyPresetExtended,
  ApplyPresetFpsOnly,
  ApplyPresetFull,
  ApplyPresetMinimal,
  ApplyPresetRiva,
} from "../../wailsjs/go/main/App";

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
            <PresetButton
              onClick={() => {
                ApplyPresetFpsOnly();
              }}
            >
              Apply
            </PresetButton>
          </div>
        </div>
        <div className="border-b border-t p-2 border-latte-surface2 dark:border-mocha-surface2">
          <div className="text-center text-xl">Minimal</div>
          <img src={presetMinimal} className="mx-auto max-h-96" />
          <div className="text-center">
            <PresetButton
              onClick={() => {
                ApplyPresetMinimal();
              }}
            >
              Apply
            </PresetButton>
          </div>
        </div>
        <div className="border-r border-b p-2 border-latte-surface2 dark:border-mocha-surface2">
          <div className="text-center text-xl">Default</div>
          <img src={presetDefault} className="mx-auto max-h-96" />
          <div className="text-center">
            <PresetButton
              onClick={() => {
                ApplyPresetDefault();
              }}
            >
              Apply
            </PresetButton>
          </div>
        </div>
        <div className="border-b p-2 border-latte-surface2 dark:border-mocha-surface2">
          <div className="text-center text-xl">Extended</div>
          <img src={presetMine} className="mx-auto max-h-96" />
          <div className="text-center">
            <PresetButton
              onClick={() => {
                ApplyPresetExtended();
              }}
            >
              Apply
            </PresetButton>
          </div>
        </div>
        <div className="border-r p-2 border-latte-surface2 dark:border-mocha-surface2">
          <div className="text-center text-xl">Riva</div>
          <img src={presetRiva} className="mx-auto max-h-96" />
          <div className="text-center">
            <PresetButton
              onClick={() => {
                ApplyPresetRiva();
              }}
            >
              Apply
            </PresetButton>
          </div>
        </div>
        <div className="p-2">
          <div className="text-center text-xl">Full</div>
          <img src={presetFull} className="mx-auto max-h-96" />
          <div className="text-center">
            <PresetButton
              onClick={() => {
                ApplyPresetFull();
              }}
            >
              Apply
            </PresetButton>
          </div>
        </div>
      </div>
    </>
  );
}

interface ButtonProps {
  children: any;
  onClick?: any;
}
function PresetButton({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="py-2 px-3 mb-2 bg-latte-surface0 dark:bg-mocha-surface0 rounded border border-latte-surface2 dark:border-mocha-surface2 cursor-pointer hover:bg-latte-surface1 dark:hover:bg-mocha-surface2"
    >
      {children}
    </button>
  );
}
