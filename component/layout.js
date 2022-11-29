import TopBar from "./topbar";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div>
      {/* <div className="topNavBar">
        <TopBar />
      </div>
     
      <div className="sideBarMain">
        <Sidebar />
      </div>
      
      <div> {children}</div> */}

      <div className="flex flex-row rounded">
        <div className="w-24">
          <Sidebar />
        </div>
        <div className="w-full flex flex-col">
          <div className="h-24">
            <TopBar />
          </div>
          <div className="h-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
