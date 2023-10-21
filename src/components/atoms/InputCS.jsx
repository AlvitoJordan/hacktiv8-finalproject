import React from 'react'

const InputCS = ({ type, placeholder}) => {
    if (type === "search")
      return (
        <input type={type} className="border-2 border-gray_color max-h-10 h-full py-2 w-[60%] max-[1000px]:w-[60%] rounded-lg active:border-b-text_color pl-3" placeholder={placeholder} />
      );
   
  };

export default InputCS
