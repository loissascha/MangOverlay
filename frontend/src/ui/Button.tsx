import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    click?: React.Dispatch<void>;
}
function Button({ children, click }: Props) {
    return (
        <button
            onClick={() => { if (click) click(); }}
            className="py-1 px-3 bg-gray-500 hover:bg-gray-600 rounded cursor-pointer">
            {children}
        </button>
    );
}
export default Button;
