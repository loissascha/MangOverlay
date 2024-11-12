import { useEffect, useRef, useState } from "react";
import GeneralSettings from "./pages/GeneralSettings";
import {
  DisableGlobally,
  EnableGlobally,
  GloballyEnabled,
  ImportConfig,
  ReloadConfig,
  RestartVkcube,
  ShareConfig,
} from "../wailsjs/go/main/App";
import Button from "./ui/Button";
import MetricsSettings from "./pages/MetricsSettings";
import MetricsOrderSettings from "./pages/MetricsOrderSettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCopy,
  faDownload,
  faGears,
  faQuestion,
  faSave,
  faShare,
  faSort,
  faWrench,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import AdvancedSettings from "./pages/AdvancedSettings";
import { Version } from "./consts";
import Modal from "./ui/Modal";

function App() {
  const [activeMenu, setActiveMenu] = useState<string>("general");
  const [globallyEnabled, setGloballyEnabled] = useState<boolean>(false);
  const [showRestartModal, setShowRestartModal] = useState<boolean>(false);
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [showImportModal, setShowImportModal] = useState<boolean>(false);
  const [shareConfig, setShareConfig] = useState<string[]>([]);
  const shareRef = useRef<HTMLPreElement | null>(null);
  const importTextRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    GloballyEnabled().then((r) => {
      setGloballyEnabled(r);
    });
  }, []);

  function setActiveMenuButton(am: string) {
    setActiveMenu(am);
  }

  return (
    <div
      className={
        "w-full h-full text-latte-text dark:text-mocha-text grid grid-rows-[auto_1fr_auto] select-none cursor-default " +
        (showRestartModal || showHelpModal || showShareModal || showImportModal
          ? "overflow-hidden"
          : null)
      }
    >
      <nav className="bg-latte-surface0 dark:bg-mocha-surface0 pt-2 px-3">
        <ul className="flex gap-3 list-none">
          <li
            onClick={() => {
              setActiveMenuButton("general");
            }}
            className={
              "pt-2 pb-1 px-3 cursor-pointer rounded-t-lg flex gap-2 " +
              (activeMenu == "general"
                ? "bg-latte-base dark:bg-mocha-base"
                : "bg-latte-surface2 dark:bg-mocha-surface1")
            }
          >
            <div>
              <FontAwesomeIcon icon={faGears} title="General" />
            </div>
            <a className="hidden md:inline-block">General</a>
          </li>
          <li
            onClick={() => {
              setActiveMenuButton("metrics");
            }}
            className={
              "pt-2 pb-1 px-3 cursor-pointer rounded-t-lg flex gap-2 " +
              (activeMenu == "metrics"
                ? "bg-latte-base dark:bg-mocha-base"
                : "bg-latte-surface2 dark:bg-mocha-surface1")
            }
          >
            <div>
              <FontAwesomeIcon icon={faBars} title="Metrics" />
            </div>
            <a className="hidden md:inline-block">Metrics</a>
          </li>
          <li
            onClick={() => {
              setActiveMenuButton("metrics-order");
            }}
            className={
              "pt-2 pb-1 px-3 cursor-pointer rounded-t-lg flex gap-2 " +
              (activeMenu == "metrics-order"
                ? "bg-latte-base dark:bg-mocha-base"
                : "bg-latte-surface2 dark:bg-mocha-surface1")
            }
          >
            <div>
              <FontAwesomeIcon icon={faSort} title="Change Order" />
            </div>
            <a className="hidden md:inline-block">Change Order</a>
          </li>
          <li
            onClick={() => {
              setActiveMenuButton("manual");
            }}
            className={
              "pt-2 pb-1 px-3 cursor-pointer rounded-t-lg flex gap-2 " +
              (activeMenu == "manual"
                ? "bg-latte-base dark:bg-mocha-base"
                : "bg-latte-surface2 dark:bg-mocha-surface1")
            }
          >
            <div>
              <FontAwesomeIcon icon={faWrench} title="Advanced Config" />
            </div>
            <a className="hidden md:inline-block">Advanced Config</a>
          </li>
        </ul>
      </nav>
      <main className="bg-latte-base dark:bg-mocha-base p-3">
        {(() => {
          switch (activeMenu) {
            case "general":
              return <GeneralSettings />;
            case "metrics":
              return <MetricsSettings />;
            case "metrics-order":
              return <MetricsOrderSettings />;
            case "manual":
              return <AdvancedSettings />;
            default:
              return null;
          }
        })()}
      </main>
      <footer className="bg-latte-surface0 dark:bg-mocha-surface0 p-2 grid grid-cols-[1fr_auto]">
        <div>
          <Button
            click={() => {
              RestartVkcube();
            }}
          >
            Restart VkCube
          </Button>
          {globallyEnabled ? (
            <Button
              click={() => {
                DisableGlobally().then(() => {
                  GloballyEnabled().then((r) => {
                    setGloballyEnabled(r);
                    setShowRestartModal(true);
                  });
                });
              }}
            >
              <FontAwesomeIcon icon={faSquareCheck} className="me-2" />
              Globally Enabled
            </Button>
          ) : (
            <Button
              click={() => {
                EnableGlobally().then(() => {
                  GloballyEnabled().then((r) => {
                    setGloballyEnabled(r);
                    setShowRestartModal(true);
                  });
                });
              }}
            >
              <FontAwesomeIcon icon={faSquare} className="me-2" />
              Globally Enabled
            </Button>
          )}
        </div>
        <div className="flex items-center justify-end me-5">
          <a
            title="Export"
            className="cursor-pointer me-5"
            onClick={() => {
              ShareConfig().then((r) => {
                setShareConfig(r);
                setShowShareModal(true);
              });
            }}
          >
            <FontAwesomeIcon icon={faShare} />
          </a>
          <a
            title="Help"
            className="cursor-pointer"
            onClick={() => {
              setShowHelpModal(true);
            }}
          >
            <FontAwesomeIcon icon={faQuestion} />
          </a>
        </div>
      </footer>
      {showRestartModal ? (
        <Modal>
          <p>To apply this change, please restart your device.</p>
          <div className="text-center">
            <button
              className="mt-2 bg-green-300 dark:bg-green-500 hover:bg-green-400 cursor-pointer border border-green-500 px-4 py-2 rounded-md"
              onClick={() => {
                setShowRestartModal(false);
              }}
            >
              Okay
            </button>
          </div>
        </Modal>
      ) : null}
      {showImportModal ? (
        <Modal>
          <div className="grid grid-cols-2 mb-3">
            <h1 className="text-xl mb-2">Import Config</h1>
            <div className="text-right">
              <button
                className="me-3"
                onClick={() => {
                  setShowImportModal(false);
                  setShowShareModal(true);
                }}
              >
                <FontAwesomeIcon icon={faShare} title="Export" />
              </button>
              <button
                className="bg-red-300 dark:bg-red-500 hover:bg-red-400 cursor-pointer px-2 py-1 rounded-md"
                onClick={() => {
                  setShowImportModal(false);
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
          <div>
            <textarea
              ref={importTextRef}
              className="dark:bg-mocha-surface0 w-full h-28"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              onClick={() => {
                if (importTextRef == null) {
                  return;
                }
                if (
                  confirm(
                    "This will overwrite your current configuration. Are you sure you want to proceed?",
                  )
                ) {
                  const text = importTextRef.current?.value;
                  if (text) {
                    ImportConfig(text).then(() => {
                      ReloadConfig().then(() => {
                        setShowImportModal(false);
                        location.reload();
                      });
                    });
                  } else {
                    alert("Can't read text!");
                  }
                }
              }}
              className="bg-latte-green text-white dark:bg-mocha-green dark:text-black rounded px-3 py-2"
            >
              <FontAwesomeIcon icon={faSave} /> Import
            </button>
          </div>
        </Modal>
      ) : null}
      {showShareModal ? (
        <Modal>
          <div className="grid grid-cols-2 mb-3">
            <h1 className="text-xl mb-2">Export Config</h1>
            <div className="text-right">
              <button
                className="me-3"
                onClick={() => {
                  if (shareRef == null) {
                    return;
                  }
                  const text = shareRef.current?.innerText;
                  if (text) {
                    navigator.clipboard
                      .writeText(text)
                      .then(() => {
                        alert("Copied to clipboard!");
                      })
                      .catch((error) => {
                        alert(
                          "Error! If this issue persists, please report it on github! " +
                            error,
                        );
                      });
                  }
                }}
              >
                <FontAwesomeIcon icon={faCopy} title="Copy to clipboard" />
              </button>
              <button
                className="me-3"
                onClick={() => {
                  setShowShareModal(false);
                  setShowImportModal(true);
                }}
              >
                <FontAwesomeIcon icon={faDownload} title="Import" />
              </button>
              <button
                className="bg-red-300 dark:bg-red-500 hover:bg-red-400 cursor-pointer px-2 py-1 rounded-md"
                onClick={() => {
                  setShowShareModal(false);
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
          <pre
            ref={shareRef}
            className="select-text border-2 p-2 border-latte-surface0 dark:border-mocha-surface0 rounded"
          >
            {shareConfig.map((c, i) => {
              return (
                <>
                  {c}
                  <br />
                </>
              );
            })}
          </pre>
          <div className="text-center"></div>
        </Modal>
      ) : null}
      {showHelpModal ? (
        <Modal>
          <h1 className="text-lg">MangOverlay</h1>
          <p>Version: {Version}</p>
          <p className="text-sm">github.com/loissascha/mangoverlay</p>
          <div className="text-center">
            <button
              className="mt-2 bg-red-300 dark:bg-red-500 hover:bg-red-400 cursor-pointer border border-red-500 px-4 py-2 rounded-md"
              onClick={() => {
                setShowHelpModal(false);
              }}
            >
              Close Help
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
