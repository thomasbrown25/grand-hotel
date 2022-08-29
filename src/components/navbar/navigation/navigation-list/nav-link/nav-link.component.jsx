import { Link } from 'react-router-dom';

import './nav-link.styles.css';

const NavLink = ({ to, heading }) => (
    <li className='navigation-item'>
        <Link to={to} className='navigation-link'>
            {heading}
        </Link>
    </li>
);

export default NavLink;
