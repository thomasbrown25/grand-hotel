import AboutUsContent from './about-us-content/about-us-content.component';
import AboutUsImages from './about-us-images/about-us-images.component';

import './about-us.styles.css';

const AboutUs = () => {
    return (
        <section className='about-us'>
            <AboutUsContent />

            <AboutUsImages />
        </section>
    );
};

export default AboutUs;
