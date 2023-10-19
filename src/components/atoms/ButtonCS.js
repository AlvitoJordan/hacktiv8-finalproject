import React from "react";
import { ICSave } from "../../assets";

const ButtonCS = ({ type, title, href, className }) => {
  if (type === "buttonNormal")
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-lg  font-semibold ${className}`}>
        <p>{title}</p>
      </a>
    );
  if (type === "buttonWithIcon")
    return (
      <button className="px-4 py-2 rounded-lg text-white_color bg-green_color font-semibold flex flex-row gap-3 justify-center items-center">
        <img src={ICSave} alt="" />
        <p>Save</p>
      </button>
    );
};

export default ButtonCS;
