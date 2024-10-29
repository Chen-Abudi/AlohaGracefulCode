import React from "react";
import { BsChevronUp } from "react-icons/bs";

type EditorFooterProps = {};

const EditorFooter: React.FC<EditorFooterProps> = () => {
  return (
    <div className="absolute w-full flex bottom-0 bg-dark-layer-1 z-10">
      <div className="flex justify-between w-full mx-5 my-[10px]">
        <div className="flex items-center flex-nowrap flex-1 mr-2 space-x-4">
          <button
            className="items-center inline-flex px-3 py-1.5 font-medium text-sm transition-all
          bg-dark-fill-3 hover:bg-dark-fill-2 text-dark-label-2 rounded-lg pr-2 pl-3"
          >
            Console
            <div className="flex items-center ml-1 transform transition">
              <BsChevronUp className="mx-1 fill-dark-gray-6" />
            </div>
          </button>
        </div>
        <div className="flex items-center space-x-4 ml-auto">
          <button
            className="items-center font-medium text-sm whitespace-nowrap px-3 py-1.5 transition-all
          focus:outline-none bg-dark-fill-3 inline-flex hover:bg-dark-fill-2 rounded-lg text-dark-label-2"
          >
            Run
          </button>
          <button className="items-center font-medium px-3 py-1.5 transition-all focus:outline-none text-sm text-white bg-dark-green-s inline-flex hover:bg-green-600 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorFooter;
