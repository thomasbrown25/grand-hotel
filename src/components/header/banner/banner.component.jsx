import './banner.styles.css';

const Banner = ({ heading, paragraph, btnText }) => {
    return (
        <div className='banner'>
            <h1 className='banner-heading'>{heading}</h1>
            <p className='banner-paragraph'>{paragraph}</p>
            <button className='banner-btn'>{btnText}</button>
        </div>
    );
};

export default Banner;
