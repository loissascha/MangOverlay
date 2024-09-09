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
        if (elements !== undefined) {
            getCpuElements()
            getGpuElements()
        }
    }, [elements])

    return (
        <>
            <div className="flex gap-5 flex-auto flex-wrap">
                <div>
                    <SettingBox header="CPU Metrics">
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
                    <SettingBox header="GPU Metrics">
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
            </div>
        </>
    )
}
export default MetricsSettings
