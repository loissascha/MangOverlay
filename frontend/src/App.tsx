import { useState } from "react"
import GeneralSettings from "./pages/GeneralSettings";
import { EnableGlobally, RestartVkcube } from "../wailsjs/go/main/App";
import Button from "./ui/Button";
import ElementsSettings from "./pages/ElementsSettings";
import KeybindSettings from "./pages/KeybindSettings";
import MetricsSettings from "./pages/MetricsSettings";
import FpsLimitSettings from "./pages/FpsLimitSettings";
import MetricsOrderSettings from "./pages/MetricsOrderSettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDisplay, faGears, faKeyboard, faSort } from "@fortawesome/free-solid-svg-icons";

function App() {
    const [activeMenu, setActiveMenu] = useState<string>("general");

    function setActiveMenuButton(am: string) {
        setActiveMenu(am);
    }

    return (
        <div className='w-full h-full text-white grid grid-rows-[auto_1fr_auto] select-none cursor-default'>
            <nav className="bg-gray-700 pt-2 px-3">
                <ul className="flex gap-3 list-none">
                    <li
                        onClick={() => { setActiveMenuButton("general"); }}
                        className={"pt-2 pb-1 px-3 cursor-pointer rounded-t-lg " + (activeMenu == "general" ? "bg-gray-800" : "bg-gray-900")}>
                        <FontAwesomeIcon icon={faGears} className="me-2" />
                        General
                    </li>
                    <li
                        onClick={() => { setActiveMenuButton("keybinds"); }}
                        className={"pt-2 pb-1 px-3 cursor-pointer rounded-t-lg " + (activeMenu == "keybinds" ? "bg-gray-800" : "bg-gray-900")}>
                        <FontAwesomeIcon icon={faKeyboard} className="me-2" />
                        Keybinds
                    </li>
                    <li
                        onClick={() => { setActiveMenuButton("metrics"); }}
                        className={"pt-2 pb-1 px-3 cursor-pointer rounded-t-lg " + (activeMenu == "metrics" ? "bg-gray-800" : "bg-gray-900")}>
                        <FontAwesomeIcon icon={faBars} className="me-2" />
                        Metrics
                    </li>
                    <li
                        onClick={() => { setActiveMenuButton("metrics-order"); }}
                        className={"pt-2 pb-1 px-3 cursor-pointer rounded-t-lg " + (activeMenu == "metrics-order" ? "bg-gray-800" : "bg-gray-900")}>
                        <FontAwesomeIcon icon={faSort} className="me-2" />
                        Change Order
                    </li>
                    <li
                        onClick={() => { setActiveMenuButton("fpslimits"); }}
                        className={"pt-2 pb-1 px-3 cursor-pointer rounded-t-lg " + (activeMenu == "fpslimits" ? "bg-gray-800" : "bg-gray-900")}>
                        <FontAwesomeIcon icon={faDisplay} className="me-2" />
                        FPS Limits
                    </li>
                </ul>
            </nav>
            <main className="bg-gray-800 p-3">
                {
                    activeMenu == "general" ?
                        (<GeneralSettings />) :
                        activeMenu == "keybinds" ?
                            (<KeybindSettings />) :
                            activeMenu == "elements" ?
                                (<ElementsSettings />) :
                                activeMenu == "metrics" ?
                                    (<MetricsSettings />) :
                                    activeMenu == "metrics-order" ?
                                        (<MetricsOrderSettings />) :
                                        activeMenu == "fpslimits" ?
                                            (<FpsLimitSettings />) : null
                }
            </main>
            <footer className="bg-gray-700 p-2">
                <Button click={() => { RestartVkcube(); }}>
                    Restart VkCube
                </Button>
                <Button click={() => {
                    EnableGlobally()
                }}>
                    Enable Globally
                </Button>
            </footer>
        </div>
    )
}

export default App
