import React from 'react'

import styles from "@/app/contact-us/contact.module.css"
import Link from 'next/link'
import Form from './form'

export default function Contact() {
  return (
    <section className={styles.contactOuter}>
      <div className={styles.contactInner}>
        <div className={styles.contactInnerStart}>
          <div className={styles.contactContent}>
            <div className={styles.contentHeading}>
              <h2 className={styles.headingH2}>
                Connect Us
              </h2>
            </div>
            <div className={styles.contentMailOuter}>
              <div className={styles.mailOuterDiv}>
                <span className={styles.mailSpan}>Connect with us:</span>
                <Link className={styles.mailLink} href={"mailto:info@mastercamp.org"}>info@mastercamp.org</Link>
              </div>
              <div className={styles.mailOuterDiv}>
                <span className={styles.mailSpan}>Media team:</span>
                <Link className={styles.mailLink} href={"mailto:media@mastercamp.org"}>media@mastercamp.org</Link>
              </div>
              <div className={styles.mailOuterDiv}>
                <span className={styles.mailSpan}>Admissions:</span>
                <Link className={styles.mailLink} href={"mailto:admissions@mastercamp.org "}>admissions@mastercamp.org </Link>
              </div>
              <div className={styles.mailOuterDiv}>
                <span className={styles.mailSpan}>Career Services:</span>
                <Link className={styles.mailLink} href={"mailto:career.service@mastercamp.org"}>career.service@mastercamp.org</Link>
              </div>
              <div className={styles.mailOuterDiv}>
                <span className={styles.mailSpan}>Master Relations:</span>
                <Link className={styles.mailLink} href={"mailto:master.relations@mastercamp.org"}>master.relations@mastercamp.org</Link>
              </div>
            </div>
            <div className={styles.contentAddress}>
              <div className={styles.mailOuterDiv}>
                <span className={styles.mailSpan}>Address:</span>
                <span className={styles.contentAddressSpan}>DLF Cyberpark, Phase II, Udyog Vihar, Sector 20, 
                Gurugram, Haryana PIN - 122008</span>
              </div>
            </div>
          </div>
          <div className={styles.contactForm}>
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}
