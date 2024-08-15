import React from 'react'


import { BsArrowUpRight } from "react-icons/bs";

import styles from "@/app/page.module.css"
import SwiperSec from './swiper-slide';

export default function SocialSec() {
  return (
    <section className={styles.outerSocialSec}>
        <div className={styles.socialSecHeading}>
            <h2 className={styles.socialSecH2}>What&apos;s Cooking?</h2>
            <button className={styles.socialSecButton}>
                FOLLOW ON INSTAGRAM
                <BsArrowUpRight className={styles.contentFirstButtonIcon} />
            </button>
        </div>
        <div className={styles.socialSecSlider}>
            <SwiperSec />
        </div>
    </section>
  )
}
