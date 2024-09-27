import { ReactNode } from "react";

interface Props {
    header: string;
    subheader?: string;
    classes?: string;
    nomargin?: boolean;
    children?: ReactNode;
    noGap?: boolean;
}
function SettingBox({ header, subheader, classes, nomargin, children, noGap }: Props) {
    let marginBottom = "mb-3"
    if (nomargin) {
        marginBottom = ""
    }
    return (
        <div className={marginBottom + classes}>
            <h1 className="text-lg">{header}</h1>
            <small>{subheader}</small>
            <div className={"border-2 border-gray-600 py-3 px-5 rounded flex flex-col " + (!noGap ? "gap-3" : "")}>
                {children}
            </div>
        </div>
    );
}
export default SettingBox;
