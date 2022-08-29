import SidebarMenuIcon from './sidebar-menu-icon/sidebar-menu-icon.component';
import SidebarSocialIconList from './sidebar-social-icon-list/sidebar-social-icon-list.component';
import SidebarFooter from './sidebar-footer/sidebar-footer.component';

import './sidebar.styles.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarMenuIcon />
            <SidebarSocialIconList />
            <SidebarFooter />
        </div>
    );
};

export default Sidebar;
