import { ReactNode } from "react";

interface Props {
  header: string;
  subheader?: string;
  classes?: string;
  nomargin?: boolean;
  children?: ReactNode;
  noGap?: boolean;
}
function SettingBox({
  header,
  subheader,
  classes,
  nomargin,
  children,
  noGap,
}: Props) {
  let marginBottom = "mb-3 ";
  if (nomargin) {
    marginBottom = "";
  }
  return (
    <div className={marginBottom + classes}>
      <h1 className="text-xl tracking-wide mb-0 first-letter:font-bold">
        {header}
      </h1>
      <small className="mt-0">{subheader}</small>
      <div
        className={
          "border-0 border-latte-surface2 dark:border-mocha-surface2 pt-1 pb-3 px-1 rounded flex flex-col " +
          (!noGap ? "gap-3" : "")
        }
      >
        {children}
      </div>
    </div>
  );
}
export default SettingBox;
