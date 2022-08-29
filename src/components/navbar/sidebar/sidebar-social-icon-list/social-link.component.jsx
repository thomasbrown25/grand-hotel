import { Link } from 'react-router-dom';
const SocialLink = ({ to, fabIcon }) => (
    <li>
        <Link to={to} className='social-link'>
            <i className={`fab ${fabIcon}`}></i>
        </Link>
    </li>
);

export default SocialLink;
