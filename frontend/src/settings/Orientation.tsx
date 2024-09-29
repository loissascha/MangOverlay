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

    return (
        <SettingBox header="Orientation">
            <div>
                <input
                    onClick={() => {
                        setOrientation("vertical");
                        SetOrientation("vertical")
                    }}
                    type="radio"
                    name="orientationRadio"
                    className="me-2"
                    id="orientationVertical"
                    readOnly={true}
                    checked={(orientation == "vertical")}
                />
                <label htmlFor="orientationVertical">Vertical</label>
            </div>
            <div>
                <input
                    onClick={() => {
                        setOrientation("horizontal");
                        SetOrientation("horizontal")
                    }}
                    type="radio"
                    name="orientationRadio"
                    className="me-2"
                    id="orientationHorizontal"
                    readOnly={true}
                    checked={(orientation == "horizontal")}
                />
                <label htmlFor="orientationHorizontal">Horizontal</label>
            </div>
        </SettingBox>
    )
}
export default Orientation
