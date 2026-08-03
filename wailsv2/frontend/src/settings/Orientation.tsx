import { faCircle, faCircleDot } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { GetOrientation, SetOrientation } from "../../wailsjs/go/main/App";
import SettingBox from "../ui/SettingBox";

function Orientation() {
    const [orientation, setOrientation] = useState<string>("");

    useEffect(() => {
        GetOrientation().then((or) => {
            setOrientation(or)
        })
    }, [])

    function updateOrientation(orientation: string) {
        setOrientation(orientation)
        SetOrientation(orientation)
    }

    return (
        <SettingBox header="Orientation">
            <div>
                {orientation == "vertical" ? (
                    <FontAwesomeIcon icon={faCircleDot} className="cursor-pointer" onClick={() => { updateOrientation("vertical") }} />
                ) : (
                    <FontAwesomeIcon icon={faCircle} className="cursor-pointer" onClick={() => { updateOrientation("vertical") }} />
                )}
                <a className="ms-2 cursor-pointer" onClick={() => { updateOrientation("vertical") }}>Vertical</a>
            </div>
            <div>
                {orientation == "horizontal" ? (
                    <FontAwesomeIcon icon={faCircleDot} className="cursor-pointer" onClick={() => { updateOrientation("horizontal") }} />
                ) : (
                    <FontAwesomeIcon icon={faCircle} className="cursor-pointer" onClick={() => { updateOrientation("horizontal") }} />
                )}
                <a className="ms-2 cursor-pointer" onClick={() => { updateOrientation("horizontal") }}>Horizontal</a>
            </div>
        </SettingBox>
    )
}
export default Orientation
