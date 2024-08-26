import { Link } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>

      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Our Shop</Link>
      </li>
      <li>
        <Link to="/order/salad">
          <button className="btn">
            <div className="badge badge-secondary">+</div>
          </button>
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>

          <div className="logo-container flex flex-col">
            <a className="uppercase">Bistro Boss</a>
            <a className="uppercase">Restaurant</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-center items-center menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>

        <div className="navbar-end">
          {" "}
          {/* className="lg:navbar-end lg:gap-4 gap-2 " */}
          <div
            className="dropdown dropdown-end tooltip"
            data-tip=""
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-10 rounded-full ">
                <img
                  className="border rounded-full h-[45px]"
                  src=""
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-300 rounded-box w-52"
            ></ul>
            <div></div>
          </div>
          <button className="btn bg-[#EEFF25] text-[15px]">Log Out</button>
          <Link to="/login">
            <a className="btn bg-[#EEFF25] text-[15px]">Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
