import { Link, useLocation } from "react-router-dom";
import React from "react";
import ButtonCS from "../atoms/ButtonCS";
import InputCS from "../atoms/InputCS";
import { ICCloseBar, ICOpenBar } from "../../assets";

const Navbar = () => {
  const [active, setActive] = React.useState(false);

  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="bg-white_color px-[70px] max-[1000px]:px-[20px] shadow-box_item h-[90px] max-[1000px]:h-16 justify-center items-center flex ">
      <div class="max-w-[1800px] w-full bg-white_color h-full mx-auto  flex justify-between relative items-center">
        <form action="" className="w-[50%] max-[1000px]:w-[90%] my-3 max-h-10">
          {/* <input type="text" className="border-2 border-gray_color  h-full py-2 w-[60%] max-[1000px]:w-[60%] rounded-lg active:border-b-text_color pl-3" placeholder="Search..." /> */}
          <InputCS type="search" placeholder="Search..." />
          <ButtonCS type="buttonNormal" title="Search" href={""} className={"bg-blue_color text-white_color h-10 px-3 ml-4 max-[1000px]:ml-3 rounded-lg"} />
        </form>
        <div class="hidden  max-[1000px]:contents w-[20px] h-[20px]" onClick={() => setActive(!active)}>
          {active ? <ICCloseBar /> : <ICOpenBar />}
        </div>
        <ul
          className={`${
            active
              ? "flex z-10 gap-20 max-[1300px]:gap-8 max-[1000px]:gap-2 justify-end h-auto my-4 text-text_color  w-[50%] max-[1000px]:absolute max-[1000px]:top-[60px] max-[1000px]:w-[200px]  max-[1000px]:flex-col max-[1000px]:right-1 transition-all max-[1000px]:bg-white_color max-[1000px]:shadow-box_item max-[1000px]:rounded-xl max-[1000px]:opacity-100 max-[1000px]:text-start max-[1000px]:py-2"
              : "flex z-10 gap-20 max-[1300px]:gap-8 max-[1000px]:gap-2 justify-end h-auto my-4 text-text_color  w-[50%] max-[1000px]:absolute max-[1000px]:top-[-350px] max-[1000px]:w-[200px]  max-[1000px]:flex-col max-[1000px]:right-1 transition-all max-[1000px]:bg-white_color max-[1000px]:shadow-box_item max-[1000px]:rounded-xl max-[1000px]:opacity-0 max-[1000px]:py-2"
          } `}
        >
          <li className="h-full flex justify-center items-center borderr ">
            <Link to="/" className={pathname === "/" ? "borderr_active " : "w-full max-[1000px]:px-3"}>
            
              Indonesia
            </Link>
          </li>
          <li className="h-full flex justify-center items-center borderr ">
            {" "}
            <Link to="programming" className={pathname === "/programming" ? "borderr_active" : "w-full max-[1000px]:px-3 "}>
                Programming
            </Link>
          </li>
          <li className="h-full flex justify-center items-center borderr ">
            {" "}
            <Link to="covid" className={pathname === "/covid" ? "borderr_active" : "w-full max-[1000px]:px-3"}>
              COVID-19
            </Link>
          </li>
          <li className="h-full flex justify-center items-center borderr ">
            {" "}
            <Link to="saved" className={pathname === "/saved" ? "borderr_active" : "w-full max-[1000px]:px-3"}>
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
