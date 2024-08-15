import React from 'react'

import { FaLocationDot, FaYoutube } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


import styles from "@/app/page.module.css"
import Image from 'next/image'
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.outerFooter}>
      <div className={styles.innerFooter}>
        <div className={styles.logoFoot}>
          <Image src="/footer-logo.svg" alt='Footer Logo' width={276} height={33} />
          <p className={styles.footAdd}>
            <FaLocationDot className={styles.footIcon} />DLF Cyberpark, Phase II, Udyog Vihar, Sector 20, <br />Gurugram, Haryana, 122008
          </p>
        </div>
        <div className={styles.footQuickLinks}>
          <div className={styles.quickLinks}>
            <Link href="" className={styles.footQucikLinks}>Privacy Policy</Link>
            <Link href="" className={styles.footQucikLinks}>Terms & Conditions</Link>
            <Link href="" className={styles.footQucikLinks}>Cookie Policy</Link>
          </div>
          <div className={styles.socialLinks}>
            <p className={styles.socialPara}>
              *T&C apply. Images shown here may differ from actual product.
            </p>
            <div className={styles.socialLink}>
              <Link href="/"><FaFacebookF className={styles.socialIcon}/></Link>
              <Link href="/"><FaTwitter className={styles.socialIcon}/></Link>
              <Link href="/"><RiInstagramFill className={styles.socialIcon}/></Link>
              <Link href="/"><FaLinkedinIn className={styles.socialIcon}/></Link>
              <Link href="/"><FaYoutube className={styles.socialIcon}/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 