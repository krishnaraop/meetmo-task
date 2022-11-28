import { TiFlowChildren } from "react-icons/ti";
import p1 from "../pages/assets/Group.svg";
import p2 from "../pages/assets/Vector.svg";

import Image from "next/image";

const Topbar = () => {
  return (
    <div className="topNavBar">
      <div className="flex flex-row gap-2">
        <TiFlowChildren style={{ transform: "rotate(180deg)" }} size={50} />
        <Image src={p2} alt="Picture of the author" width={50} height={50} />
        <Image src={p1} alt="Picture of" width={50} height={50} />
      </div>
    </div>
  );
};

export default Topbar;
