import React from 'react'


import styles from "@/app/page.module.css";
import Image from 'next/image';

export default function ContentSlide() {
  return (
    <section className={styles.outerCslide}>
        <div className={styles.innerCslide}>
            <div className={styles.cSlideHeading}>
                <h2 className={styles.cSlideH2}>
                    Experience. <br /> Engage. Elevate.
                </h2>
            </div>
        </div>
        <div className={styles.cSlideContentOuter}>
            <div className={styles.cSlideContentInner}>
                <div className={styles.cSlideContent}>
                    <span className={styles.cSlideSpan}>OFFLINE</span>
                    <h3 className={styles.cSlideH3}>In-Person Residencies</h3>
                    <p className={styles.cSlidePara}>For every programme, we host 3 offline residencies across locations in India & our Gurgaon campus which gives cohort members the opportunity to learn, network & make memories. </p>
                </div>
                <div className={styles.cSlideContentImage}>
                    <Image src="/scroller1.357dbff5.png" alt=''  className={styles.cSlideContentImageMain} width={600} height={420} />
                </div>
            </div>
        </div>
    </section>
  )
}
