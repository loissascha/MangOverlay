import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    classes?: string;
    click?: React.Dispatch<void>;
}
function Button({ children, classes, click }: Props) {
    return (
        <button
            onClick={() => { if (click) click(); }}
            className={"py-1 px-3 bg-gray-500 hover:bg-gray-600 rounded cursor-pointer me-2 " + classes}>
            {children}
        </button>
    );
}
export default Button;
