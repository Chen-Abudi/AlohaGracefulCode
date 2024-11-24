import React from "react";

const RectangleSkeleton: React.FC = () => {
  return (
    <div className="space-y-2.5 animate-pulse">
      <div className="w-full flex items-center space-x-2">
        <div className="w-12 h-6 rounded-full bg-dark-fill-3"></div>
      </div>
    </div>
  );
};

export default RectangleSkeleton;
