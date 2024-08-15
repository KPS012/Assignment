"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import styles from "@/app/page.module.css";

export default function HeroMarquee() {
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = () => {
    setScrollX(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.heroMarqueeOuter}>
      <Marquee
        direction="left"
        loop={0}
      >
        <div 
            className={styles.heroMarqueeContent}
            style={{ whiteSpace: 'nowrap', transform: `translateX(-${scrollX}px)` }}
        >
          <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
          <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
          <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
          <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
          <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
          <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
          <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
          <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
        </div>
      </Marquee>
      <Marquee
        direction="right" 
        loop={0}
      >
        <div 
            className={styles.heroMarqueeContent}
            style={{ whiteSpace: 'nowrap', transform: `translateX(${scrollX}px)` }}
        >
            <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
            <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
            <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
            <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
            <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
            <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
            <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
            <Image src="/hero-marq.svg" alt="Marquee Image" width={2500} height={100} />
        </div>
      </Marquee>
    </div>
  );
}
