import Brand from './brand/brand.component';
import Banner from './banner/banner.component';

import './header.styles.css';

const Header = () => {
    return (
        <header className='header'>
            <Brand
                heading={'Grand Hotel'}
                imgUrl={require('../../assets/img/crown.png')}
            />

            <Banner
                heading={'Welcome to Grand Hotel'}
                paragraph={'Make your life luxurious'}
                btnText={'Check Out'}
            />
        </header>
    );
};

export default Header;
