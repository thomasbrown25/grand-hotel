import Header from '../../components/header/header.component';
import Navbar from '../../components/navbar/navbar.component';

import '../../assets/css/common.styles.css';
import Footer from '../../components/footer/footer.component';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
