import React from "react";
import CardNew from "../components/molecules/CardNew";

const IndonesiaNews = () => {
  const data = [
    {
      id: 1,
      title: "Harga BBM Naik",
      author: "Rezal",
      source: "Hacktiv",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur eos, rem odio modi, commodi illo adipisci veniam architecto sapiente ea magnam maiores exercitationem officiis consequatur similique nisi sequi at?",
    },
    {
      id: 2,
      title: "Harga BBM Naik banget sampe belum keluar coy",
      author: "Rezal",
      source: "Hacktiv",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur eos, rem odio modi, commodi illo adipisci veniam architecto sapiente ea magnam maiores exercitationem officiis consequatur similique nisi sequi at?",
    },
    {
      id: 3,
      title: "Harga BBM Naik",
      author: "Rezal",
      source: "Hacktiv",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur eos, rem odio modi, commodi illo adipisci veniam architecto sapiente ea magnam maiores exercitationem officiis consequatur similique nisi sequi at?",
    },
  ];
  return (
    <div className='bg-bg_color px-[70px] max-[1000px]:px-[20px] h-auto justify-center items-center flex'>
      <div className="max-w-[1800px] w-full h-full mx-auto flex justify-center relative items-center flex-col mt-8 mb-8">      
        <h1 className="text-text_color text-5xl font-extrabold w-full text-center border-b-4 border-[#C8CDFF] border-opacity-50 pb-5 ">INDONESIA NEWS</h1>
        <div className="flex flex-row flex-wrap justify-center items-start gap-5 w-full mt-6">
          {data.map((item) => (
            <CardNew
              title={item.title}
              img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBM0CZGCN-Bl1O3IdDxuKWjr_CxhZLBQ5pwA&usqp=CAU"}
              author={item.author}
              source={item.source}
              desc={item.desc}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndonesiaNews;
