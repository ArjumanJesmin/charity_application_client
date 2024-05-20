import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import logo from "@/assets/logo.jpg";
import Image from "next/image";

const DashboardDrawer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-outline btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-full bg-[#F6FAB9] text-[#87A922]">
          {/* Sidebar content here */}
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={50}
            className="rounded-xl items-center mx-auto shadow my-4"
          />
          <Sidebar />
        </ul>
      </div>
    </div>
  );
};

export default DashboardDrawer;
