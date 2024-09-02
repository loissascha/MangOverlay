import { ReactNode } from "react";

interface Props {
    header: string;
    children?: ReactNode;
}
function SettingBox({ header, children }: Props) {
    return (
        <div className="mb-5">
            <h1 className="text-lg">{header}</h1>
            <div className="border-2 border-gray-400 py-3 px-5 rounded flex flex-col gap-3">
                {children}
            </div>
        </div>
    );
}
export default SettingBox;
