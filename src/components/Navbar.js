import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/repos">Repos</NavLink>
      <NavLink to="/errortest">TestError</NavLink>
    </nav>
  );
};
