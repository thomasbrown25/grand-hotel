import './brand.styles.css';

const Brand = ({ heading, imgUrl }) => {
    return (
        <div className='brand'>
            <div>
                <img src={imgUrl} alt='logo' width='80' />
            </div>
            <h3 className='hotel-heading'>{heading}</h3>
        </div>
    );
};

export default Brand;
