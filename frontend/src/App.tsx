import { useEffect, useState } from "react"
import GeneralSettings from "./pages/GeneralSettings";
import { DisableGlobally, EnableGlobally, GloballyEnabled, RestartVkcube } from "../wailsjs/go/main/App";
import Button from "./ui/Button";
import MetricsSettings from "./pages/MetricsSettings";
import MetricsOrderSettings from "./pages/MetricsOrderSettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGears, faQuestion, faSort, faWrench } from "@fortawesome/free-solid-svg-icons";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import AdvancedSettings from "./pages/AdvancedSettings";
import { Version } from "./consts";

function App() {
    const [activeMenu, setActiveMenu] = useState<string>("general");
    const [globallyEnabled, setGloballyEnabled] = useState<boolean>(false)
    const [showRestartModal, setShowRestartModal] = useState<boolean>(false)
    const [showHelpModal, setShowHelpModal] = useState<boolean>(false)

    useEffect(() => {
        GloballyEnabled().then((r) => {
            setGloballyEnabled(r)
        })
    }, [])

    function setActiveMenuButton(am: string) {
        setActiveMenu(am);
    }

    return (
        <div className={'w-full h-full text-white grid grid-rows-[auto_1fr_auto] select-none cursor-default ' + ((showRestartModal || showHelpModal) ? ('overflow-hidden') : null)}>
            <nav className="bg-gray-700 pt-2 px-3">
                <ul className="flex gap-3 list-none">
                    <li
                        onClick={() => { setActiveMenuButton("general"); }}
                        className={"pt-2 pb-1 px-3 cursor-pointer rounded-t-lg flex gap-2 " + (activeMenu == "general" ? "bg-gray-800" : "bg-gray-900")}>
                        <div>
                            <FontAwesomeIcon icon={faGears} title="General" />
                        </div>
                        <a className="hidden md:inline-block">General</a>
                    </li>
                    <li
                        onClick={() => { setActiveMenuButton("metrics"); }}
                        className={"pt-2 pb-1 px-3 cursor-pointer rounded-t-lg flex gap-2 " + (activeMenu == "metrics" ? "bg-gray-800" : "bg-gray-900")}>
                        <div>
                            <FontAwesomeIcon icon={faBars} title="Metrics" />
                        </div>
                        <a className="hidden md:inline-block">Metrics</a>
                    </li>
                    <li
                        onClick={() => { setActiveMenuButton("metrics-order"); }}
                        className={"pt-2 pb-1 px-3 cursor-pointer rounded-t-lg flex gap-2 " + (activeMenu == "metrics-order" ? "bg-gray-800" : "bg-gray-900")}>
                        <div>
                            <FontAwesomeIcon icon={faSort} title="Change Order" />
                        </div>
                        <a className="hidden md:inline-block">Change Order</a>
                    </li>
                    <li
                        onClick={() => { setActiveMenuButton("manual"); }}
                        className={"pt-2 pb-1 px-3 cursor-pointer rounded-t-lg flex gap-2 " + (activeMenu == "manual" ? "bg-gray-800" : "bg-gray-900")}>
                        <div>
                            <FontAwesomeIcon icon={faWrench} title="Advanced Config" />
                        </div>
                        <a className="hidden md:inline-block">Advanced Config</a>
                    </li>
                </ul>
            </nav>
            <main className="bg-gray-800 p-3">
                {(() => {
                    switch (activeMenu) {
                        case "general":
                            return <GeneralSettings />
                        case "metrics":
                            return <MetricsSettings />
                        case "metrics-order":
                            return <MetricsOrderSettings />
                        case "manual":
                            return <AdvancedSettings />
                        default:
                            return null
                    }
                })()}
            </main>
            <footer className="bg-gray-700 p-2 grid grid-cols-[1fr_auto]">
                <div>
                    <Button click={() => { RestartVkcube(); }}>
                        Restart VkCube
                    </Button>
                    {globallyEnabled ? (
                        <Button click={
                            () => {
                                DisableGlobally().then(() => {
                                    GloballyEnabled().then((r) => {
                                        setGloballyEnabled(r)
                                        setShowRestartModal(true)
                                    })
                                })
                            }
                        }>
                            <FontAwesomeIcon icon={faSquareCheck} className="me-2" />Globally Enabled
                        </Button>

                    ) : (
                        <Button click={
                            () => {
                                EnableGlobally().then(() => {
                                    GloballyEnabled().then((r) => {
                                        setGloballyEnabled(r)
                                        setShowRestartModal(true)
                                    })
                                })
                            }
                        }>
                            <FontAwesomeIcon icon={faSquare} className="me-2" />Globally Enabled
                        </Button>
                    )}
                </div>
                <div className="flex items-center justify-end me-5">
                    <a className="cursor-pointer" onClick={() => {
                        setShowHelpModal(true)
                    }}>
                        <FontAwesomeIcon icon={faQuestion} />
                    </a>
                </div>
            </footer>
            {showRestartModal ? (
                <div className="fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 content-center">
                    <div className="w-96 max-w-full bg-gray-600 mx-auto px-8 py-6 rounded">
                        <p>To apply this change, please restart your device.</p>
                        <div className="text-center">
                            <button className="mt-2 bg-green-700 hover:bg-green-600 cursor-pointer border border-green-600 px-4 py-2 rounded-md" onClick={() => {
                                setShowRestartModal(false)
                            }}>Okay</button>
                        </div>
                    </div>
                </div>
            ) : null}
            {showHelpModal ? (
                <div className="fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 content-center">
                    <div className="w-96 max-w-full bg-gray-600 mx-auto px-8 py-6 rounded">
                        <h1 className="text-lg">MangOverlay</h1>
                        <p>Version: {Version}</p>
                        <p className="text-sm">github.com/loissascha/mangoverlay</p>
                        <div className="text-center">
                            <button className="mt-2 bg-red-900 hover:bg-red-800 cursor-pointer border border-red-900 px-4 py-2 rounded-md" onClick={() => {
                                setShowHelpModal(false)
                            }}>Close Help</button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div >
    )
}

export default App
