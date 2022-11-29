import { TiFlowChildren } from "react-icons/ti";
import p1 from "../pages/assets/Group.svg";
import p2 from "../pages/assets/Vector.svg";
import { BsBell } from "react-icons/bs";
import Image from "next/image";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const TopBar = () => {
  return (
    <div className="flex flex-row p-4">
      <div className="basis-1/4 ">
        <div className="flex flex-row gap-3">
          <TiFlowChildren
            className="bg-[#272C34] m-2"
            style={{ transform: "rotate(180deg)" }}
            size={50}
          />
          <Image src={p2} alt="Picture of the author" width={50} height={50} />
          <Image src={p1} alt="Picture of" width={50} height={50} />
        </div>
      </div>
      <div className="basis-1/2 text-xl flex flex-row justify-center gap-1 ">
        <h4>New Project</h4>
        <p>
          <RiArrowDropDownLine />
        </p>{" "}
      </div>
      <div className="basis-1/4">
        <div className="flex flex-row">
          <button className="basis-1/4 flex flex-row gap-2 rounded p-2 bg-violet-500 hover:bg-blue-600 hover:text-red-400">
            <AiOutlinePlusSquare size={20} />
            <p> Publish</p>
          </button>
          <BsBell className="basis-1/4" size={32} />
          <div className="basis-1/2 text-lg flex flex-row justify-center gap-1">
            <h4> John Romero</h4>

            <RiArrowDropDownLine size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
