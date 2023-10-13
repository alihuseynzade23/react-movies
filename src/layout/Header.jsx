function Header() {
    return (
        <nav className="green lighten-3">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    Logo
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="collapsible.html">Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
