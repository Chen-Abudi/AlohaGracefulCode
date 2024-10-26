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

// relative px-3 py-1.5 font-medium rounded items-center transition-all
//         focus:outline-none inline-flex ml-auto p-1 mr-2 hover:bg-dark-fill-3 group

// absolute top-7 right-[-18px] w-auto min-w-max p-2 m-2 text-sm rounded-md shadow-md z-10 text-dark-layer-2 bg-gray-200
//           origin-center scale-0 transition-all duration-100 ease-linear group-hover:scale-100
