import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"
import { AddUnorderedElement, GetUnorderedElements, RemoveUnorderedElement } from "../../wailsjs/go/main/App"
import SettingBox from "../ui/SettingBox"

function UserLines() {
    const [elements, setElements] = useState<any>([])
    const customLineInput = useRef<HTMLInputElement>(null)

    useEffect(() => {
        reloadUnorderedElements()
    }, [])

    async function reloadUnorderedElements() {
        const r = await GetUnorderedElements()
        console.log(r)
        setElements(r)
    }

    async function addLine() {
        const value = customLineInput.current?.value
        if (value != "") {
            await AddUnorderedElement("" + value)
            reloadUnorderedElements()
            customLineInput.current!.value = ""
        }
    }

    return (
        <SettingBox header="Additional config" subheader="Add your own custom text into your configuration file!">
            <div className="grid">
                <div className="flex gap-3">
                    <div>
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            addLine()
                        }}>
                            <input
                                ref={customLineInput}
                                type="text"
                                className="bg-gray-700 border border-gray-500 p-2 rounded w-60"
                            />
                        </form>
                    </div>
                    <div className="flex items-center">
                        <a onClick={() => {
                            addLine()
                        }} className="cursor-pointer text-lg"><FontAwesomeIcon icon={faPlus} /></a>
                    </div>
                </div>
                <div className="mt-3">
                    {elements.map((e: any) => (
                        <div key={e.Index} className="grid grid-cols-[1fr_auto]">
                            <div>
                                {e.Name}
                            </div>
                            <div>
                                <a
                                    className="cursor-pointer"
                                    onClick={() => {
                                        RemoveUnorderedElement(e.Index).then(() => {
                                            reloadUnorderedElements()
                                        })
                                    }}
                                >
                                    <FontAwesomeIcon icon={faMinus} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SettingBox>
    )
}
export default UserLines;
