import FooterContact from './footer-contact/footer-contact.component';
import FooterGalleryImage from './footer-gallery/footer-gallery-image/footer-gallery-image.component';
import FooterGallery from './footer-gallery/footer-gallery.component';
import FooterListItem from './footer-list-item/footer-list-item.component';
import FooterList from './footer-list/footer-list.component';
import './footer.styles.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='main-part'>
                <FooterList heading={'Grand Hotel'}>
                    <FooterListItem to={'#'} text={'support@grandhotel.com'} />
                    <FooterListItem
                        to={'#'}
                        text={'New York, Main Street 123'}
                    />
                    <FooterListItem to={'#'} text={'Tel: +1 704 555 5555'} />
                </FooterList>

                <FooterList heading={'Explore'}>
                    <FooterListItem to={'#'} text={'Home'} />
                    <FooterListItem to={'#'} text={'About Us'} />
                    <FooterListItem to={'#'} text={'Rooms'} />
                    <FooterListItem to={'#'} text={'Events'} />
                    <FooterListItem to={'#'} text={'Customers'} />
                    <FooterListItem to={'#'} text={'Contact'} />
                </FooterList>

                <FooterContact />

                <FooterGallery>
                    <FooterGalleryImage
                        imgUrl={require('../../assets/img/gallery-img-1.jpeg')}
                    />
                    <FooterGalleryImage
                        imgUrl={require('../../assets/img/gallery-img-2.jpeg')}
                    />
                    <FooterGalleryImage
                        imgUrl={require('../../assets/img/gallery-img-3.jpeg')}
                    />
                    <FooterGalleryImage
                        imgUrl={require('../../assets/img/gallery-img-4.jpeg')}
                    />
                    <FooterGalleryImage
                        imgUrl={require('../../assets/img/gallery-img-5.jpeg')}
                    />
                    <FooterGalleryImage
                        imgUrl={require('../../assets/img/gallery-img-6.jpeg')}
                    />
                </FooterGallery>
            </div>

            <div className='creator-part'>
                <div className='copyright-text'>
                    <p>
                        Copyright &copy; 2022. Grand Hotel. All Rights Reserved
                    </p>
                </div>

                <div className='text-right'>
                    <p>
                        {/* Made With <i className='fas fa-heart'></i> by{' '}
                        <span>Thomas Brown</span> */}
                        Made by <span>Thomas Brown</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
