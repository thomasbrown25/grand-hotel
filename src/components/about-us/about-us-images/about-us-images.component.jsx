import './about-us-images.styles.css';

const AboutUsImages = ({ btnText }) => {
    return (
        <div className='about-us-images'>
            <img
                src={require('../../../assets/img/about-us-img-1.jpeg')}
                className='image image-1'
                alt='about us img1'
            />
            <img
                src={require('../../../assets/img/about-us-img-2.jpeg')}
                className='image image-2'
                alt='about us img2'
            />
            <img
                src={require('../../../assets/img/about-us-img-3.jpeg')}
                className='image image-3'
                alt='about us img3'
            />
            <img
                src={require('../../../assets/img/about-us-img-4.jpeg')}
                className='image image-4'
                alt='about us img4'
            />
        </div>
    );
};

export default AboutUsImages;
