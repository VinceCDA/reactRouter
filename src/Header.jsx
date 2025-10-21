import { Link, NavLink, Outlet } from "react-router";

export default function Header() {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <NavLink to={"/about"}>About</NavLink>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Outlet/>
    </>
  );
}
