import { faMinus, faPlus, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { AddFPSLimit, GetFPSLimits, RemoveFPSLimit, ReorderFPSLimit, UpdateFPSLimit } from "../../wailsjs/go/main/App"
import SettingBox from "../ui/SettingBox"

function FpsLimits() {
    const [fpsLimits, setFpsLimits] = useState<any>([])

    useEffect(() => {
        reloadFpsLimits()
    }, [])

    async function reloadFpsLimits() {
        const r = await GetFPSLimits()
        console.log(r)
        setFpsLimits(r)
    }

    return (
        <SettingBox header="FPS Limits" subheader="0 = unlimited">
            <div className="flex gap-3 justify-end">
                <a onClick={() => {
                    AddFPSLimit("0").then(() => {
                        reloadFpsLimits()
                    })
                }} className="cursor-pointer text-lg"><FontAwesomeIcon icon={faPlus} /></a>
            </div>
            <div className="flex flex-col gap-3">
                {fpsLimits.map((limit: any, index: number) => (
                    <div key={index} className="grid grid-cols-[1fr_auto] gap-2">
                        <input value={limit} className="bg-gray-700 border border-gray-500 p-2 rounded w-60" onChange={(event: any) => {
                            const value = event.target.value
                            UpdateFPSLimit(index, value).then(() => {
                                reloadFpsLimits()
                            })
                        }} />
                        <div className="flex gap-1">
                            <button className="p-2 bg-gray-700 rounded border border-gray-500 cursor-pointer hover:bg-gray-600" onClick={() => {
                                ReorderFPSLimit(index, index - 1).then(() => {
                                    reloadFpsLimits()
                                })
                            }}><FontAwesomeIcon icon={faSortUp} /></button>
                            <button className="p-2 bg-gray-700 rounded border border-gray-500 cursor-pointer hover:bg-gray-600" onClick={() => {
                                ReorderFPSLimit(index, index + 1).then(() => {
                                    reloadFpsLimits()
                                })
                            }}><FontAwesomeIcon icon={faSortDown} /></button>
                            <button className="p-2 bg-gray-700 rounded border border-gray-500 cursor-pointer hover:bg-gray-600" onClick={() => {
                                RemoveFPSLimit(index).then(() => {
                                    reloadFpsLimits()
                                })
                            }}><FontAwesomeIcon icon={faMinus} /></button>
                        </div>
                    </div>
                ))}
            </div>
        </SettingBox>
    )
}
export default FpsLimits