import { Routes, Route } from 'react-router-dom';

import AboutUs from './routes/about-us/about-us.component';
import Home from './routes/home/home.component';

import './media-queries.css';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about-us' element={<AboutUs />} />
        </Routes>
    );
};

export default App;
