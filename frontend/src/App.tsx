import { useEffect, useState } from "react"
import GeneralSettings from "./pages/GeneralSettings";
import { GetOrientation, SetOrientation, GetRoundCorners, SetRoundedCorners, ResetConfig, RestartVkcube, GetBackgroundColor, SetBackgroundColor, GetBackgroundAlpha, SetBackgroundAlpha, GetFontSize, SetFontSize } from "../wailsjs/go/main/App";
import Button from "./ui/Button";

function App() {
    const [activeMenu, setActiveMenu] = useState<string>("general");
    const [orientation, setOrientation] = useState<string>("");
    const [rounded, setRounded] = useState<boolean>(false);
    const [fontSize, setFontSize] = useState<string>("");
    const [backgroundColor, setBackgroundColor] = useState<string>("");
    const [backgroundAlpha, setBackgroundAlpha] = useState<string>("");

    useEffect(() => {
        console.log("call");
        GetOrientation().then((or) => {
            setOrientation(or);
        });
        GetRoundCorners().then((r: boolean) => {
            setRounded(r);
        });
        GetBackgroundColor().then((r) => {
            setBackgroundColor(r);
        });
        GetBackgroundAlpha().then((r) => {
            if (r == "") {
                r = "0.8"
            }
            setBackgroundAlpha(r);
        })
        GetFontSize().then((r) => {
            if (r == "") {
                r = "24"
            }
            setFontSize(r)
        })
    }, []);

    function setActiveMenuButton(am: string) {
        setActiveMenu(am);
    }

    return (
        <div className='w-full h-full text-white grid grid-rows-[auto_1fr_auto]'>
            <nav className="bg-gray-700 pt-2 px-3">
                <ul className="flex gap-3 list-none">
                    <li
                        onClick={() => { setActiveMenuButton("general"); }}
                        className={"pt-2 pb-1 px-3 cursor-pointer rounded-t-lg " + (activeMenu == "general" ? "bg-gray-800" : "bg-gray-900")}>
                        General
                    </li>
                    <li
                        onClick={() => { setActiveMenuButton("elements"); }}
                        className={"pt-2 pb-1 px-3 cursor-pointer rounded-t-lg " + (activeMenu == "elements" ? "bg-gray-800" : "bg-gray-900")}>
                        Elements
                    </li>
                </ul>
            </nav>
            <main className="bg-gray-800 p-3">
                {
                    activeMenu == "general" ?
                        (<GeneralSettings
                            orientation={orientation}
                            setOrientation={(newOrientation) => {
                                setOrientation(newOrientation);
                                SetOrientation(newOrientation);
                            }}
                            rounded={rounded}
                            setRounded={(newRounded) => {
                                setRounded(newRounded);
                                SetRoundedCorners(newRounded);
                            }}
                            backgroundColor={backgroundColor}
                            setBackgroundColor={(newBg) => {
                                setBackgroundColor(newBg);
                                SetBackgroundColor(newBg);
                            }}
                            backgroundAlpha={backgroundAlpha}
                            setBackgroundAlpha={(newAlpha) => {
                                setBackgroundAlpha(newAlpha);
                                SetBackgroundAlpha(newAlpha);
                            }}
                            fontSize={fontSize}
                            setFontSize={(newSize) => {
                                setFontSize(newSize)
                                SetFontSize(newSize)
                            }}
                        />) :
                        activeMenu == "elements" ?
                            (<div>Elements</div>) :
                            null
                }
            </main>
            <footer className="bg-gray-700 p-2">
                <Button click={() => { ResetConfig(); }}>
                    Reset
                </Button>
                <Button click={() => { RestartVkcube(); }}>
                    Restart VkCube
                </Button>
            </footer>
        </div >
    )
}

export default App
