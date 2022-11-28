import Head from "next/head";
import FlowComponent from "../component/FlowComponent";
import FormComponent from "../component/FormComponent";
import VideoComponent from "../component/VideoComponent";

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
              <VideoComponent />
            </div>
            <div className="basis-2/3 p-2"></div>
            <FormComponent />
          </div>
        </div>
      </div>
    </>
  );
}
