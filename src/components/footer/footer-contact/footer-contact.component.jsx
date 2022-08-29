import './footer-contact.styles.css';

const FooterContact = () => {
    return (
        <div className='contact'>
            <h3 className='footer-heading'>Contact</h3>
            <p>Sign Up for News</p>
            <form action='' className='footer-form'>
                <input
                    type='text'
                    className='footer-input'
                    placeholder='Your email...'
                />
                <button className='footer-btn'>Sign Up</button>
            </form>
        </div>
    );
};

export default FooterContact;
