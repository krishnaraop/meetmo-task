import TopBar from "./topbar";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className="main">
      <div className="topNavBar">
        <TopBar />
      </div>
      {/* to display the sidebar menu icons */}
      <div className="sideBarMain">
        <Sidebar />
      </div>
      {/* to display the index.js file content ot other pages */}
      <div> {children}</div>
    </div>
  );
}
