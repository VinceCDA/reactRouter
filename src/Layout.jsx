export default function Layout(){
    return(
        <>
        <nav>
        <NavLink to={"/about"}>About</NavLink>
        <Link to={"/contact"}>Contact</Link>
      </nav>
        </>
    )
}