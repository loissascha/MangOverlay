import { useEffect, useState } from "react"
import { GetGraphCpuLoad, GetGraphCpuTemp, GetGraphGpuCoreClock, GetGraphGpuLoad, GetGraphGpuMemClock, GetGraphGpuTemp, GetGraphRam, GetGraphVram, ToggleGraphGpuLoad } from "../../wailsjs/go/main/App"
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

    useEffect(() => {
        updateGraphs()
    }, [])

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
                <label htmlFor="gpuload" className="me-2">GPU Load:</label>
                <input
                    type="checkbox"
                    id="gpuload"
                    checked={gpuLoad}
                    onChange={() => {
                        ToggleGraphGpuLoad().then(() => {
                            updateGraphs()
                        })
                    }}
                />
            </div>
        </SettingBox>
    )
}
export default Graphs
