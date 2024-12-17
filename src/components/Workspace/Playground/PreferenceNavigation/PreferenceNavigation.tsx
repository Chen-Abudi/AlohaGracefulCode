import React, { useEffect, useState } from "react";
import {
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
  AiOutlineSetting,
} from "react-icons/ai";
import { ISettings } from "../Playground";
import SettingsModal from "@/components/Modals/SettingsModal";

type PreferenceNavigationProps = {
  settings: ISettings;
  setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
};

const PreferenceNavigation: React.FC<PreferenceNavigationProps> = ({
  setSettings,
  settings,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    function handleExit(evt: any) {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
        return;
      }
      setIsFullScreen(true);
    }

    if (document.addEventListener) {
      document.addEventListener("fullscreenchange", handleExit);
      document.addEventListener("webkitfullscreenchange", handleExit);
      document.addEventListener("mozfullscreenchange", handleExit);
      document.addEventListener("MSFullscreenChange", handleExit);
    }
  }, [isFullScreen]);

  return (
    <div className="flex items-center justify-between bg-dark-layer-2 w-full h-11">
      <div className="flex items-center text-white">
        <button
          className="flex items-center rounded cursor-pointer focus:outline-none 
        bg-dark-fill-2 text-dark-label-2 hover:bg-dark-fill-3 px-2 py-1.5 font-medium"
        >
          <div className="flex items-center px-1">
            <div className="text-dark-label-2 text-sm dark:text-dark-label-2">
              JavaScript
            </div>
          </div>
        </button>
      </div>

      <div className="flex items-center m-2">
        <button
          className="preferenceBtn group"
          onClick={() =>
            setSettings({ ...settings, settingsModalIsOpen: true })
          }
        >
          <div className="w-4 h-4 text-lg font-bold text-dark-gray-6">
            <AiOutlineSetting />
          </div>
          <div className="preferenceBtn-tooltip">Settings</div>
        </button>

        <button className="preferenceBtn group" onClick={handleFullScreen}>
          <div className="w-4 h-4 text-lg font-bold text-dark-gray-6">
            {!isFullScreen ? (
              <AiOutlineFullscreen />
            ) : (
              <AiOutlineFullscreenExit />
            )}
          </div>
          <div className="preferenceBtn-tooltip">Full Screen</div>
        </button>
      </div>

      {settings.settingsModalIsOpen && (
        <SettingsModal settings={settings} setSettings={setSettings} />
      )}
    </div>
  );
};

export default PreferenceNavigation;
