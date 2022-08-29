import './customers-card.styles.css';

const CustomersCard = ({ imgUrl, customerName, paragraph1, paragraph2 }) => {
    return (
        <div className='customer-card'>
            <div className='customer-image-wrapper'>
                <img src={imgUrl} alt='customer' className='customer-image' />
            </div>
            <div className='customer-info'>
                <h3 className='customer-fullname'>{customerName}</h3>
                <p className='customer-paragraph-1'>{paragraph1}</p>
                <p className='customer-paragraph-2'>{paragraph2}</p>
            </div>
        </div>
    );
};

export default CustomersCard;
