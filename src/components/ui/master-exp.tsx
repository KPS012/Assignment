"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import styles from '@/app/page.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { MdKeyboardArrowRight } from "react-icons/md";



const MasterExp = () => {

  const breakpoints = {
    370: { slidesPerView: 1},
    390: { slidesPerView: 1},
    450: { slidesPerView: 1},
    470: { slidesPerView: 1},
    520: { slidesPerView: 1 },
    600: { slidesPerView: 1 },
    650: { slidesPerView: 1 },
    700: { slidesPerView: 1.2 },
    900: { slidesPerView: 1.5 },
    1200: { slidesPerView: 1.5 },
    1400: { slidesPerView: 2 },
  };


  return (
    <section className={styles.expSliderOuter}>
        <div className={styles.expSliderInner}>
            <div className={styles.expSliderHeading}>
                <h2 className={styles.expSliderH2}>
                    Experience MasterCamps
                </h2>
            </div>
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
                className={styles.expMySwiper}
            >
                <SwiperSlide className={styles.expCardOuter}>
                    <div className={styles.expCardInner}>    
                        <Image
                            src="/exp-img.svg"
                            alt=""
                            width={210}
                            height={168}
                            className={styles.expImage}
                        />
                        <div className={styles.expCardContentOuter}>
                            <span className={styles.expCardSpan}>Apply by: June 12th, 2023</span>
                            <div className={styles.expCardContent}>
                                <h5 className={styles.expCardH5}>Masters’ Union CEO Challenge</h5>
                                <span className={styles.expCardPara}>Registrations open (no eligibility criteria)</span>
                            </div>
                            <Link href="" className={styles.expCardLink}>Register Now<MdKeyboardArrowRight className={styles.expCardIcon} />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.expCardOuter}>
                    <div className={styles.expCardInner}>    
                        <Image
                            src="/exp-img.svg"
                            alt=""
                            width={210}
                            height={168}
                            className={styles.expImage}
                        />
                        <div className={styles.expCardContentOuter}>
                            <span className={styles.expCardSpan}>Apply by: June 12th, 2023</span>
                            <div className={styles.expCardContent}>
                                <h5 className={styles.expCardH5}>Masters’ Union CEO Challenge</h5>
                                <span className={styles.expCardPara}>Registrations open (no eligibility criteria)</span>
                            </div>
                            <Link href="" className={styles.expCardLink}>Register Now<MdKeyboardArrowRight className={styles.expCardIcon} />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.expCardOuter}>
                    <div className={styles.expCardInner}>    
                        <Image
                            src="/exp-img.svg"
                            alt=""
                            width={210}
                            height={168}
                            className={styles.expImage}
                        />
                        <div className={styles.expCardContentOuter}>
                            <span className={styles.expCardSpan}>Apply by: June 12th, 2023</span>
                            <div className={styles.expCardContent}>
                                <h5 className={styles.expCardH5}>Masters’ Union CEO Challenge</h5>
                                <span className={styles.expCardPara}>Registrations open (no eligibility criteria)</span>
                            </div>
                            <Link href="" className={styles.expCardLink}>Register Now<MdKeyboardArrowRight className={styles.expCardIcon} />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.expCardOuter}>
                    <div className={styles.expCardInner}>    
                        <Image
                            src="/exp-img.svg"
                            alt=""
                            width={210}
                            height={168}
                            className={styles.expImage}
                        />
                        <div className={styles.expCardContentOuter}>
                            <span className={styles.expCardSpan}>Apply by: June 12th, 2023</span>
                            <div className={styles.expCardContent}>
                                <h5 className={styles.expCardH5}>Masters’ Union CEO Challenge</h5>
                                <span className={styles.expCardPara}>Registrations open (no eligibility criteria)</span>
                            </div>
                            <Link href="" className={styles.expCardLink}>Register Now<MdKeyboardArrowRight className={styles.expCardIcon} />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.expCardOuter}>
                    <div className={styles.expCardInner}>    
                        <Image
                            src="/exp-img.svg"
                            alt=""
                            width={210}
                            height={168}
                            className={styles.expImage}
                        />
                        <div className={styles.expCardContentOuter}>
                            <span className={styles.expCardSpan}>Apply by: June 12th, 2023</span>
                            <div className={styles.expCardContent}>
                                <h5 className={styles.expCardH5}>Masters’ Union CEO Challenge</h5>
                                <span className={styles.expCardPara}>Registrations open (no eligibility criteria)</span>
                            </div>
                            <Link href="" className={styles.expCardLink}>Register Now<MdKeyboardArrowRight className={styles.expCardIcon} />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.expCardOuter}>
                    <div className={styles.expCardInner}>    
                        <Image
                            src="/exp-img.svg"
                            alt=""
                            width={210}
                            height={168}
                            className={styles.expImage}
                        />
                        <div className={styles.expCardContentOuter}>
                            <span className={styles.expCardSpan}>Apply by: June 12th, 2023</span>
                            <div className={styles.expCardContent}>
                                <h5 className={styles.expCardH5}>Masters’ Union CEO Challenge</h5>
                                <span className={styles.expCardPara}>Registrations open (no eligibility criteria)</span>
                            </div>
                            <Link href="" className={styles.expCardLink}>Register Now<MdKeyboardArrowRight className={styles.expCardIcon} />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.expCardOuter}>
                    <div className={styles.expCardInner}>    
                        <Image
                            src="/exp-img.svg"
                            alt=""
                            width={210}
                            height={168}
                            className={styles.expImage}
                        />
                        <div className={styles.expCardContentOuter}>
                            <span className={styles.expCardSpan}>Apply by: June 12th, 2023</span>
                            <div className={styles.expCardContent}>
                                <h5 className={styles.expCardH5}>Masters’ Union CEO Challenge</h5>
                                <span className={styles.expCardPara}>Registrations open (no eligibility criteria)</span>
                            </div>
                            <Link href="" className={styles.expCardLink}>Register Now<MdKeyboardArrowRight className={styles.expCardIcon} />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.expCardOuter}>
                    <div className={styles.expCardInner}>    
                        <Image
                            src="/exp-img.svg"
                            alt=""
                            width={210}
                            height={168}
                            className={styles.expImage}
                        />
                        <div className={styles.expCardContentOuter}>
                            <span className={styles.expCardSpan}>Apply by: June 12th, 2023</span>
                            <div className={styles.expCardContent}>
                                <h5 className={styles.expCardH5}>Masters’ Union CEO Challenge</h5>
                                <span className={styles.expCardPara}>Registrations open (no eligibility criteria)</span>
                            </div>
                            <Link href="" className={styles.expCardLink}>Register Now<MdKeyboardArrowRight className={styles.expCardIcon} />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  );
};

export default MasterExp;
