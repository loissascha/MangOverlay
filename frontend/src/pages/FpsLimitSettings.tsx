import { faMinus, faPlus, faSortDown, faSortUp, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { AddFPSLimit, GetFPSLimits, RemoveFPSLimit, ReorderFPSLimit, UpdateFPSLimit } from "../../wailsjs/go/main/App"
import SettingBox from "../ui/SettingBox"

function FpsLimitSettings() {
    const [fpsLimits, setFpsLimits] = useState<any>([])

    useEffect(() => {
        GetFPSLimits().then((r) => {
            console.log(r)
            setFpsLimits(r)
        })
    }, [])

    return (
        <>
            <div className="grid grid-rows-2 gap-3">
                <div>
                    <SettingBox header="FPS Limits" subheader="0 = unlimited">
                        <div className="flex gap-3 justify-end">
                            <a onClick={() => {
                                AddFPSLimit("0").then(() => {
                                    GetFPSLimits().then((r) => {
                                        setFpsLimits(r)
                                    })
                                })
                            }} className="cursor-pointer"><FontAwesomeIcon icon={faPlus} /></a>
                        </div>
                        <div className="flex flex-col gap-3">
                            {fpsLimits.map((limit: any, index: number) => (
                                <div key={index} className="grid grid-cols-[1fr_auto] gap-2">
                                    <input value={limit} className="bg-gray-700 border border-gray-500 p-1 rounded" onChange={(event: any) => {
                                        const value = event.target.value
                                        UpdateFPSLimit(index, value).then(() => {
                                            GetFPSLimits().then((r) => {
                                                setFpsLimits(r)
                                            })
                                        })
                                    }} />
                                    <div className="flex gap-2">
                                        <button className="p-1 bg-gray-700 rounded border border-gray-500 cursor-pointer hover:bg-gray-600" onClick={() => {
                                            ReorderFPSLimit(index, index - 1).then(() => {
                                                GetFPSLimits().then((r) => {
                                                    setFpsLimits(r)
                                                })
                                            })
                                        }}><FontAwesomeIcon icon={faSortUp} /></button>
                                        <button className="p-1 bg-gray-700 rounded border border-gray-500 cursor-pointer hover:bg-gray-600" onClick={() => {
                                            ReorderFPSLimit(index, index + 1).then(() => {
                                                GetFPSLimits().then((r) => {
                                                    setFpsLimits(r)
                                                })
                                            })
                                        }}><FontAwesomeIcon icon={faSortDown} /></button>
                                        <button className="p-1 bg-gray-700 rounded border border-gray-500 cursor-pointer hover:bg-gray-600" onClick={() => {
                                            RemoveFPSLimit(index).then(() => {
                                                GetFPSLimits().then((r) => {
                                                    setFpsLimits(r)
                                                })
                                            })
                                        }}><FontAwesomeIcon icon={faMinus} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SettingBox>
                </div>
                <div>
                    <SettingBox header="Config">
                    </SettingBox>
                </div>
            </div>
        </>
    )
}
export default FpsLimitSettings
