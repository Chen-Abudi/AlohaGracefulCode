import React from "react";
import { AiOutlineFullscreen, AiOutlineSetting } from "react-icons/ai";

type PreferenceNavigationProps = {};

const PreferenceNavigation: React.FC<PreferenceNavigationProps> = () => {
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
        <button className="preferenceBtn group">
          <div className="w-4 h-4 text-lg font-bold text-dark-gray-6">
            <AiOutlineSetting />
          </div>
          <div className="preferenceBtn-tooltip">Settings</div>
        </button>

        <button className="preferenceBtn group">
          <div className="w-4 h-4 text-lg font-bold text-dark-gray-6">
            <AiOutlineFullscreen />
          </div>
          <div className="preferenceBtn-tooltip">Full Screen</div>
        </button>
      </div>
    </div>
  );
};

export default PreferenceNavigation;
