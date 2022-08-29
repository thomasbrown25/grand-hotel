import './about-us-btn.styles.css';

const AboutUsBtn = ({ btnText }) => {
    return (
        <button className='about-us-btn btn'>
            {btnText}
            <i className='fas fa-angle-double-right btn-arrow'></i>
        </button>
    );
};

export default AboutUsBtn;
