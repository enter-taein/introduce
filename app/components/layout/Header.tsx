import { Link, NavLink } from 'react-router';

export default function Header(){
    const linkClass = ({isActive}:{isActive:boolean}) => `nav-link ${isActive ? "active" : ""}`;

    return (
        <header className="site-header">
            <div className="header-inner">
                <Link to='/'></Link>
                <nav className="nav">
                    <NavLink to="/welcome" className={linkClass}>welcome</NavLink>
                    <NavLink to="/about" className={linkClass}>about</NavLink>
                    <NavLink to="/projects" className={linkClass}>projects</NavLink>
                    <NavLink to="/contact" className={linkClass}>contact</NavLink>
                </nav>
            </div>
        </header>
    )
}