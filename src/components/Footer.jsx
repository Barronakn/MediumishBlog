import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer px-32">
      <hr />
      <footer className="text-gray-600 text-sm py-4 flex justify-between">
        <p>Copyright © 2023</p>
        <div className="link flex gap-2">
          <p>Mediumish Theme by</p>
          <NavLink
            className="text-green-500 hover:underline active:text-blue-600"
            to="#"
          >
            WowThemes.net
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
