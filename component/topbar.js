import { TiFlowChildren } from "react-icons/ti";
import p1 from "../pages/assets/Group.svg";
import p2 from "../pages/assets/Vector.svg";
import { BsBell } from "react-icons/bs";
import Image from "next/image";

const TopBar = () => {
  return (
    <div>
      <div className="flex flex-row w-full">
        <div className="basis-1/4">
          <div className="flex flex-row">
            <TiFlowChildren style={{ transform: "rotate(180deg)" }} size={50} />
            <Image
              src={p2}
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <Image src={p1} alt="Picture of" width={50} height={50} />
          </div>
        </div>
        <div className="basis-1/2">New project</div>
        <div className="basis-1/4">
          <div className="flex flex-row">
            <button className="bg-violet-500 hover:bg-violet-600">
              Publish
            </button>
            <BsBell size={32} />
            <div>John Romero</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
