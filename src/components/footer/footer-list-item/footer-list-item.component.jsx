import { Link } from 'react-router-dom';

import './footer-list-item.styles.css';

const FooterListItem = ({ to, text }) => {
    return (
        <li className='footer-list-item'>
            <Link to={to} className='footer-list-link'>
                {text}
            </Link>
        </li>
    );
};

export default FooterListItem;
