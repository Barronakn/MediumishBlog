import { NavLink } from "react-router-dom";
import error_404 from "../assets/404.avif";
const Error = () => {
  return (
    <div className="error text-center">
      <img
        className="w-96 h-96 mx-auto my-0"
        src={error_404}
        alt="error_404-image"
      />
      <h1>La page que vous essayer d'accéder n'est pas disponible</h1>
      <p>
        Revenir à{" "}
        <NavLink className="text-blue-600 underline" to="/">
          {" "}
          l'acceuil
        </NavLink>
      </p>
    </div>
  );
};

export default Error;
