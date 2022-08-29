import './footer-gallery-image.styles.css';

const FooterGalleryImage = ({ imgUrl }) => {
    return (
        <div className='image-wrapper'>
            <img src={imgUrl} alt='gallery' className='footer-image' />
        </div>
    );
};

export default FooterGalleryImage;
