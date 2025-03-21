import { useEffect, useState } from "react";
import SettingBox from "../ui/SettingBox";
import {
  ActivateElement,
  DeactivateElement,
  SetOffsetX,
  GetElements,
  GetPosition,
  GetTableColumns,
  SetPosition,
  SetTableColumns,
  GetOffsetX,
  GetOffsetY,
  SetOffsetY,
  SetUseOffset,
  GetUseOffset,
} from "../../wailsjs/go/main/App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCircle,
  faCircleDot,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";

function Position() {
  const [position, setPosition] = useState<string>("");
  const [compactMode, setCompactMode] = useState<boolean>(false);
  const [noMargin, setNoMargin] = useState<boolean>(false);
  const [tableColumns, setTableColumns] = useState<string>("3");
  const [useOffset, setUseOffset] = useState<boolean>(false);
  const [offsetX, setOffsetX] = useState<string>("0");
  const [offsetY, setOffsetY] = useState<string>("0");

  useEffect(() => {
    GetPosition().then((r) => {
      setPosition(r);
      console.log("position: ", r);
    });
    reloadTableColumns();
    reloadOffsets();
  }, []);

  function reloadOffsets() {
    GetUseOffset().then((r) => {
      setUseOffset(r);
    });
    GetOffsetX().then((r) => {
      setOffsetX(r);
    });
    GetOffsetY().then((r) => {
      setOffsetY(r);
    });
  }

  function reloadTableColumns() {
    GetTableColumns().then((r) => {
      setTableColumns(r);
    });
  }

  function reloadElements() {
    GetElements().then((r: any) => {
      for (var element of r) {
        if (element.Name == "hud_compact") {
          setCompactMode(element.Active);
        } else if (element.Name == "hud_no_margin") {
          setNoMargin(element.Active);
        }
      }
    });
  }

  function toggleCompactMode() {
    if (compactMode) {
      DeactivateElement("hud_compact").then(() => {
        reloadElements();
      });
    } else {
      ActivateElement("hud_compact").then(() => {
        reloadElements();
      });
    }
  }

  async function toggleUseOffset() {
    if (useOffset) {
      await SetUseOffset(false);
    } else {
      await SetUseOffset(true);
    }
    reloadOffsets();
  }

  async function toggleNoMargin() {
    if (noMargin) {
      await DeactivateElement("hud_no_margin");
      reloadElements();
    } else {
      await ActivateElement("hud_no_margin");
      reloadElements();
    }
  }

  useEffect(() => {
    reloadElements();
  }, []);

  if (position == "") {
    return null;
  }

  return (
    <SettingBox header="HUD">
      <div className="grid grid-cols-2 gap-3">
        <div>Position</div>
        <div>
          <div className="w-28 h-20 grid grid-cols-3 p-1">
            <div className="grid grid-rows-3">
              <div className="flex items-start">
                {position == "top-left" ? (
                  <FontAwesomeIcon icon={faCircleDot} />
                ) : (
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faCircle}
                    onClick={() => {
                      setPosition("top-left");
                      SetPosition("top-left");
                    }}
                  />
                )}
              </div>
              <div>
                {position == "middle-left" ? (
                  <FontAwesomeIcon icon={faCircleDot} />
                ) : (
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faCircle}
                    onClick={() => {
                      setPosition("middle-left");
                      SetPosition("middle-left");
                    }}
                  />
                )}
              </div>
              <div className="flex items-end">
                {position == "bottom-left" ? (
                  <FontAwesomeIcon icon={faCircleDot} />
                ) : (
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faCircle}
                    onClick={() => {
                      setPosition("bottom-left");
                      SetPosition("bottom-left");
                    }}
                  />
                )}
              </div>
            </div>
            <div className="grid grid-rows-3">
              <div className="flex items-start justify-center">
                {position == "top-center" ? (
                  <FontAwesomeIcon icon={faCircleDot} />
                ) : (
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faCircle}
                    onClick={() => {
                      setPosition("top-center");
                      SetPosition("top-center");
                    }}
                  />
                )}
              </div>
              <div></div>
              <div className="flex items-end justify-center">
                {position == "bottom-center" ? (
                  <FontAwesomeIcon icon={faCircleDot} />
                ) : (
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faCircle}
                    onClick={() => {
                      setPosition("bottom-center");
                      SetPosition("bottom-center");
                    }}
                  />
                )}
              </div>
            </div>
            <div className="grid grid-rows-3">
              <div className="flex justify-end">
                {position == "top-right" ? (
                  <FontAwesomeIcon icon={faCircleDot} />
                ) : (
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faCircle}
                    onClick={() => {
                      setPosition("top-right");
                      SetPosition("top-right");
                    }}
                  />
                )}
              </div>
              <div className="flex justify-end items-center">
                {position == "middle-right" ? (
                  <FontAwesomeIcon icon={faCircleDot} />
                ) : (
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faCircle}
                    onClick={() => {
                      setPosition("middle-right");
                      SetPosition("middle-right");
                    }}
                  />
                )}
              </div>
              <div className="flex justify-end items-end">
                {position == "bottom-right" ? (
                  <FontAwesomeIcon icon={faCircleDot} />
                ) : (
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faCircle}
                    onClick={() => {
                      setPosition("bottom-right");
                      SetPosition("bottom-right");
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="offset" className="cursor-pointer">
            UseOffset
          </label>
        </div>
        <div>
          {useOffset ? (
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faCheckSquare}
              onClick={() => {
                toggleUseOffset();
              }}
            />
          ) : (
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faSquare}
              onClick={() => {
                toggleUseOffset();
              }}
            />
          )}
          <input
            className="hidden"
            id="offset"
            type="checkbox"
            checked={useOffset}
            onChange={() => {
              toggleUseOffset();
            }}
          />
        </div>
      </div>
      {useOffset ? (
        <>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="offsetX" className="cursor-pointer">
                OffsetX
              </label>
            </div>
            <div>
              <input
                id="offsetX"
                type="number"
                step="1"
                className="w-28 bg-latte-surface0 dark:bg-mocha-surface0 p-1 text-center border border-latte-surface2 dark:border-mocha-surface2 rounded"
                defaultValue={offsetX}
                onChange={(event) => {
                  setOffsetX(event.target.value);
                  SetOffsetX(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="offsetY" className="cursor-pointer">
                OffsetY
              </label>
            </div>
            <div>
              <input
                id="offsetY"
                type="number"
                step="1"
                className="w-28 bg-latte-surface0 dark:bg-mocha-surface0 p-1 text-center border border-latte-surface2 dark:border-mocha-surface2 rounded"
                defaultValue={offsetY}
                onChange={(event) => {
                  setOffsetY(event.target.value);
                  SetOffsetY(event.target.value);
                }}
              />
            </div>
          </div>
        </>
      ) : null}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="compactMode" className="cursor-pointer">
            Compact Mode
          </label>
        </div>
        <div>
          {compactMode ? (
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faCheckSquare}
              onClick={() => {
                toggleCompactMode();
              }}
            />
          ) : (
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faSquare}
              onClick={() => {
                toggleCompactMode();
              }}
            />
          )}
          <input
            className="hidden"
            id="compactMode"
            type="checkbox"
            checked={compactMode}
            onChange={() => {
              toggleCompactMode();
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="noMargin" className="cursor-pointer">
            No Margin
          </label>
        </div>
        <div>
          {noMargin ? (
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faCheckSquare}
              onClick={() => {
                toggleNoMargin();
              }}
            />
          ) : (
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faSquare}
              onClick={() => {
                toggleNoMargin();
              }}
            />
          )}
          <input
            id="noMargin"
            type="checkbox"
            checked={noMargin}
            className="hidden"
            onChange={() => {
              toggleNoMargin();
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="tableColumns" className="cursor-pointer">
            Columns
          </label>
        </div>
        <div>
          <input
            id="tableColumns"
            type="number"
            min="1"
            max="10"
            step="1"
            className="w-28 bg-latte-surface0 dark:bg-mocha-surface0 p-1 text-center border border-latte-surface2 dark:border-mocha-surface2 rounded"
            defaultValue={tableColumns}
            onChange={(event) => {
              setTableColumns(event.target.value);
              SetTableColumns(event.target.value);
            }}
          />
        </div>
      </div>
    </SettingBox>
  );
}
export default Position;
