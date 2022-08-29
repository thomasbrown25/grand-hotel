import './footer-list.styles.css';

const FooterList = ({ children, heading }) => {
    return (
        <div className='footer-list-wrapper'>
            <h3 className='footer-heading'>{heading}</h3>
            <ul className='footer-list'>{children}</ul>
        </div>
    );
};

export default FooterList;
