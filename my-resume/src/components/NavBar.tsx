import { Outlet, Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <nav>
                <Link to="/home">Home</Link>
                | <Link to="/about-me">About Me</Link>
                | <Link to="/projects">Projekte</Link>
            </nav><Outlet />
        </>
    )
}
