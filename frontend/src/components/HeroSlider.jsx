import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import SafeImg from './SafeImg'
import { getLocalImages } from '../utils/localImages'

const HeroSlider = () => {
  const images = getLocalImages()

  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Your Dream <span>Wedding</span> Starts Here!</h3>
      </div>
      
      {images.length > 0 && (
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="home-slider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <SafeImg src={image} alt={`Wedding ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      )}
    </section>
  )
}

export default HeroSlider
