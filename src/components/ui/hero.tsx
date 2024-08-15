import React from 'react'

import styles from "@/app/page.module.css"
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className={styles.outerHero}>
        <div className={styles.innerHero}>
            <div className={styles.heroHeading}>
                <h1 className={styles.heroTitle}>
                    Online Practitioner-Led Learning with Offline Community Experiences
                </h1>
                <div className={styles.heroPara}>
                    <p className={styles.heroDescription}>
                        Our hybrid & experiential programmes are designed to help you elevate your skills and embark on a unique learning journey that redefines your career path.
                    </p>
                    <button className={styles.heroButton}>
                        Which programme is right for me
                    </button>
                </div>
            </div>
            <div className={styles.heroBanner}>
                <Image src="/hero-banner.png" alt='Hero Banner' className={styles.heroImage} width={1240} height={400}/>
            </div>
        </div>
    </section>
  )
}
