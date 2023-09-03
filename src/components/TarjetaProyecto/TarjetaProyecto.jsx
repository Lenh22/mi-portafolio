import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import './TarjetaProyecto.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function TarjetaProyecto() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        // pagination={{ clickable: false }}
        navigation={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          scale: 0.8,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='TarjProyecto_container'>
          <div className='TarjProyecto_img_container'>
            <img className='TarjProyecto_img' src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </div>
          <div className='h-100'>
            <div className='TarjProyecto_header'>
              <h4 className='TarjProyecto_titulo'>Titulo proyecto</h4>
              <p className='TarjProyecto_descripcion'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatibus voluptatum labore quod dolor eum nulla enim inventore voluptas consequatur.</p>
              <button className='btn-primary'>Ver mas</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='TarjProyecto_container'>
          <div className='TarjProyecto_img_container'>
            <img className='TarjProyecto_img' src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </div>
          <div className='TarjProyecto_header'>
            <h4 className='TarjProyecto_titulo'>Titulo proyecto</h4>
            <p className='TarjProyecto_descripcion'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatibus voluptatum labore quod dolor eum nulla enim inventore voluptas consequatur.</p>
            <button className='btn-primary'>Ver mas</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='TarjProyecto_container'>
          <div className='TarjProyecto_img_container'>
            <img className='TarjProyecto_img' src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </div>
          <div className='TarjProyecto_header'>
            <h4 className='TarjProyecto_titulo'>Titulo proyecto</h4>
            <p className='TarjProyecto_descripcion'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatibus voluptatum labore quod dolor eum nulla enim inventore voluptas consequatur.</p>
            <button className='btn-primary'>Ver mas</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='TarjProyecto_container'>
          <div className='TarjProyecto_img_container'>
            <img className='TarjProyecto_img' src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </div>
          <div className='TarjProyecto_header'>
            <h4 className='TarjProyecto_titulo'>Titulo proyecto</h4>
            <p className='TarjProyecto_descripcion'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatibus voluptatum labore quod dolor eum nulla enim inventore voluptas consequatur.</p>
            <button className='btn-primary'>Ver mas</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='TarjProyecto_container'>
          <div className='TarjProyecto_img_container'>
            <img className='TarjProyecto_img' src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </div>
          <div className='TarjProyecto_header'>
            <h4 className='TarjProyecto_titulo'>Titulo proyecto</h4>
            <p className='TarjProyecto_descripcion'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatibus voluptatum labore quod dolor eum nulla enim inventore voluptas consequatur.</p>
            <button className='btn-primary'>Ver mas</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='TarjProyecto_container'>
          <div className='TarjProyecto_img_container'>
            <img className='TarjProyecto_img' src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </div>
          <div className='TarjProyecto_header'>
            <h4 className='TarjProyecto_titulo'>Titulo proyecto</h4>
            <p className='TarjProyecto_descripcion'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatibus voluptatum labore quod dolor eum nulla enim inventore voluptas consequatur.</p>
            <button className='btn-primary'>Ver mas</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='TarjProyecto_container'>
          <div className='TarjProyecto_img_container'>
            <img className='TarjProyecto_img' src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </div>
          <div className='TarjProyecto_header'>
            <h4 className='TarjProyecto_titulo'>Titulo proyecto</h4>
            <p className='TarjProyecto_descripcion'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatibus voluptatum labore quod dolor eum nulla enim inventore voluptas consequatur.</p>
            <button className='btn-primary'>Ver mas</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='TarjProyecto_container'>
          <div className='TarjProyecto_img_container'>
            <img className='TarjProyecto_img' src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </div>
          <div className='TarjProyecto_header'>
            <h4 className='TarjProyecto_titulo'>Titulo proyecto</h4>
            <p className='TarjProyecto_descripcion'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatibus voluptatum labore quod dolor eum nulla enim inventore voluptas consequatur.</p>
            <button className='btn-primary'>Ver mas</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='TarjProyecto_container'>
          <div className='TarjProyecto_img_container'>
            <img className='TarjProyecto_img' src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </div>
          <div className='TarjProyecto_header'>
            <h4 className='TarjProyecto_titulo'>Titulo proyecto</h4>
            <p className='TarjProyecto_descripcion'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatibus voluptatum labore quod dolor eum nulla enim inventore voluptas consequatur.</p>
            <button className='btn-primary'>Ver mas</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='TarjProyecto_container'>
          <div className='TarjProyecto_img_container'>
            <img className='TarjProyecto_img' src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </div>
          <div className='TarjProyecto_header'>
            <h4 className='TarjProyecto_titulo'>Titulo proyecto</h4>
            <p className='TarjProyecto_descripcion'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatibus voluptatum labore quod dolor eum nulla enim inventore voluptas consequatur.</p>
            <button className='btn-primary'>Ver mas</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
