import CommonHeader from '../common/common-header.component';
import RoomsBtn from './rooms-btn/rooms-btn.component';
import RoomsCard from './rooms-card/rooms-card.component';

import './rooms.styles.css';

const Rooms = () => {
    return (
        <section className='rooms'>
            <CommonHeader heading={'Rooms In Grand Hotel'} />

            <div className='rooms-cards-wrapper'>
                <RoomsCard
                    imgUrl={require('../../assets/img/single-room.jpeg')}
                    heading={'Single Room'}
                    paragraph={'Lorem ipsum dolor sit amet.'}
                    price={'$99.00'}
                />
                <RoomsCard
                    imgUrl={require('../../assets/img/double-room.jpeg')}
                    heading={'Double Room'}
                    paragraph={'Lorem ipsum dolor sit amet.'}
                    price={'$199.00'}
                />
                <RoomsCard
                    imgUrl={require('../../assets/img/lux.jpeg')}
                    heading={'Lux'}
                    paragraph={'Lorem ipsum dolor sit amet.'}
                    price={'$299.00'}
                />
                <RoomsCard
                    imgUrl={require('../../assets/img/vip.jpeg')}
                    heading={'VIP'}
                    paragraph={'Lorem ipsum dolor sit amet.'}
                    price={'$399.00'}
                />
            </div>
            <RoomsBtn />
        </section>
    );
};

export default Rooms;
