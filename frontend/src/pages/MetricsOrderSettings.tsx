import { useEffect, useState } from "react"
import { GetOrderElements, OrderElementUnderneathElement, ReplaceElements } from "../../wailsjs/go/main/App"
import SettingBox from "../ui/SettingBox"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown, faUpDownLeftRight } from '@fortawesome/free-solid-svg-icons'
import { DndProvider, useDrag, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

interface DraggableElementInterface {
    e: any
    ElementUp: any
    ElementDown: any
    onDropElement: any
}

function DraggableElement({ e, ElementUp, ElementDown, onDropElement }: DraggableElementInterface) {
    const [{ isDragging }, drag] = useDrag({
        type: 'ELEMENT',
        item: () => {
            return { name: e.Name }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [{ isOver }, drop] = useDrop({
        accept: 'ELEMENT',
        drop: (item: any) => {
            onDropElement(item.name, e.Name)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    })

    return (
        <div className="">
            <div className={`grid grid-cols-[1fr_auto] ${isDragging ? 'opacity-50' : ''}`}>
                <div ref={drag} className={"bg-gray-700 p-2 rounded cursor-pointer border border-gray-500"}>
                    <a className="cursor-pointer me-3" title="Unselect">
                        <FontAwesomeIcon icon={faUpDownLeftRight} className="me-2" />
                        {e.Name}
                    </a>
                </div>
                <div className="flex gap-1 ms-2">
                    <button className="cursor-pointer bg-gray-700 p-2 rounded border border-gray-500 hover:bg-gray-600" onClick={() => ElementUp(e.Name)} title="Sort Up">
                        <FontAwesomeIcon icon={faSortUp} />
                    </button>
                    <button className="cursor-pointer bg-gray-700 p-2 rounded border border-gray-500 hover:bg-gray-600" onClick={() => ElementDown(e.Name)} title="Sort Down">
                        <FontAwesomeIcon icon={faSortDown} />
                    </button>
                </div>
            </div>
            <div ref={drop} className={`h-4 ${isOver ? 'bg-gray-400' : isDragging ? 'bg-gray-600' : ''}`}> </div>
        </div>
    );
};

function MetricsOrderSettings() {
    const [elements, setElements] = useState<any>([])
    const [activeElements, setActiveElements] = useState<any>([])

    useEffect(() => {
        reloadElement()
    }, [])

    useEffect(() => {
        function getActiveElements() {
            let data = []
            for (const element of elements) {
                if (!element.Active) continue
                let name = element.Name
                if (!element.IsCustom) {
                    if (name.includes("cpu_") && name != "cpu_stats") continue
                    if (name.includes("gpu_") && name != "gpu_stats" && name != "gpu_name") continue
                    if (name == "engine_short_names") continue
                    if (name == "frametime" || name == "throttling_status_graph" || name == "fps_color_change") continue
                }
                data.push(element)
            }
            data.sort((a, b) => a.Index - b.Index)
            setActiveElements(data)
            console.log(data)
        }
        getActiveElements()
    }, [elements])

    async function reloadElement() {
        const r = await GetOrderElements()
        setElements(r)
    }

    function ElementUp(name: string) {
        let lastElement = undefined
        for (const e of activeElements) {
            if (e.Name == name) {
                if (lastElement !== undefined) {
                    // GoReplaceFunc(name, lastElement.Name)
                    ReplaceElements(name, lastElement.Name).then(() => {
                        reloadElement()
                    })
                    console.log("replace " + name + " with " + lastElement.Name)
                }
                break
            }
            lastElement = e
        }
    }

    function ElementDown(name: string) {
        let doNow = false
        for (const e of activeElements) {
            if (doNow) {
                // GoReplaceFunc(name, e.Name)
                ReplaceElements(name, e.Name).then(() => {
                    reloadElement()
                })

                console.log("replace " + name + " with " + e.Name)
                break
            }
            if (e.Name == name) {
                doNow = true
            }
        }
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex gap-5 flex-auto flex-wrap">
                <div>
                    <SettingBox header="Active Elements" noGap={true}>
                        {activeElements.map((e: any) => (
                            <DraggableElement key={e.Index} e={e}
                                ElementUp={(name: string) => {
                                    ElementUp(name)
                                }}
                                ElementDown={(name: string) => {
                                    ElementDown(name)
                                }}
                                onDropElement={(dragged: string, dropped: string) => {
                                    if (dragged == dropped) return
                                    OrderElementUnderneathElement(dragged, dropped).then(() => {
                                        reloadElement()
                                    })
                                    console.log("drop", dragged, dropped)
                                }}
                            />
                        ))}
                    </SettingBox>
                </div>
            </div>
        </DndProvider>
    )
}
export default MetricsOrderSettings
