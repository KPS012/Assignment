import React from 'react'

import { BsArrowUpRight } from "react-icons/bs";

import styles from "@/app/page.module.css"

export default function CallToAction() {
  return (
    <section className={styles.callOuter}>
        <div className={styles.callInner}>
            <div className={styles.callContent}>
                <h3 className={styles.callHeading}>
                    GET A PEEL INTO THE <br /> 
                    MASTERCAMP LIFE
                </h3>
                <button className={styles.socialSecButton}>
                    Join Our Community
                    <BsArrowUpRight className={styles.contentFirstButtonIcon} />
                </button>
            </div>
        </div>
    </section>
  )
}
