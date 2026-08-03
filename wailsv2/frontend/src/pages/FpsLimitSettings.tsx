import FpsLimits from "../settings/FpsLimits"

function FpsLimitSettings() {

    return (
        <>
            <div className="flex gap-5 flex-auto flex-wrap">
                <div>
                    <FpsLimits />
                </div>
            </div>
        </>
    )
}
export default FpsLimitSettings
