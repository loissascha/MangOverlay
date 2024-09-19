import SettingBox from "../ui/SettingBox"

function Fps() {
    return (
        <SettingBox header="FPS">
            <div className="grid grid-cols-2 gap-3">
                <label htmlFor="fpsloadvalue">Load Value:</label>
                <input
                    type="text"
                    id="fpsloadvalue"
                    className="w-28 bg-gray-700 p-1 border border-gray-500 rounded text-center"
                    min="8"
                    max="50"
                />
                <label htmlFor="fpsloadcolors">Load Colors:</label>
            </div>
        </SettingBox>
    )
}
export default Fps
