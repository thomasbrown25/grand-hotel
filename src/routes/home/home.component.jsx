import AboutUs from '../../components/about-us/about-us.component';
import Customers from '../../components/customers/customers.component';
import Rooms from '../../components/rooms/rooms.component';
import Layout from '../layout/layout.component';

const Home = () => {
    return (
        <Layout>
            <AboutUs />
            <Rooms />
            <Customers />
        </Layout>
    );
};

export default Home;
