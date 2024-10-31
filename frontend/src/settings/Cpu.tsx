import { useEffect, useState } from "react";
import SettingBox from "../ui/SettingBox";
import { SketchPicker } from "react-color";
import { SetCpuLoadColors, GetCpuLoadColor0, GetCpuLoadColor1, GetCpuLoadColor2, GetCpuLoadValue, GetCpuText, SetCpuLoadValue, SetCpuText, GetElements, DeactivateElement, ActivateElement } from "../../wailsjs/go/main/App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons";

function Cpu() {
    const [cpuLoadColor0, setCpuLoadColor0] = useState<string>("");
    const [cpuLoadColor1, setCpuLoadColor1] = useState<string>("");
    const [cpuLoadColor2, setCpuLoadColor2] = useState<string>("");
    const [cpuText, setCpuText] = useState<string>("")
    const [cpuLoadValue, setCpuLoadValue] = useState<string>("")

    const [cpuLoadChange, setCpuLoadChange] = useState<boolean>(false)

    const defaultCpuLoadColor0 = "39F900"
    const defaultCpuLoadColor1 = "FDFD09"
    const defaultCpuLoadColor2 = "B22222"

    useEffect(() => {
        GetCpuText().then((r) => {
            setCpuText(r)
        })
        GetCpuLoadValue().then((r) => {
            setCpuLoadValue(r)
        })
        GetCpuLoadColor0().then((r) => {
            setCpuLoadColor0(r)
        })
        GetCpuLoadColor1().then((r) => {
            setCpuLoadColor1(r)
        })
        GetCpuLoadColor2().then((r) => {
            setCpuLoadColor2(r)
        })
        reloadElement()
    }, [])

    function reloadElement() {
        GetElements().then((r: any) => {
            for (var element of r) {
                if (element.Name == "cpu_load_change") {
                    setCpuLoadChange(element.Active)
                }
            }
        })
    }

    return (
        <SettingBox header="CPU">
            <div className="grid grid-cols-2 gap-3">
                <label htmlFor="cputext">Custom Text:</label>
                <input
                    type="text"
                    id="cputext"
                    className="w-28 bg-latte-surface0 dark:bg-mocha-surface0 p-1 border border-latte-surface2 dark:border-mocha-surface2 rounded text-center"
                    min="8"
                    max="50"
                    defaultValue={cpuText}
                    onChange={(event) => {
                        const nv = event.target.value
                        setCpuText(nv)
                        SetCpuText(nv)
                    }}
                />
                <label htmlFor="showCpuLoadColors" className="cursor-pointer">CPU Color Change</label>
                <div>
                    {cpuLoadChange ? (
                        <FontAwesomeIcon icon={faCheckSquare} className="cursor-pointer" onClick={() => {
                            DeactivateElement("cpu_load_change").then(() => {
                                reloadElement()
                            })
                        }} />
                    ) : (
                        <FontAwesomeIcon icon={faSquare} className="cursor-pointer" onClick={() => {
                            ActivateElement("cpu_load_change").then(() => {
                                reloadElement()
                            })
                        }} />
                    )}
                    <input
                        id="showCpuLoadColors"
                        type="checkbox"
                        checked={cpuLoadChange}
                        className="hidden"
                        onChange={() => {
                            if (cpuLoadChange) {
                                DeactivateElement("cpu_load_change").then(() => {
                                    reloadElement()
                                })
                            } else {
                                ActivateElement("cpu_load_change").then(() => {
                                    reloadElement()
                                })
                            }
                        }}
                    />
                </div>
                <label htmlFor="cpuloadvalue">Load Value:</label>
                <input
                    type="text"
                    id="cpuloadvalue"
                    className="w-28 bg-latte-surface0 dark:bg-mocha-surface0 p-1 border border-latte-surface2 dark:border-mocha-surface2 rounded text-center"
                    min="8"
                    max="50"
                    defaultValue={cpuLoadValue}
                    onChange={(event) => {
                        const nv = event.target.value
                        setCpuLoadValue(nv)
                        SetCpuLoadValue(nv)
                    }}
                />
                <label htmlFor="cpucolor" className="me-2">Load Colors:</label>
                <div>
                    <div className="flex gap-2">
                        <Popover className="relative">
                            <PopoverButton style={{
                                backgroundColor: "#" + cpuLoadColor0
                            }} className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28 mb-2">{cpuLoadColor0}</PopoverButton>
                            <PopoverPanel anchor="bottom" className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1">
                                <SketchPicker color={cpuLoadColor0} onChange={(color) => {
                                    let col = color.hex;
                                    if (col[0] == "#") {
                                        col = col.substring(1)
                                    }
                                    setCpuLoadColor0(col)
                                    SetCpuLoadColors(col, cpuLoadColor1, cpuLoadColor2)
                                }} />
                            </PopoverPanel>
                        </Popover>
                        {cpuLoadColor0 != defaultCpuLoadColor0 && (
                            <button
                                onClick={() => {
                                    setCpuLoadColor0(defaultCpuLoadColor0)
                                    SetCpuLoadColors(defaultCpuLoadColor0, cpuLoadColor1, cpuLoadColor2)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <Popover className="relative">
                            <PopoverButton style={{
                                backgroundColor: "#" + cpuLoadColor1
                            }} className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28 mb-2">{cpuLoadColor1}</PopoverButton>
                            <PopoverPanel anchor="bottom" className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1">
                                <SketchPicker color={cpuLoadColor1} onChange={(color) => {
                                    let col = color.hex;
                                    if (col[0] == "#") {
                                        col = col.substring(1)
                                    }
                                    setCpuLoadColor1(col)
                                    SetCpuLoadColors(cpuLoadColor0, col, cpuLoadColor2)
                                }} />
                            </PopoverPanel>
                        </Popover>
                        {cpuLoadColor1 != defaultCpuLoadColor1 && (
                            <button
                                onClick={() => {
                                    setCpuLoadColor1(defaultCpuLoadColor1)
                                    SetCpuLoadColors(cpuLoadColor0, defaultCpuLoadColor1, cpuLoadColor2)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <Popover className="relative">
                            <PopoverButton style={{
                                backgroundColor: "#" + cpuLoadColor2
                            }} className="cursor-pointer p-1 rounded border border-latte-surface2 dark:border-mocha-surface2 w-28">{cpuLoadColor2}</PopoverButton>
                            <PopoverPanel anchor="bottom" className="flex flex-col bg-latte-surface1 dark:bg-mocha-surface1">
                                <SketchPicker color={cpuLoadColor2} onChange={(color) => {
                                    let col = color.hex;
                                    if (col[0] == "#") {
                                        col = col.substring(1)
                                    }
                                    setCpuLoadColor2(col)
                                    SetCpuLoadColors(cpuLoadColor0, cpuLoadColor1, col)
                                }} />
                            </PopoverPanel>
                        </Popover>
                        {cpuLoadColor2 != defaultCpuLoadColor2 && (
                            <button
                                onClick={() => {
                                    setCpuLoadColor2(defaultCpuLoadColor2)
                                    SetCpuLoadColors(cpuLoadColor0, cpuLoadColor1, defaultCpuLoadColor2)
                                }}>
                                <FontAwesomeIcon icon={faRotateLeft} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </SettingBox>
    );
}
export default Cpu;
