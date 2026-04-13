import { NavLink } from 'react-router-dom'

const NavBar = ({ onNavigate }) => {
    const links = [
        { path: "/", label: "Dashboard", icon: "/house.png" },
        { path: "/saved", label: "Saved Recipes", icon: "/heart.png" },
        { path: "/about", label: "About", icon: "/information.png" },
    ]

    return (
        <nav className="navbar">
            {links.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    end
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                    onClick={() => onNavigate(link.path)}
                >
                    <img src={link.icon} alt="" className="nav-icon" />
                    {link.label}
                </NavLink>
            ))}
        </nav>
    )
}

export default NavBar
