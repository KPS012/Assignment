"use client"

import { useState } from 'react';
import styles from '@/app/page.module.css';


import { MdOutlineWatchLater, MdOutlineContactMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";

import { TiStarburst } from "react-icons/ti";
import { BsArrowUpRight } from "react-icons/bs";
import Image from 'next/image';


interface ContentItem {
    id: string;
    label: string;
    content: JSX.Element;
}
  
const contentItems: ContentItem[] = [
    {
        id: 'content1',
        label: 'Human Resource Management',
        content:<div>Human Resource Management</div>,
    },
    {
        id: 'content2',
        label: 'Creatorpreneur Bootcamp',
        content:<div>Creatorpreneur Bootcamp</div>,
    },
    {
        id: 'content3',
        label: 'Applied Auditing & Analytics',
        content: <div>Applied Auditing & Analytics</div>,
    },
    {
        id: 'content4',
        label: 'Strategic Marketing & AI',
        content: <div>Strategic Marketing & AI</div>,
    },
];
  
const ToggleContent: React.FC<{ contentItems: ContentItem[] }> = ({ contentItems }) => {
    
    const [activeContent, setActiveContent] = useState<string>(contentItems[0]?.id || '');

    const handleClick = (id: string) => {
        setActiveContent(id);
    };

    return (
        <div className={styles.multiContent}>
            <div className={styles.toggleSidebar}>
                <ul>
                <h4 className={styles.toggleH4}>Applied Finance</h4>
                {contentItems.map(item => (
                    <li key={item.id}>
                    <button
                        className={styles.toggleButton} 
                        onClick={() => handleClick(item.id)}>
                        {item.label}
                    </button>
                    </li>
                ))}
                </ul>
            </div>
            <div className={styles.toggleContent}>
                {contentItems.map(item => (
                item.id === activeContent && <div key={item.id} className={styles.toggleContentInner}>
                    <div className={styles.toggleSecContent}>
                        <div className={styles.toggleSecConentInner}>
                            <div className={styles.headingToggleSec}>
                                <h3 className={styles.headingToggleSecH3}>
                                    {item.content}
                                </h3>
                            </div>
                            <div className={styles.toggleSecContentMain}>
                                <div className={styles.toggleSecContentFirst}>
                                    <div className={styles.firstcontentFirst}>

                                        <div className={styles.contentFirstInner}>
                                            <div className={styles.firstContentCard}>
                                                <div className={styles.firstCardIcon}>
                                                    <MdOutlineWatchLater className={styles.cardIcon} />
                                                </div>
                                                <div className={styles.firstCardContent}>
                                                    <h4 className={styles.firstCardH4}>Round | Deadline:</h4>
                                                    <p className={styles.firstCardPara}>TBD</p>
                                                </div>
                                            </div>
                                            <div className={styles.firstContentCard}>
                                                <div className={styles.firstCardIcon}>
                                                    <CiLocationOn className={styles.cardIcon} />
                                                </div>
                                                <div className={styles.firstCardContent}>
                                                    <h4 className={styles.firstCardH4}>6 Months</h4>
                                                    <p className={styles.firstCardPara}>8 hours/weekend</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.contentFirstInner}>
                                            <div className={styles.firstContentCard}>
                                                <div className={styles.firstCardIcon}>
                                                    <MdOutlineContactMail className={styles.cardIcon} />
                                                </div>
                                                <div className={styles.firstCardContent}>
                                                    <h4 className={styles.firstCardH4}>Hybrid</h4>
                                                    <p className={styles.firstCardPara}>In-person + Online</p>
                                                </div>
                                            </div>
                                            <div className={styles.firstContentCard}>
                                                <div className={styles.firstCardIcon}>
                                                    <FaRegCalendarAlt className={styles.cardIcon} />
                                                </div>
                                                <div className={styles.firstCardContent}>
                                                    <h4 className={styles.firstCardH4}>Taught by:</h4>
                                                    <p className={styles.firstCardPara}>KPMG in India</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className={styles.secondcontentFirst}>
                                        <span className={styles.secondContentFirstSpan}><TiStarburst className={styles.secondContentFirstIcon} />All classes led by KPMG in India experts</span>
                                        <span className={styles.secondContentFirstSpan}><TiStarburst className={styles.secondContentFirstIcon} />Get 1:1 mentorship & a career development plan</span>
                                        <span className={styles.secondContentFirstSpan}><TiStarburst className={styles.secondContentFirstIcon} />4-month virtual & hands-on internship at KPMG in India</span>
                                    </div>
                                    
                                    <button className={styles.thirdContentFirstButton}>
                                        Apply now
                                        <BsArrowUpRight className={styles.contentFirstButtonIcon} />
                                    </button>
                                </div>
                                <div className={styles.toggleSecContentSecond}>
                                    <Image src="/toggle-section.svg" alt='' className={styles.toogleSecConteneImage} width={400} height={290} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

const toggleSection: React.FC = () => {

  return (
    <section className={styles.outerMulti}>
        <div className={styles.innerMulti}>
            <div className={styles.multiHeading}>
                <h2 className={styles.multiH2}>
                    Learn from Masters, Hands-On
                </h2>
            </div>
            <ToggleContent contentItems={contentItems} />  
        </div>
    </section>
  );
};

export default toggleSection;


