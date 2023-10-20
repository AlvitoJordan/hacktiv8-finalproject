import React from "react";

const Skeleton = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-[400px] h-[550px] flex flex-col shadow-box_item bg-gray-300 p-6 rounded-2xl animate-pulse">
        <h2 className="h-20 bg-gray-200 mb-4"></h2>
        <div className="w-full h-[190px] bg-gray-200 rounded-md mb-4" />
        <p className="h-2 bg-gray-200 mb-6"></p>
        <p className="bg-gray-200 h-20"></p>

        <div className="flex space-x-5 justify-end mt-6">
          <div className="h-10 bg-gray-200 w-[120px]"></div>
          <div className="h-10 bg-gray-200 w-[120px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
