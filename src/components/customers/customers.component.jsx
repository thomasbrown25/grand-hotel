import CommonHeader from '../common/common-header.component';
import CustomersCard from './customers-card/customers-card.component';

import './customers.styles.css';

const Customers = () => {
    return (
        <section className='customers'>
            <CommonHeader heading={'Our Customers'} />

            <p className='customers-paragraph'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi numquam eveniet eaque quidem libero delectus veniam,
                facilis optio reprehenderit a?
            </p>

            <div className='customers-card-wrapper'>
                <CustomersCard
                    imgUrl={require('../../assets/img/customer-1.jpeg')}
                    customerName={'Helen'}
                    paragraph1={'Happy Customer'}
                    paragraph2={
                        '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis totam quod iusto deleniti officiis nam natus eaque delectus debitis."'
                    }
                />
                <CustomersCard
                    imgUrl={require('../../assets/img/customer-2.jpeg')}
                    customerName={'Monica'}
                    paragraph1={'Happy Customer'}
                    paragraph2={
                        '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis totam quod iusto deleniti officiis nam natus eaque delectus debitis."'
                    }
                />
            </div>
        </section>
    );
};

export default Customers;
