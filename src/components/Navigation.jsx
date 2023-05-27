import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import search from "../assets/search.svg";

const Navigation = () => {
  return (
    <div className=" navigation bg-white px-32 py-4 container flex justify-between items-center fixed shadow-md z-50">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo-image" />
        </NavLink>
      </div>
      <nav className="text-gray-400 text-base">
        <ul className="flex gap-5">
          <div className="nav-link flex gap-5">
            <li>
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "text-black" : "")}
              >
                Stories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/post"
                className={(nav) => (nav.isActive ? "text-black" : "")}
              >
                Post
              </NavLink>
            </li>
          </div>
          <li className="search p-2 rounded-2xl border-gray flex h-8 -m-1">
            <input
              className="text-sm h-6 -mt-1 ml-2"
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
            <button className="w-4 h-4">
              <img src={search} alt="search-icon" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
