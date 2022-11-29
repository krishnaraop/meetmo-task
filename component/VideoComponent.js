import { FcRefresh } from "react-icons/fc";
import { GiSpeaker } from "react-icons/gi";
import { HiPlayPause } from "react-icons/hi";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";

const VideoComponent = () => {
  const opts = {
    height: "430",
    width: "740",
    playerVars: {
      autoplay: 1,
    },
  };
  const onPause = (e) => {
    console.log("paused", e);
  };
  return (
    <div className="flex flex-col">
      {/* <Image
        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Picture of the author"
        width={600}
        height={312}
        className="rounded m-auto w-fit h-fit"
      /> */}
      <YouTube
        videoId="u5D0jIbGUFc"
        opts={opts}
        onReady={onPause}
        className="rounded m-auto"
      />
      <div className="flex flex-row gap-2 align-middle justify-center m-1 ">
        <div>
          <FcRefresh size={25} style={{ color: "white" }} />{" "}
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
