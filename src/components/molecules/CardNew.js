import React from "react";
import ButtonCS from "../atoms/ButtonCS";

const CardNew = ({ title, author, source, desc, img, key }) => {
  return (
    <div key={key} className="max-w-[400px] w-full min-h-[550px] h-full flex flex-col justify-between shadow-box_item bg-white_color p-6 rounded-2xl">
      <h2 className="text-2xl font-bold text-text_color mb-2 ">{title}</h2>
      <img src={img} alt="nama" className="w-full h-[190px] bg-text_color rounded-md mb-3 object-cover" />
      <p className="text-[#87B4FF] text-base mb-3">
        {author} | {source}
      </p>
      <p className="text-sm text-text_color">{desc}</p>

      <div className="flex flex-row justify-end gap-3 mt-6">
        <ButtonCS type="buttonNormal" title="News Page" href={""} className={"bg-blue_color text-white_color"} />
        <ButtonCS type="buttonWithIcon" title="Save" />
      </div>
    </div>
  );
};

export default CardNew;
