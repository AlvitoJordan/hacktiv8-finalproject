import React from "react";
import { ICSave } from "../../assets";

const ButtonCS = ({ type, title, href, className, onClick }) => {
  if (type === "buttonNormal")
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-lg  font-semibold ${className}`}>
        <span>{title}</span>
      </a>
    );
  if (type === "searchButton")
      return (
        <button onClick={onClick} className={`px-4 py-2 rounded-lg  font-semibold ${className}`}><p>{title}</p></button>
        );
  if (type === "buttonWithIcon")
    return (
      <button className="px-4 py-2 rounded-lg text-white_color bg-green_color font-semibold flex flex-row gap-3 justify-center items-center">
        <ICSave />
        <p>Save</p>
      </button>
    );
};

export default ButtonCS;