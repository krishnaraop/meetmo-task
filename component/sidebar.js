import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoCubeOutline } from "react-icons/io5";
import { GrGraphQl, GrLike } from "react-icons/gr";
import { AiTwotoneLike } from "react-icons/ai";
import { BsFolder2Open } from "react-icons/bs";
import { RiUserFill } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";

const SideBar = () => {
  return (
    <div className="m-2">
      <GrGraphQl className="m-2" size={42} />
      <BsFolder2Open size={42} />
      <IoCubeOutline size={42} />
      <IoIosPeople size={42} />
      <MdOutlineOndemandVideo size={42} />
      <AiTwotoneLike size={42} />
      <VscSettings style={{ transform: "rotate(90deg)" }} size={42} />
      <RiUserFill size={42} />
    </div>
  );
};

export default SideBar;
