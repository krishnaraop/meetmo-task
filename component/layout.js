import Topbar from "./topbar";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className="main">
      <div className="topNavBar">
        <Topbar />
      </div>

      <div className="siderbarMain p-2">
        <Sidebar />
      </div>
      <div className="childrenBar">
        <div> {children}</div>
      </div>
    </div>
  );
}
