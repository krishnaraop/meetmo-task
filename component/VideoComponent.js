import { FcRefresh } from "react-icons/fc";
import { GiSpeaker } from "react-icons/gi";
import { HiPlayPause } from "react-icons/hi";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoComponent = () => {
  return (
    <div className="flex flex-col">
      <Image
        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Picture of the author"
        width={559}
        height={312}
        className="sideImageBox"
      />
      <div className="flex flex-row">
        <div>
          <FcRefresh size={25} />{" "}
        </div>
        <div>1x</div>
        <div>
          <GiSpeaker size={25} />{" "}
        </div>
        <div>
          {" "}
          <FontAwesomeIcon icon={faPlayPause} color="white" rotation={180} />
        </div>
        <div>
          {" "}
          <FontAwesomeIcon icon={faPlay} color="white" rotation={180} />
        </div>
        <div>
          {" "}
          <FontAwesomeIcon icon={faPlay} color="white" rotation={180} />
        </div>
        <div classNa>00:00:27:09 </div>
        <div>
          <FontAwesomeIcon icon={faPlay} color="white" />
        </div>
        <div>
          <FontAwesomeIcon icon={faPlay} color="white" />
        </div>

        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default VideoComponent;
