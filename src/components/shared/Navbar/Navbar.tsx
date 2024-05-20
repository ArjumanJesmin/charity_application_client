import { HomeTopBar } from "./HomeTopBar";

const Navbar = () => {
  return (
    <div className="navbar justify-center bg-[#6e6950] font-trebuchet">
      <div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          >
            <HomeTopBar />
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white font-medium text-lg flex space-x-4">
            <HomeTopBar />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
