import React from "react";

const Loading = () => (
  <div
    className={`loading-container mx-auto w-1/2 h-screen flex items-center`}
  >
    <div className="font-mono flex-1 text-blue-400 text-6xl font-extrabold text-center animate__animated animate__pulse animate__infinite">
      LFS
    </div>
  </div>
);

export default Loading;
