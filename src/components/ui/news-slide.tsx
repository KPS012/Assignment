"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/app/page.module.css';

import { IoIosArrowRoundForward, IoIosArrowRoundBack  } from "react-icons/io";

interface Slide {
  id: string;
  imageUrl: string;

}

const slides: Slide[] = [
  {
    id: 'slide1',
    imageUrl: '/news/inTheNewsOne-min.png',
  },
  {
    id: 'slide2',
    imageUrl: '/news/news2.71352f5a.png',
  },
  {
    id: 'slide3',
    imageUrl: '/news/news3.eaa27454.png',
  },
  {
    id: 'slide4',
    imageUrl: '/news/news6.eb7283ba.png',
  },
];

const NewsSlide: React.FC = () => {
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
              className={styles.sliderNewsImage}
              width={540}
              height={440}
            />
          </div>
        </div>
      );
    }
    return renderedSlides;
  };

  return (
    <div className={styles.mainSectionNewsOuter}>
      <div className={styles.mainSectionInner}>
        <div className={styles.sectionHeadingOuter}>
          <div className={styles.mainSectionHeading}>
            <h2 className={styles.mainSectionH2}>In the News</h2>
            <p className={styles.mainSectionHp}>
                Have a look at what the dailies have to say about MasterCamps
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
      </div>
      
      <div className={styles.sliderContainer}>
          <div className={styles.slides}>{renderSlides()}</div>        
        </div>
    </div>
  );
};

export default NewsSlide;
