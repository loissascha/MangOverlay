import { useEffect, useState } from "react";
import { GetElements } from "../../wailsjs/go/main/App";

function ElementsSettings() {
    const [elements, setElements] = useState<any>()
    const [activeElements, setActiveElements] = useState<any>([])
    const [inactiveElements, setInactiveElements] = useState<any>([])

    useEffect(() => {
        GetElements().then((r) => {
            setElements(r)
        })
    }, [])

    useEffect(() => {
        function getActiveElements() {
            if (elements === undefined) {
                return
            }
            let data = []
            for (var element of elements) {
                if (!element.Active) {
                    continue
                }
                data.push(element)
            }
            setActiveElements(data)
        }
        function getInactiveElements() {
            if (elements === undefined) {
                return
            }
            let data = []
            for (var element of elements) {
                if (element.Active) {
                    continue
                }
                data.push(element)
            }
            setInactiveElements(data)
        }
        getActiveElements()
        getInactiveElements()
    }, [elements])


    return (
        <>
            <div>
                Active Elements
                {activeElements.map((e: any) => (
                    <div key={e.Index}>{e.Name}</div>
                ))}
            </div>
        </>
    );
}
export default ElementsSettings;
