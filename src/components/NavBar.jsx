const NavBar = ({ activePage, setActivePage }) => {
    const links = [
        { id: "dashboard", label: "Dashboard", icon: "/house.png" },
        { id: "saved", label: "Saved Recipes", icon: "/heart.png" },
        { id: "about", label: "About", icon: "/information.png" },
    ]

    return (
        <nav className="navbar">
            {links.map((link) => (
                <button
                    key={link.id}
                    className={`nav-link ${activePage === link.id ? "active" : ""}`}
                    onClick={() => setActivePage(link.id)}
                >
                    <img src={link.icon} alt="" className="nav-icon" />
                    {link.label}
                </button>
            ))}
        </nav>
    )
}

export default NavBar
