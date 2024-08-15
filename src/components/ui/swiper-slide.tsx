"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import styles from '@/app/page.module.css';
import Image from 'next/image';


const SwiperSec = () => {

  const breakpoints = {
    370: { slidesPerView: 1 },
    390: { slidesPerView: 1 },
    450: { slidesPerView: 1 },
    470: { slidesPerView: 1 },
    520: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    650: { slidesPerView: 2 },
    700: { slidesPerView: 3 },
    900: { slidesPerView: 4 },
    1200: { slidesPerView: 4 },
    1400: { slidesPerView: 4 },
  };


  return (
    <section className={styles.socialSecSliderOuter}>
        <Swiper
            breakpoints={breakpoints}
            spaceBetween={15}
            loop={true}
            speed={2500}
            autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={styles.mySwiper}
        >
            <SwiperSlide className={styles.swiperSlideOuter}>
                <Image
                    src="/social/2.svg"
                    alt=""
                    width={330}
                    height={563}
                    className={styles.socialSecImage}
                />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlideOuter}>
                <Image
                    src="/social/3.svg"
                    alt=""
                    width={330}
                    height={563}
                    className={styles.socialSecImage}
                />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlideOuter}>
                <Image
                    src="/social/4.svg"
                    alt=""
                    width={330}
                    height={563}
                    className={styles.socialSecImage}
                />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlideOuter}>
                <Image
                    src="/social/5.svg"
                    alt=""
                    width={330}
                    height={563}
                    className={styles.socialSecImage}
                />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlideOuter}>
                <Image
                    src="/social/1.svg"
                    alt=""
                    width={330}
                    height={563}
                    className={styles.socialSecImage}
                />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlideOuter}>
                <Image
                    src="/social/3.svg"
                    alt=""
                    width={330}
                    height={563}
                    className={styles.socialSecImage}
                />
            </SwiperSlide>
        </Swiper>
    </section>
  );
};

export default SwiperSec;
