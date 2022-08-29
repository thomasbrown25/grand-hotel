import NavLink from './nav-link/nav-link.component';

import './navigation-list.styles.css';

const NavigationList = () => {
    return (
        <ul className='navigation-list'>
            <NavLink to={'#'} heading={'home'} />
            <NavLink to={'#'} heading={'about us'} />
            <NavLink to={'#'} heading={'rooms'} />
            <NavLink to={'#'} heading={'events'} />
            <NavLink to={'#'} heading={'customers'} />
            <NavLink to={'#'} heading={'contact'} />
        </ul>
    );
};

export default NavigationList;
