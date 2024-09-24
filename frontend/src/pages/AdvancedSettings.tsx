import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { GetUnorderedElements } from "../../wailsjs/go/main/App"
import SettingBox from "../ui/SettingBox"

function AdvancedSettings() {
    const [elements, setElements] = useState<any>([])

    useEffect(() => {
        reloadUnorderedElements()
    }, [])

    async function reloadUnorderedElements() {
        const r = await GetUnorderedElements()
        console.log(r)
        setElements(r)
    }

    return (<>
        <div className="flex gap-5 flex-auto flex-wrap">
            <div>
                <SettingBox header="Add custom lines in config">
                    <div>
                        <div className="flex gap-3">
                            <div>
                                <input type="text"
                                    className="bg-gray-700 border border-gray-500 p-2 rounded w-60"
                                />
                            </div>
                            <div className="flex items-center">
                                <a onClick={() => {
                                }} className="cursor-pointer text-lg"><FontAwesomeIcon icon={faPlus} /></a>
                            </div>
                        </div>
                        <div>
                            {elements.map((e: any) => (
                                <div key={e.Index}>
                                    {e.Name}
                                </div>
                            ))}
                        </div>
                    </div>
                </SettingBox>
            </div>
        </div>
    </>)
}
export default AdvancedSettings
