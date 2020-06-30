import React from "react";
import logo from "../img/lfsteam.png";

const Loading = () => (
  <div className={`loading-container mx-auto w-1/2 h-screen flex items-center`}>
    <div className="text-center mx-auto pulse">
      <img src={logo} alt="loading-logo" className="h-24 sm:h-32 sm:w-80"/>
    </div>
  </div>
);

export default Loading;
