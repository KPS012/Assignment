"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/app/page.module.css';

import { IoIosArrowRoundForward, IoIosArrowRoundBack  } from "react-icons/io";

interface Slide {
  id: string;
  imageUrl: string;
  personname: string;
  personPara: string;

}

const slides: Slide[] = [
  {
    id: 'slide1',
    imageUrl: '/master-slide/image.png',
    personname: 'Mihir Mankad',
    personPara:'Professor of Practice, Tufts & Harvard',
  },
  {
    id: 'slide2',
    imageUrl: '/master-slide/archana.png',
    personname: 'Archana Bhardwaj',
    personPara:'Senior Associate Director, KPMG in India',
  },
  {
    id: 'slide3',
    imageUrl: '/master-slide/Eduardo.png',
    personname: 'Eduardo Barbaro',
    personPara:'Worldwide Omnichannel Senior Director at Bulgari',
  },
  {
    id: 'slide4',
    imageUrl: '/master-slide/Olga.png',
    personname: 'Olga Annushkina',
    personPara:'Associate Professor of Practice- Strategy & Entrepreneurship',
  },
];

const MasterSlide: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [slidesPerPage, setSlidesPerPage] = useState<number>(4);



  const nextSlides = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlides = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };


  useEffect(() => {
    const handleResize = () => {
      console.log('Handling resize...');
      const screenWidth = window.innerWidth;
      console.log('Screen width:', screenWidth);
      if (screenWidth <= 620) {
        setSlidesPerPage(1);
      } else if (screenWidth <= 930) {
        setSlidesPerPage(2);
      } else if (screenWidth <= 1250) {
        setSlidesPerPage(3);
      } else {
        setSlidesPerPage(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderSlides = () => {
    const renderedSlides = [];
    for (let i = currentSlide; i < currentSlide + slidesPerPage; i++) {
      const slideIndex = i % slides.length;
      const slide = slides[slideIndex];
      renderedSlides.push(
        <div key={slide.id} className={styles.slideContainer}>
          <div
            className={styles.sliderImageContainer}
          >
            <Image
              src={slide.imageUrl}
              alt={`Slide ${slide.id}`}
              className={styles.sliderImage}
              width={290}
              height={310}
            />
            <h4 className={styles.personname}>{slide.personname}</h4>
            <p className={styles.personPara}>{slide.personPara}</p>
          </div>
        </div>
      );
    }
    return renderedSlides;
  };

  return (
    <div className={styles.mainSectionOuter}>
      <div className={styles.mainSectionInner}>
        <div className={styles.sectionHeadingOuter}>
          <div className={styles.mainSectionHeading}>
            <h2 className={styles.mainSectionH2}>Meet Your Masters</h2>
            <p className={styles.mainSectionHp}>
              Take a closer look at Masters who&apos;ve been there, and done that.
            </p>
          </div>
          <div className={styles.buttondiv}>
            <button className={styles.sliderButton} onClick={prevSlides}>
              <IoIosArrowRoundBack  className={styles.masterCrousIcons} />
            </button>
            <button className={styles.sliderButton} onClick={nextSlides}>
              <IoIosArrowRoundForward className={styles.masterCrousIcons} />
            </button>
          </div>
        </div>
        <div className={styles.sliderContainer}>
          <div className={styles.slides}>{renderSlides()}</div>
          
        </div>
      </div>
    </div>
  );
};

export default MasterSlide;
