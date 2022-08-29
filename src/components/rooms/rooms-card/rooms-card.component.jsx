import './rooms-card.styles.css';

const RoomsCard = ({ imgUrl, heading, paragraph, price }) => {
    return (
        <div className='room-card'>
            <img src={imgUrl} alt='room-img' className='room-img' />
            <div className='room-card-content'>
                <h4 className='room-card-heading'>{heading}</h4>
                <p className='room-card-paragraph'>{paragraph}</p>
                <p className='room-price'>{price}</p>
                <button className='room-card-btn btn'>
                    Book Now{' '}
                    <i className='fas fa-angle-double-right btn-arrow'></i>
                </button>
            </div>
        </div>
    );
};

export default RoomsCard;
