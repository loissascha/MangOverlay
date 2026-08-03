import { useEffect, useState } from "react"
import { GetKbToggleHud, GetKbToggleHudPosition, GetKbTogglePreset, GetKbToggleFpsLimit, GetKbToggleLogging, GetKbReloadCfg, GetKbUploadLog, SetKbToggleHud, SetKbToggleHudPosition, SetKbTogglePreset, SetKbToggleFpsLimit, SetKbToggleLogging, SetKbReloadCfg, SetKbUploadLog } from "../../wailsjs/go/main/App"
import SettingBox from "../ui/SettingBox"

function Keybinds() {
    const [kbToggleHud, setKbToggleHud] = useState<string>("")
    const [kbToggleHudPosition, setKbToggleHudPosition] = useState<string>("")
    const [kbTogglePreset, setKbTogglePreset] = useState<string>("")
    const [kbToggleFpsLimit, setKbToggleFpsLimit] = useState<string>("")
    const [kbToggleLogging, setKbToggleLogging] = useState<string>("")
    const [kbReloadCfg, setKbReloadCfg] = useState<string>("")
    const [kbUploadLog, setKbUploadLog] = useState<string>("")

    useEffect(() => {
        GetKbToggleHud().then((r) => {
            setKbToggleHud(r)
        })
        GetKbToggleHudPosition().then((r) => {
            setKbToggleHudPosition(r)
        })
        GetKbTogglePreset().then((r) => {
            setKbTogglePreset(r)
        })
        GetKbToggleFpsLimit().then((r) => {
            setKbToggleFpsLimit(r)
        })
        GetKbToggleLogging().then((r) => {
            setKbToggleLogging(r)
        })
        GetKbReloadCfg().then((r) => {
            setKbReloadCfg(r)
        })
        GetKbUploadLog().then((r) => {
            setKbUploadLog(r)
        })
    }, [])

    return (
        <SettingBox header="Keybinds">
            <div className="grid grid-cols-2 gap-3">
                <label htmlFor="togglehud" className="me-2">Toggle HUD:</label>
                <input
                    type="text"
                    id="togglehud"
                    className="w-28 bg-latte-surface0 dark:bg-mocha-surface0 p-1 rounded border border-latte-surface2 dark:border-mocha-surface2"
                    defaultValue={kbToggleHud}
                    onChange={(event) => {
                        const v = event.target.value
                        setKbToggleHud(v)
                        SetKbToggleHud(v)
                    }}
                />
                <label htmlFor="togglehudposition" className="me-2">Toggle Position:</label>
                <input
                    type="text"
                    id="togglehudposition"
                    className="w-28 bg-latte-surface0 dark:bg-mocha-surface0 p-1 rounded border border-latte-surface2 dark:border-mocha-surface2"
                    defaultValue={kbToggleHudPosition}
                    onChange={(event) => {
                        const v = event.target.value
                        setKbToggleHudPosition(v)
                        SetKbToggleHudPosition(v)
                    }}
                />
                <label htmlFor="togglepreset" className="me-2">Toggle Preset:</label>
                <input
                    type="text"
                    id="togglepreset"
                    className="w-28 bg-latte-surface0 dark:bg-mocha-surface0 p-1 rounded border border-latte-surface2 dark:border-mocha-surface2"
                    defaultValue={kbTogglePreset}
                    onChange={(event) => {
                        const v = event.target.value
                        setKbTogglePreset(v)
                        SetKbTogglePreset(v)
                    }}
                />
                <label htmlFor="togglefpslimit" className="me-2">Toggle FPS Limit:</label>
                <input
                    type="text"
                    id="togglefpslimit"
                    className="w-28 bg-latte-surface0 dark:bg-mocha-surface0 p-1 rounded border border-latte-surface2 dark:border-mocha-surface2"
                    defaultValue={kbToggleFpsLimit}
                    onChange={(event) => {
                        const v = event.target.value
                        setKbToggleFpsLimit(v)
                        SetKbToggleFpsLimit(v)
                    }}
                />
                <label htmlFor="togglelogging" className="me-2">Toggle Logging:</label>
                <input
                    type="text"
                    id="togglelogging"
                    className="w-28 bg-latte-surface0 dark:bg-mocha-surface0 p-1 rounded border border-latte-surface2 dark:border-mocha-surface2"
                    defaultValue={kbToggleLogging}
                    onChange={(event) => {
                        const v = event.target.value
                        setKbToggleLogging(v)
                        SetKbToggleLogging(v)
                    }}
                />
                <label htmlFor="reloadcfg" className="me-2">Reload Cfg:</label>
                <input
                    type="text"
                    id="reloadcfg"
                    className="w-28 bg-latte-surface0 dark:bg-mocha-surface0 p-1 rounded border border-latte-surface2 dark:border-mocha-surface2"
                    defaultValue={kbReloadCfg}
                    onChange={(event) => {
                        const v = event.target.value
                        setKbReloadCfg(v)
                        SetKbReloadCfg(v)
                    }}
                />
                <label htmlFor="uploadlog" className="me-2">Upload Log:</label>
                <input
                    type="text"
                    id="uploadlog"
                    className="w-28 bg-latte-surface0 dark:bg-mocha-surface0 p-1 rounded border border-latte-surface2 dark:border-mocha-surface2"
                    defaultValue={kbUploadLog}
                    onChange={(event) => {
                        const v = event.target.value
                        setKbUploadLog(v)
                        SetKbUploadLog(v)
                    }}
                />
            </div>
        </SettingBox>
    )
}
export default Keybinds
