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
            className={"py-1 px-3 bg-latte-surface1 dark:bg-mocha-surface1 hover:bg-latte-surface2 dark:hover:bg-mocha-surface2 rounded cursor-pointer me-2 " + classes}>
            {children}
        </button>
    );
}
export default Button;
