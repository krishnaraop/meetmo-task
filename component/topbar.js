import { TiFlowChildren } from "react-icons/ti";
import p1 from "../pages/assets/Group.svg";
import p2 from "../pages/assets/Vector.svg";
import { BsBell } from "react-icons/bs";
import Image from "next/image";
import { AiOutlinePlusSquare } from "react-icons/ai";
const TopBar = () => {
  return (
    <div className="flex flex-row p-4">
      <div className="basis-1/4 ">
        <div className="flex flex-row gap-3">
          <TiFlowChildren style={{ transform: "rotate(180deg)" }} size={50} />
          <Image src={p2} alt="Picture of the author" width={50} height={50} />
          <Image src={p1} alt="Picture of" width={50} height={50} />
        </div>
      </div>
      <div className="basis-1/2 text-xl">New project</div>
      <div className="basis-1/4">
        <div className="flex flex-row">
          <button className="basis-1/4 flex flex-row gap-2 rounded p-2 bg-violet-500 hover:bg-blue-600">
            <AiOutlinePlusSquare className="hover:text-red-400" size={20} />{" "}
            <p className="hover:text-red-400"> Publish</p>
          </button>
          <BsBell className="basis-1/4" size={32} />
          <div className="basis-1/2 text-lg">John Romero</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
