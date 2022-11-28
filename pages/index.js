import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import FlowComponent from "../component/FlowComponent";
import FormComponent from "../component/FormComponent";
import { FcRefresh } from "react-icons/fc";
import { GiSpeaker } from "react-icons/gi";
import { HiPlayPause } from "react-icons/hi";
// import { FcRefresh } from "react-icons/fc";
// import { FcRefresh } from "react-icons/fc";
// import { FcRefresh } from "react-icons/fc";
// import { FcRefresh } from "react-icons/fc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayPause, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      {" "}
      <Head>
        <title>Meetmo Task</title>
        <meta name="description" content="Developed by KrishnaRao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row childrenInternalBar">
        <div className="basis-2/3">
          <FlowComponent />
        </div>

        <div className="basis-1/3">
          <div className="flex flex-col">
            <div className="basis-1/3">
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
                    <FontAwesomeIcon
                      icon={faPlayPause}
                      color="white"
                      rotation={180}
                    />
                  </div>
                  <div>
                    {" "}
                    <FontAwesomeIcon
                      icon={faPlay}
                      color="white"
                      rotation={180}
                    />
                  </div>
                  <div>00:00:27:09 </div>
                  <div>
                    <FontAwesomeIcon icon={faPlay} color="white" />
                  </div>
                  <div>{/* <HiPlayPause />{" "} */}</div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="basis-2/3 p-2"></div>
            <FormComponent />
          </div>
        </div>
      </div>
    </>
  );
}
