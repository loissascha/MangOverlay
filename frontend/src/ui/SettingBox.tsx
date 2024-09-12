import { ReactNode } from "react";

interface Props {
    header: string;
    classes?: string;
    nomargin?: boolean;
    children?: ReactNode;
}
function SettingBox({ header, classes, nomargin, children }: Props) {
    let marginBottom = "mb-3"
    if (nomargin) {
        marginBottom = ""
    }
    return (
        <div className={marginBottom + classes}>
            <h1 className="text-lg">{header}</h1>
            <div className="border-2 border-gray-600 py-3 px-5 rounded flex flex-col gap-3">
                {children}
            </div>
        </div>
    );
}
export default SettingBox;
