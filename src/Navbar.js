import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar justify-content-center">
            <NavLink to="/">BrainTrain</NavLink>
        </nav>
    );
}

export default Navbar;