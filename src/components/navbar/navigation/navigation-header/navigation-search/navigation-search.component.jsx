import './navigation-search.styles.css';

const NavigationSearch = () => {
    return (
        <form action='' className='navigation-search'>
            <input
                type='text'
                className='navigation-search-input'
                placeholder='Search...'
            />
            <button className='navigation-search-btn'>
                <i className='fas fa-search'></i>
            </button>
        </form>
    );
};

export default NavigationSearch;
