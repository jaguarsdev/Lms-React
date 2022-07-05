import React, { useEffect } from 'react';

// import axios from 'axios';

import logo1 from '../../../assets/images/logo/1.png'
import logo2 from '../../../assets/images/logo/2.png'
import logo3 from '../../../assets/images/logo/3.png'
import logo4 from '../../../assets/images/logo/4.png'
import logo5 from '../../../assets/images/logo/5.png'
import logo6 from '../../../assets/images/logo/6.png'
import logo7 from '../../../assets/images/logo/7.png'
import logo8 from '../../../assets/images/logo/8.png'
import logo9 from '../../../assets/images/logo/9.png'
import logo10 from '../../../assets/images/logo/10.png'
import logo11 from '../../../assets/images/logo/11.png'
import logo12 from '../../../assets/images/logo/12.png'
import logo13 from '../../../assets/images/logo/13.png'

import { Swiper, SwiperSlide } from 'swiper/react';

const Logo = () => {

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 8,
                spaceBetween: 30,
            },
            }}
            className="mahbob"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src={logo1} alt="1" /></SwiperSlide>
            <SwiperSlide><img src={logo2} alt="1" /></SwiperSlide>
            <SwiperSlide><img src={logo3} alt="1" /></SwiperSlide>
            <SwiperSlide><img src={logo4} alt="1" /></SwiperSlide>
            <SwiperSlide><img src={logo5} alt="1" /></SwiperSlide>
            <SwiperSlide><img src={logo6} alt="1" /></SwiperSlide>
            <SwiperSlide><img src={logo7} alt="1" /></SwiperSlide>
            <SwiperSlide><img src={logo8} alt="1" /></SwiperSlide>
            <SwiperSlide><img src={logo9} alt="1" /></SwiperSlide>
            <SwiperSlide><img src={logo10} alt="1" /></SwiperSlide>
            <SwiperSlide><img src={logo11} alt="1" /></SwiperSlide>
            <SwiperSlide><img src={logo12} alt="1" /></SwiperSlide>
            <SwiperSlide><img src={logo13} alt="1" /></SwiperSlide>

        </Swiper>
    );
};

export default Logo;