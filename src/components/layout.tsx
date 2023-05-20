import { ReactNode } from "react";
import Sidebar from "./sidebar/sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">{children}</div>
    </>
  );
};

export default Layout;
