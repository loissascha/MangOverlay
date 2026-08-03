import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { ActivateElement, DeactivateElement, GetElements, GetGraphCpuLoad, GetGraphCpuTemp, GetGraphGpuCoreClock, GetGraphGpuLoad, GetGraphGpuMemClock, GetGraphGpuTemp, GetGraphRam, GetGraphVram, ToggleGraphCpuLoad, ToggleGraphCpuTemp, ToggleGraphGpuCoreClock, ToggleGraphGpuLoad, ToggleGraphGpuMemClock, ToggleGraphGpuTemp, ToggleGraphRam, ToggleGraphVram } from "../../wailsjs/go/main/App"
import SettingBox from "../ui/SettingBox"

function Graphs() {
    const [gpuLoad, setGpuLoad] = useState<boolean>(false)
    const [cpuLoad, setCpuLoad] = useState<boolean>(false)
    const [gpuCoreClock, setGpuCoreClock] = useState<boolean>(false)
    const [gpuMemClock, setGpuMemClock] = useState<boolean>(false)
    const [vram, setVram] = useState<boolean>(false)
    const [ram, setRam] = useState<boolean>(false)
    const [cpuTemp, setCpuTemp] = useState<boolean>(false)
    const [gpuTemp, setGpuTemp] = useState<boolean>(false)
    const [frameTiming, setFrameTiming] = useState<boolean>(false)

    useEffect(() => {
        updateGraphs()
        reloadElement()
    }, [])

    function reloadElement() {
        GetElements().then((r: any) => {
            for (var element of r) {
                if (element.Name == "frame_timing") {
                    setFrameTiming(element.Active)
                }
            }
        })
    }

    function updateGraphs() {
        GetGraphGpuLoad().then((r) => {
            setGpuLoad(r)
        })
        GetGraphCpuLoad().then((r) => {
            setCpuLoad(r)
        })
        GetGraphGpuCoreClock().then((r) => {
            setGpuCoreClock(r)
        })
        GetGraphGpuMemClock().then((r) => {
            setGpuMemClock(r)
        })
        GetGraphVram().then((r) => {
            setVram(r)
        })
        GetGraphRam().then((r) => {
            setRam(r)
        })
        GetGraphCpuTemp().then((r) => {
            setCpuTemp(r)
        })
        GetGraphGpuTemp().then((r) => {
            setGpuTemp(r)
        })
    }

    return (
        <SettingBox header="Graphs">
            <div className="grid grid-cols-2 gap-3">
                <label htmlFor="frametiming" className="cursor-pointer me-2">Frametime:</label>
                <div>
                    {frameTiming ? (
                        <FontAwesomeIcon className="cursor-pointer" icon={faCheckSquare} onClick={() => {
                            DeactivateElement("frame_timing").then(() => {
                                reloadElement()
                            })
                        }} />
                    ) : (
                        <FontAwesomeIcon className="cursor-pointer" icon={faSquare} onClick={() => {
                            ActivateElement("frame_timing").then(() => {
                                reloadElement()
                            })
                        }} />
                    )}
                    <input
                        type="checkbox"
                        id="frametiming"
                        className="hidden"
                        checked={frameTiming}
                        onChange={() => {
                            if (frameTiming) {
                                DeactivateElement("frame_timing").then(() => {
                                    reloadElement()
                                })
                            } else {
                                ActivateElement("frame_timing").then(() => {
                                    reloadElement()
                                })
                            }
                        }}
                    />
                </div>
                <label htmlFor="cpuload" className="cursor-pointer me-2">CPU Load:</label>
                <div>
                    {cpuLoad ? (
                        <FontAwesomeIcon className="cursor-pointer" icon={faCheckSquare} onClick={() => {
                            ToggleGraphCpuLoad().then(() => {
                                updateGraphs()
                            })
                        }} />
                    ) : (
                        <FontAwesomeIcon className="cursor-pointer" icon={faSquare} onClick={() => {
                            ToggleGraphCpuLoad().then(() => {
                                updateGraphs()
                            })
                        }} />
                    )}
                    <input
                        type="checkbox"
                        id="cpuload"
                        checked={cpuLoad}
                        className="hidden"
                        onChange={() => {
                            ToggleGraphCpuLoad().then(() => {
                                updateGraphs()
                            })
                        }}
                    />
                </div>
                <label htmlFor="cpu_temp" className="cursor-pointer me-2">CPU Temp:</label>
                <div>
                    {cpuTemp ? (
                        <FontAwesomeIcon className="cursor-pointer" icon={faCheckSquare} onClick={() => {
                            ToggleGraphCpuTemp().then(() => {
                                updateGraphs()
                            })
                        }} />
                    ) : (
                        <FontAwesomeIcon className="cursor-pointer" icon={faSquare} onClick={() => {
                            ToggleGraphCpuTemp().then(() => {
                                updateGraphs()
                            })
                        }} />
                    )}
                    <input
                        type="checkbox"
                        id="cpu_temp"
                        checked={cpuTemp}
                        className="hidden"
                        onChange={() => {
                            ToggleGraphCpuTemp().then(() => {
                                updateGraphs()
                            })
                        }}
                    />
                </div>
                <label htmlFor="gpuload" className="cursor-pointer me-2">GPU Load:</label>
                <div>
                    {gpuLoad ? (
                        <FontAwesomeIcon className="cursor-pointer" icon={faCheckSquare} onClick={() => {
                            ToggleGraphGpuLoad().then(() => {
                                updateGraphs()
                            })
                        }} />
                    ) : (
                        <FontAwesomeIcon className="cursor-pointer" icon={faSquare} onClick={() => {
                            ToggleGraphGpuLoad().then(() => {
                                updateGraphs()
                            })
                        }} />
                    )}
                    <input
                        type="checkbox"
                        id="gpuload"
                        checked={gpuLoad}
                        className="hidden"
                        onChange={() => {
                            ToggleGraphGpuLoad().then(() => {
                                updateGraphs()
                            })
                        }}
                    />
                </div>
                <label htmlFor="gpu_core_clock" className="cursor-pointer me-2">GPU Core Clock:</label>
                <div>
                    {gpuCoreClock ? (
                        <FontAwesomeIcon className="cursor-pointer" icon={faCheckSquare} onClick={() => {
                            ToggleGraphGpuCoreClock().then(() => {
                                updateGraphs()
                            })
                        }} />
                    ) : (
                        <FontAwesomeIcon className="cursor-pointer" icon={faSquare} onClick={() => {
                            ToggleGraphGpuCoreClock().then(() => {
                                updateGraphs()
                            })
                        }} />
                    )}
                    <input
                        type="checkbox"
                        className="hidden"
                        id="gpu_core_clock"
                        checked={gpuCoreClock}
                        onChange={() => {
                            ToggleGraphGpuCoreClock().then(() => {
                                updateGraphs()
                            })
                        }}
                    />
                </div>
                <label htmlFor="gpu_mem_clock" className="cursor-pointer me-2">GPU Mem Clock:</label>
                <div>
                    {gpuMemClock ? (
                        <FontAwesomeIcon className="cursor-pointer" icon={faCheckSquare} onClick={() => {
                            ToggleGraphGpuMemClock().then(() => {
                                updateGraphs()
                            })
                        }} />
                    ) : (
                        <FontAwesomeIcon className="cursor-pointer" icon={faSquare} onClick={() => {
                            ToggleGraphGpuMemClock().then(() => {
                                updateGraphs()
                            })
                        }} />
                    )}
                    <input
                        type="checkbox"
                        id="gpu_mem_clock"
                        checked={gpuMemClock}
                        className="hidden"
                        onChange={() => {
                            ToggleGraphGpuMemClock().then(() => {
                                updateGraphs()
                            })
                        }}
                    />
                </div>
                <label htmlFor="gpu_temp" className="cursor-pointer me-2">GPU Temp:</label>
                <div>
                    {gpuTemp ? (
                        <FontAwesomeIcon className="cursor-pointer" icon={faCheckSquare} onClick={() => {
                            ToggleGraphGpuTemp().then(() => {
                                updateGraphs()
                            })
                        }} />
                    ) : (
                        <FontAwesomeIcon className="cursor-pointer" icon={faSquare} onClick={() => {
                            ToggleGraphGpuTemp().then(() => {
                                updateGraphs()
                            })
                        }} />
                    )}
                    <input
                        type="checkbox"
                        id="gpu_temp"
                        checked={gpuTemp}
                        className="hidden"
                        onChange={() => {
                            ToggleGraphGpuTemp().then(() => {
                                updateGraphs()
                            })
                        }}
                    />
                </div>
                <label htmlFor="vram" className="cursor-pointer me-2">Vram:</label>
                <div>
                    {vram ? (
                        <FontAwesomeIcon className="cursor-pointer" icon={faCheckSquare} onClick={() => {
                            ToggleGraphVram().then(() => {
                                updateGraphs()
                            })
                        }} />
                    ) : (
                        <FontAwesomeIcon className="cursor-pointer" icon={faSquare} onClick={() => {
                            ToggleGraphVram().then(() => {
                                updateGraphs()
                            })
                        }} />
                    )}
                    <input
                        type="checkbox"
                        id="vram"
                        checked={vram}
                        className="hidden"
                        onChange={() => {
                            ToggleGraphVram().then(() => {
                                updateGraphs()
                            })
                        }}
                    />
                </div>
                <label htmlFor="ram" className="cursor-pointer me-2">Ram:</label>
                <div>
                    {ram ? (
                        <FontAwesomeIcon className="cursor-pointer" icon={faCheckSquare} onClick={() => {
                            ToggleGraphRam().then(() => {
                                updateGraphs()
                            })
                        }} />
                    ) : (
                        <FontAwesomeIcon className="cursor-pointer" icon={faSquare} onClick={() => {
                            ToggleGraphRam().then(() => {
                                updateGraphs()
                            })
                        }} />
                    )}
                    <input
                        type="checkbox"
                        id="ram"
                        checked={ram}
                        className="hidden"
                        onChange={() => {
                            ToggleGraphRam().then(() => {
                                updateGraphs()
                            })
                        }}
                    />
                </div>
            </div>
        </SettingBox>
    )
}
export default Graphs
