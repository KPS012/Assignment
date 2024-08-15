import React from 'react'


import { BsArrowUpRight } from "react-icons/bs";

import styles from "@/app/page.module.css"
import Link from 'next/link';


export default function ContactSec() {
  return (
    <section className={styles.outerContactSec}>
        <div className={styles.innerContactSec}>
            <div className={styles.contactSecHeading}>
                <h2 className={styles.contactSecTitle}>The MasterCamps <br /> Experience, First Hand.</h2>
                <Link href="/contact-us">
                  <button className={styles.heroButton}>
                      CONNECT WITH US
                      <BsArrowUpRight className={styles.contentFirstButtonIcon} />
                  </button>
                </Link>
            </div>
        </div>
    </section>
  )
}
