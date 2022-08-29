import NavigationFooter from './navigation-footer/navigation-footer.component';
import NavigationHeader from './navigation-header/navigation-header.component';
import NavigationList from './navigation-list/navigation-list.component';

import './navigation.styles.css';

const Navigation = () => {
    return (
        <nav className='navigation'>
            {/* navigation header */}
            <NavigationHeader />
            {/* end of navigation header */}
            {/* navigation list */}
            <NavigationList />
            {/* end of navigation list */}
            {/* navigation footer */}
            <NavigationFooter />
            {/* end of navigation footer */}
        </nav>
    );
};

export default Navigation;
