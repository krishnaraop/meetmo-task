import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import FlowComponent from "../component/FlowComponent";
import FormComponent from "../component/FormComponent";

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

        <div className="basis-1/3 side flex flex-col ">
          <div className=" basis-1/3">
            <div className="sideImageBox"></div>
          </div>

          <div className="basis-2/3 p-2">
            <FormComponent />
          </div>
        </div>
      </div>
    </>
  );
}
