import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { AddFPSLimit, GetFPSLimits } from "../../wailsjs/go/main/App"
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
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <SettingBox header="FPS Limits">
                        <div className="flex gap-3 justify-end">
                            <a onClick={() => {
                                AddFPSLimit("0").then(() => {
                                    GetFPSLimits().then((r) => {
                                        setFpsLimits(r)
                                    })
                                })
                            }} className="cursor-pointer"><FontAwesomeIcon icon={faPlus} /></a>
                        </div>
                        <div>
                            {fpsLimits.map((limit: any, index: number) => (
                                <div key={index}>
                                    {limit}
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
