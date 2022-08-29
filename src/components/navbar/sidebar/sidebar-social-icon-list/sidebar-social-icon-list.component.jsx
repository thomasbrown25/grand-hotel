import SocialLink from './social-link.component';

import './sidebar-social-icon-list.styles.css';

const SidebarSocialIconList = () => (
    <ul className='social-icons-list'>
        <SocialLink to={'#'} fabIcon={'fa-facebook-f'} />
        <SocialLink to={'#'} fabIcon={'fa-twitter'} />
        <SocialLink to={'#'} fabIcon={'fa-google-plus-g'} />
        <SocialLink to={'#'} fabIcon={'fa-instagram'} />
    </ul>
);

export default SidebarSocialIconList;
