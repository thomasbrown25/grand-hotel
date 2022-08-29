import Navigation from './navigation/navigation.component';
import Sidebar from './sidebar/sidebar.component';

import './navbar.styles.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* input to expand navigation */}
            <input type='checkbox' className='checkbox' id='click' hidden />
            {/* sidebar */}
            <Sidebar />
            {/* end of sidebar */}
            {/* navigation */}
            <Navigation />
            {/* end of navigation */}
        </div>
    );
};

export default Navbar;
