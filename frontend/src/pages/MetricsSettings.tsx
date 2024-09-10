import { useEffect, useState } from "react"
import { ActivateElement, DeactivateElement, GetElements } from "../../wailsjs/go/main/App"
import SettingBox from "../ui/SettingBox"

interface MetricItemProps {
    name: string
    active: boolean
    activate: any
    deactivate: any
}
function MetricItem({ name, active, activate, deactivate }: MetricItemProps) {
    return (
        <div className="flex">
            <div className="me-2">
                <input id={name} type="checkbox" checked={active} readOnly={true} onClick={() => {
                    if (active) {
                        deactivate()
                    }
                    else {
                        activate()
                    }
                }} />
            </div>
            <div>
                <label htmlFor={name}>
                    {name}
                </label>
            </div>
        </div>
    )
}

function MetricsSettings() {
    const [elements, setElements] = useState<any>()
    const [cpuElements, setCpuElements] = useState<any>([])
    const [gpuElements, setGpuElements] = useState<any>([])
    const [memoryElements, setMemoryElements] = useState<any>([])
    const [batteryElements, setBatteryElements] = useState<any>([])
    const [frameElements, setFrameElements] = useState<any>([])
    const [displayElements, setDisplayElements] = useState<any>([])
    const [versionElements, setVersionElements] = useState<any>([])

    useEffect(() => {
        GetElements().then((r) => {
            setElements(r)
        })
    }, [])

    useEffect(() => {
        function getCpuElements() {
            let newCpuElements = []
            let index = 1000
            for (const e of elements) {
                if (e.Name.includes("cpu") || e.Name.includes("core")) {
                    newCpuElements.push({
                        Index: index,
                        Name: e.Name,
                        Active: e.Active
                    })
                    index++
                }
            }
            setCpuElements(newCpuElements)
        }
        function getGpuElements() {
            let newGpuElements = []
            let index = 2000
            for (const e of elements) {
                if (e.Name.includes("gpu") || e.Name.includes("vram")) {
                    newGpuElements.push({
                        Index: index,
                        Name: e.Name,
                        Active: e.Active
                    })
                    index++
                }
            }
            setGpuElements(newGpuElements)
        }
        function getMemoryElements() {
            let newMemoryElements = []
            let index = 3000
            for (const e of elements) {
                if (e.Name == "ram" || e.Name.includes("procmem")) {
                    newMemoryElements.push({
                        Index: index,
                        Name: e.Name,
                        Active: e.Active
                    })
                    index++
                }
            }
            setMemoryElements(newMemoryElements)
        }
        function getDisplayElements() {
            let newDisplayElements = []
            let index = 4000
            for (const e of elements) {
                if (e.Name.includes("time") || e.Name.includes("fsr") || e.Name.includes("hdr") || e.Name.includes("resolution") || e.Name.includes("refresh_rate")) {
                    newDisplayElements.push({
                        Index: index,
                        Name: e.Name,
                        Active: e.Active
                    })
                    index++
                }
            }
            setDisplayElements(newDisplayElements)
        }
        function getBatteryElements() {
            let newBatteryElements = []
            let index = 5000
            for (const e of elements) {
                if (e.Name.includes("battery")) {
                    newBatteryElements.push({
                        Index: index,
                        Name: e.Name,
                        Active: e.Active
                    })
                    index++
                }
            }
            setBatteryElements(newBatteryElements)
        }
        function getFrameElements() {
            let newFrameElements = []
            let index = 6000
            for (const e of elements) {
                if (e.Name.includes("frame") || e.Name.includes("fps")) {
                    newFrameElements.push({
                        Index: index,
                        Name: e.Name,
                        Active: e.Active
                    })
                    index++
                }
            }
            setFrameElements(newFrameElements)
        }
        function getVersionElements() {
            let newVersionElements = []
            let index = 6000
            for (const e of elements) {
                if (e.Name.includes("version") || e.Name.includes("wine") || e.Name.includes("engine") || e.Name.includes("vulkan") || e.Name.includes("arch")) {
                    newVersionElements.push({
                        Index: index,
                        Name: e.Name,
                        Active: e.Active
                    })
                    index++
                }
            }
            setVersionElements(newVersionElements)
        }
        if (elements !== undefined) {
            getCpuElements()
            getGpuElements()
            getMemoryElements()
            getBatteryElements()
            getFrameElements()
            getDisplayElements()
            getVersionElements()
        }
    }, [elements])

    return (
        <>
            <div className="flex gap-5 flex-auto flex-wrap">
                <div>
                    <SettingBox header="CPU">
                        {cpuElements.map((e: any) => (
                            <MetricItem key={e.Index} name={e.Name} active={e.Active} activate={() => {
                                ActivateElement(e.Name).then(() => {
                                    GetElements().then((r) => {
                                        setElements(r)
                                    })
                                })
                            }} deactivate={() => {
                                DeactivateElement(e.Name).then(() => {
                                    GetElements().then((r) => {
                                        setElements(r)
                                    })
                                })
                            }} />
                        ))}
                    </SettingBox>
                    <SettingBox header="GPU">
                        {gpuElements.map((e: any) => (
                            <MetricItem key={e.Index} name={e.Name} active={e.Active} activate={() => {
                                ActivateElement(e.Name).then(() => {
                                    GetElements().then((r) => {
                                        setElements(r)
                                    })
                                })
                            }} deactivate={() => {
                                DeactivateElement(e.Name).then(() => {
                                    GetElements().then((r) => {
                                        setElements(r)
                                    })
                                })
                            }} />
                        ))}
                    </SettingBox>
                </div>
                <div>
                    <SettingBox header="Memory">
                        {memoryElements.map((e: any) => (
                            <MetricItem key={e.Index} name={e.Name} active={e.Active} activate={() => {
                                ActivateElement(e.Name).then(() => {
                                    GetElements().then((r) => {
                                        setElements(r)
                                    })
                                })
                            }} deactivate={() => {
                                DeactivateElement(e.Name).then(() => {
                                    GetElements().then((r) => {
                                        setElements(r)
                                    })
                                })
                            }} />
                        ))}
                    </SettingBox>
                    <SettingBox header="Battery">
                        {batteryElements.map((e: any) => (
                            <MetricItem key={e.Index} name={e.Name} active={e.Active} activate={() => {
                                ActivateElement(e.Name).then(() => {
                                    GetElements().then((r) => {
                                        setElements(r)
                                    })
                                })
                            }} deactivate={() => {
                                DeactivateElement(e.Name).then(() => {
                                    GetElements().then((r) => {
                                        setElements(r)
                                    })
                                })
                            }} />
                        ))}
                    </SettingBox>
                    <SettingBox header="FPS">
                        {frameElements.map((e: any) => (
                            <MetricItem key={e.Index} name={e.Name} active={e.Active} activate={() => {
                                ActivateElement(e.Name).then(() => {
                                    GetElements().then((r) => {
                                        setElements(r)
                                    })
                                })
                            }} deactivate={() => {
                                DeactivateElement(e.Name).then(() => {
                                    GetElements().then((r) => {
                                        setElements(r)
                                    })
                                })
                            }} />
                        ))}
                    </SettingBox>
                </div>
                <div>
                    <SettingBox header="Display">
                        {displayElements.map((e: any) => (
                            <MetricItem key={e.Index} name={e.Name} active={e.Active} activate={() => {
                                ActivateElement(e.Name).then(() => {
                                    GetElements().then((r) => {
                                        setElements(r)
                                    })
                                })
                            }} deactivate={() => {
                                DeactivateElement(e.Name).then(() => {
                                    GetElements().then((r) => {
                                        setElements(r)
                                    })
                                })
                            }} />
                        ))}
                    </SettingBox>
                    <SettingBox header="Versions">
                        {versionElements.map((e: any) => (
                            <MetricItem key={e.Index} name={e.Name} active={e.Active} activate={() => {
                                ActivateElement(e.Name).then(() => {
                                    GetElements().then((r) => {
                                        setElements(r)
                                    })
                                })
                            }} deactivate={() => {
                                DeactivateElement(e.Name).then(() => {
                                    GetElements().then((r) => {
                                        setElements(r)
                                    })
                                })
                            }} />
                        ))}
                    </SettingBox>
                </div>
            </div>
        </>
    )
}
export default MetricsSettings
