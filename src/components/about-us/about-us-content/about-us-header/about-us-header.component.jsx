import './about-us-header.styles.css';

const AboutUsHeader = ({ heading, subHeading }) => {
    return (
        <>
            <h1 className='about-us-header'>{heading}</h1>
            <div className='underline'>
                <div className='small-underline'></div>
                <div className='big-underline'></div>
            </div>
            <h3 className='sub-header'>{subHeading}</h3>
        </>
    );
};

export default AboutUsHeader;
