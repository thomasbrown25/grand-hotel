import AboutUsBtn from './about-us-btn/about-us-btn.component';
import AboutUsHeader from './about-us-header/about-us-header.component';
import AboutUsParagraph from './about-us-paragraph/about-us-paragraph.component';

import './about-us-content.styles.css';

const AboutUsContent = () => {
    return (
        <div className='about-us-content'>
            <AboutUsHeader heading={'About Us'} subHeading={'Grand Hotel'} />
            <AboutUsParagraph
                paragraph={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id harum culpa fugit, ex libero est consectetur itaque maxime dicta tempora natus molestias? Ab, praesentium! Facere doloribus voluptate non quam enim.'
                }
            />
            <AboutUsBtn btnText={'Read More'} />
        </div>
    );
};

export default AboutUsContent;
