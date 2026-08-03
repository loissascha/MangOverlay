import { useEffect, useState } from "react";
import SettingBox from "../ui/SettingBox";
import { SketchPicker } from "react-color";
import {
  GetBatteryColor,
  GetCpuColor,
  GetCpuLoadColor0,
  GetCpuLoadColor1,
  GetCpuLoadColor2,
  GetEngineColor,
  GetFrametimeColor,
  GetGpuColor,
  GetGpuLoadColor0,
  GetGpuLoadColor1,
  GetGpuLoadColor2,
  GetIoColor,
  GetMediaColor,
  GetNetworkColor,
  GetRamColor,
  GetVramColor,
  GetWineColor,
  SetBatteryColor,
  SetCpuColor,
  SetCpuLoadColors,
  SetEngineColor,
  SetFrametimeColor,
  SetGpuColor,
  SetGpuLoadColors,
  SetIoColor,
  SetMediaColor,
  SetNetworkColor,
  SetRamColor,
  SetVramColor,
  SetWineColor,
} from "../../wailsjs/go/main/App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

function Colors() {
  const [gpuColor, setGpuColor] = useState<string>("");
  const [cpuColor, setCpuColor] = useState<string>("");
  const [vramColor, setVramColor] = useState<string>("");
  const [ramColor, setRamColor] = useState<string>("");
  const [engineColor, setEngineColor] = useState<string>("");
  const [ioColor, setIoColor] = useState<string>("");
  const [frametimeColor, setFrametimeColor] = useState<string>("");
  const [mediaColor, setMediaColor] = useState<string>("");
  const [wineColor, setWineColor] = useState<string>("");
  const [batteryColor, setBatteryColor] = useState<string>("");
  const [networkColor, setNetworkColor] = useState<string>("");

  const defaultCpuColor = "2E97CB";
  const defaultGpuColor = "2E9762";
  const defaultVramColor = "AD64C1";
  const defaultRamColor = "C26693";
  const defaultEngineColor = "EB5B5B";
  const defaultIoColor = "A491D3";
  const defaultFrametimeColor = "00FF00";
  const defaultMediaPlayerColor = "FFFFFF";
  const defaultWineColor = "EB4B4B";
  const defaultBatteryColor = "FF9078";
  const defaultNetworkColor = "E07B85";

  useEffect(() => {
    GetGpuColor().then((r) => {
      setGpuColor(r);
    });
    GetCpuColor().then((r) => {
      setCpuColor(r);
    });
    GetVramColor().then((r) => {
      setVramColor(r);
    });
    GetRamColor().then((r) => {
      setRamColor(r);
    });
    GetEngineColor().then((r) => {
      setEngineColor(r);
    });
    GetIoColor().then((r) => {
      setIoColor(r);
    });
    GetFrametimeColor().then((r) => {
      setFrametimeColor(r);
    });
    GetMediaColor().then((r) => {
      setMediaColor(r);
    });
    GetWineColor().then((r) => {
      setWineColor(r);
    });
    GetBatteryColor().then((r) => {
      setBatteryColor(r);
    });
    GetNetworkColor().then((r) => {
      setNetworkColor(r);
    });
  }, []);

  return (
    <SettingBox nomargin={true} header="Colors">
      <div className="grid grid-cols-2 gap-3">
        <label htmlFor="cpucolor" className="me-2">
          CPU:
        </label>
        <div>
          <div className="flex gap-2">
            <Popover className="relative">
              <PopoverButton
                style={{
                  backgroundColor: "#" + cpuColor,
                }}
                className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28"
              >
                {cpuColor}
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1"
              >
                <SketchPicker
                  color={cpuColor}
                  onChange={(color) => {
                    let col = color.hex;
                    if (col[0] == "#") {
                      col = col.substring(1);
                    }
                    setCpuColor(col);
                    SetCpuColor(col);
                  }}
                />
              </PopoverPanel>
            </Popover>
            {cpuColor != defaultCpuColor && (
              <button
                onClick={() => {
                  setCpuColor(defaultCpuColor);
                  SetCpuColor(defaultCpuColor);
                }}
              >
                <FontAwesomeIcon icon={faRotateLeft} />
              </button>
            )}
          </div>
        </div>
        <label htmlFor="gpucolor" className="me-2">
          GPU:
        </label>
        <div>
          <div className="flex gap-2">
            <Popover className="relative">
              <PopoverButton
                style={{
                  backgroundColor: "#" + gpuColor,
                }}
                className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28"
              >
                {gpuColor}
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1"
              >
                <SketchPicker
                  color={gpuColor}
                  onChange={(color) => {
                    let col = color.hex;
                    if (col[0] == "#") {
                      col = col.substring(1);
                    }
                    setGpuColor(col);
                    SetGpuColor(col);
                  }}
                />
              </PopoverPanel>
            </Popover>
            {gpuColor != defaultGpuColor && (
              <button
                onClick={() => {
                  setGpuColor(defaultGpuColor);
                  SetGpuColor(defaultGpuColor);
                }}
              >
                <FontAwesomeIcon icon={faRotateLeft} />
              </button>
            )}
          </div>
        </div>
        <label htmlFor="vramcolor" className="me-2">
          VRAM:
        </label>
        <div>
          <div className="flex gap-2">
            <Popover className="relative">
              <PopoverButton
                style={{
                  backgroundColor: "#" + vramColor,
                }}
                className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28"
              >
                {vramColor}
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1"
              >
                <SketchPicker
                  color={vramColor}
                  onChange={(color) => {
                    let col = color.hex;
                    if (col[0] == "#") {
                      col = col.substring(1);
                    }
                    setVramColor(col);
                    SetVramColor(col);
                  }}
                />
              </PopoverPanel>
            </Popover>
            {vramColor != defaultVramColor && (
              <button
                onClick={() => {
                  setVramColor(defaultVramColor);
                  SetVramColor(defaultVramColor);
                }}
              >
                <FontAwesomeIcon icon={faRotateLeft} />
              </button>
            )}
          </div>
        </div>
        <label htmlFor="ramcolor" className="me-2">
          RAM:
        </label>
        <div>
          <div className="flex gap-2">
            <Popover className="relative">
              <PopoverButton
                style={{
                  backgroundColor: "#" + ramColor,
                }}
                className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28"
              >
                {ramColor}
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1"
              >
                <SketchPicker
                  color={ramColor}
                  onChange={(color) => {
                    let col = color.hex;
                    if (col[0] == "#") {
                      col = col.substring(1);
                    }
                    setRamColor(col);
                    SetRamColor(col);
                  }}
                />
              </PopoverPanel>
            </Popover>
            {ramColor != defaultRamColor && (
              <button
                onClick={() => {
                  setRamColor(defaultRamColor);
                  SetRamColor(defaultRamColor);
                }}
              >
                <FontAwesomeIcon icon={faRotateLeft} />
              </button>
            )}
          </div>
        </div>
        <label htmlFor="enginecolor" className="me-2">
          Engine:
        </label>
        <div>
          <div className="flex gap-2">
            <Popover className="relative">
              <PopoverButton
                style={{
                  backgroundColor: "#" + engineColor,
                }}
                className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28"
              >
                {engineColor}
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1"
              >
                <SketchPicker
                  color={engineColor}
                  onChange={(color) => {
                    let col = color.hex;
                    if (col[0] == "#") {
                      col = col.substring(1);
                    }
                    setEngineColor(col);
                    SetEngineColor(col);
                  }}
                />
              </PopoverPanel>
            </Popover>
            {engineColor != defaultEngineColor && (
              <button
                onClick={() => {
                  setEngineColor(defaultEngineColor);
                  SetEngineColor(defaultEngineColor);
                }}
              >
                <FontAwesomeIcon icon={faRotateLeft} />
              </button>
            )}
          </div>
        </div>
        <label htmlFor="iocolor" className="me-2">
          IO:
        </label>
        <div>
          <div className="flex gap-2">
            <Popover className="relative">
              <PopoverButton
                style={{
                  backgroundColor: "#" + ioColor,
                }}
                className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28"
              >
                {ioColor}
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1"
              >
                <SketchPicker
                  color={ioColor}
                  onChange={(color) => {
                    let col = color.hex;
                    if (col[0] == "#") {
                      col = col.substring(1);
                    }
                    setIoColor(col);
                    SetIoColor(col);
                  }}
                />
              </PopoverPanel>
            </Popover>
            {ioColor != defaultIoColor && (
              <button
                onClick={() => {
                  setIoColor(defaultIoColor);
                  SetIoColor(defaultIoColor);
                }}
              >
                <FontAwesomeIcon icon={faRotateLeft} />
              </button>
            )}
          </div>
        </div>
        <label htmlFor="frametimecolor" className="me-2">
          Frametime:
        </label>
        <div>
          <div className="flex gap-2">
            <Popover className="relative">
              <PopoverButton
                style={{
                  backgroundColor: "#" + frametimeColor,
                }}
                className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28"
              >
                {frametimeColor}
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1"
              >
                <SketchPicker
                  color={frametimeColor}
                  onChange={(color) => {
                    let col = color.hex;
                    if (col[0] == "#") {
                      col = col.substring(1);
                    }
                    setFrametimeColor(col);
                    SetFrametimeColor(col);
                  }}
                />
              </PopoverPanel>
            </Popover>
            {frametimeColor != defaultFrametimeColor && (
              <button
                onClick={() => {
                  setFrametimeColor(defaultFrametimeColor);
                  SetFrametimeColor(defaultFrametimeColor);
                }}
              >
                <FontAwesomeIcon icon={faRotateLeft} />
              </button>
            )}
          </div>
        </div>
        <label htmlFor="mediacolor" className="me-2">
          Media Player:
        </label>
        <div>
          <div className="flex gap-2">
            <Popover className="relative">
              <PopoverButton
                style={{
                  backgroundColor: "#" + mediaColor,
                }}
                className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28"
              >
                {mediaColor}
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1"
              >
                <SketchPicker
                  color={mediaColor}
                  onChange={(color) => {
                    let col = color.hex;
                    if (col[0] == "#") {
                      col = col.substring(1);
                    }
                    setMediaColor(col);
                    SetMediaColor(col);
                  }}
                />
              </PopoverPanel>
            </Popover>
            {mediaColor != defaultMediaPlayerColor && (
              <button
                onClick={() => {
                  setMediaColor(defaultMediaPlayerColor);
                  SetMediaColor(defaultMediaPlayerColor);
                }}
              >
                <FontAwesomeIcon icon={faRotateLeft} />
              </button>
            )}
          </div>
        </div>
        <label htmlFor="winecolor" className="me-2">
          Wine:
        </label>
        <div>
          <div className="flex gap-2">
            <Popover className="relative">
              <PopoverButton
                style={{
                  backgroundColor: "#" + wineColor,
                }}
                className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28"
              >
                {wineColor}
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1"
              >
                <SketchPicker
                  color={wineColor}
                  onChange={(color) => {
                    let col = color.hex;
                    if (col[0] == "#") {
                      col = col.substring(1);
                    }
                    setWineColor(col);
                    SetWineColor(col);
                  }}
                />
              </PopoverPanel>
            </Popover>
            {wineColor != defaultWineColor && (
              <button
                onClick={() => {
                  setWineColor(defaultWineColor);
                  SetWineColor(defaultWineColor);
                }}
              >
                <FontAwesomeIcon icon={faRotateLeft} />
              </button>
            )}
          </div>
        </div>
        <label htmlFor="batterycolor" className="me-2">
          Battery:
        </label>
        <div>
          <div className="flex gap-2">
            <Popover className="relative">
              <PopoverButton
                style={{
                  backgroundColor: "#" + batteryColor,
                }}
                className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28"
              >
                {batteryColor}
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1"
              >
                <SketchPicker
                  color={batteryColor}
                  onChange={(color) => {
                    let col = color.hex;
                    if (col[0] == "#") {
                      col = col.substring(1);
                    }
                    setBatteryColor(col);
                    SetBatteryColor(col);
                  }}
                />
              </PopoverPanel>
            </Popover>
            {batteryColor != defaultBatteryColor && (
              <button
                onClick={() => {
                  setBatteryColor(defaultBatteryColor);
                  SetBatteryColor(defaultBatteryColor);
                }}
              >
                <FontAwesomeIcon icon={faRotateLeft} />
              </button>
            )}
          </div>
        </div>
        <label htmlFor="networkcolor" className="me-2">
          Network:
        </label>
        <div>
          <div className="flex gap-2">
            <Popover className="relative">
              <PopoverButton
                style={{
                  backgroundColor: "#" + networkColor,
                }}
                className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28"
              >
                {networkColor}
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1"
              >
                <SketchPicker
                  color={networkColor}
                  onChange={(color) => {
                    let col = color.hex;
                    if (col[0] == "#") {
                      col = col.substring(1);
                    }
                    setNetworkColor(col);
                    SetNetworkColor(col);
                  }}
                />
              </PopoverPanel>
            </Popover>
            {networkColor != defaultNetworkColor && (
              <button
                onClick={() => {
                  setNetworkColor(defaultNetworkColor);
                  SetNetworkColor(defaultNetworkColor);
                }}
              >
                <FontAwesomeIcon icon={faRotateLeft} />
              </button>
            )}
          </div>
        </div>
      </div>
    </SettingBox>
  );
}
export default Colors;
