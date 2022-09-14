import { NavLink } from 'react-router-dom';
import btlogo from './BrainTrainLogos-05.png';

const Navbar = () => {
    return (
        <nav className="navbar justify-content-center">
            <NavLink to="/"><img src={btlogo} alt="logo" width="70px" /></NavLink>
        </nav>
    );
}

export default Navbar;