import './navigation-header.styles.css';
import NavigationSearch from './navigation-search/navigation-search.component';

const NavigationHeader = () => {
    return (
        <div className='navigation-header'>
            <h1 className='navigation-heading'>Grand Hotel</h1>
            <NavigationSearch />
        </div>
    );
};

export default NavigationHeader;
