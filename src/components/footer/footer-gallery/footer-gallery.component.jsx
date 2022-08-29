import './footer-gallery.styles.css';

const FooterGallery = ({ children }) => {
    return (
        <div className='gallery'>
            <h3 className='footer-heading'>Gallery</h3>
            <div className='gallery-images'>{children}</div>
        </div>
    );
};

export default FooterGallery;
