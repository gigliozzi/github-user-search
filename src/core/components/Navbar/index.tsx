import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => (
    <nav className="main-navbar">
        <div className="logo-container">
            <Link to="/" className="nav-logo-text">
                    <h4 >
                        SoftCode
                    </h4>
            </Link>
        </div>
    </nav>
)

export default Navbar;
