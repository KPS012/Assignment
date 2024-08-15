"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconType } from 'react-icons';
import { FaBars, FaSearch} from 'react-icons/fa';
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

import Image from "next/image"
import Link from "next/link"

// import styles from "@/app/page.module.css";

import styles from "./mobile.module.css"

interface MenuItem {
  title: string;
  arrow?: React.ReactElement<IconType>[];
  subMenu?: MenuItem[];
  link?: string;
}
const menuItems: MenuItem[] = [
  {
    title: 'Master',
    link: '/', 
  },
  {
    title: 'Admissions',
    link:'/',
  },
  {
    title: 'Student Life',
    link:'/',
  },
  {
    title: 'Contact Us',
    link: '/contact-us',
  },
];


const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuStack, setMenuStack] = useState<MenuItem[][]>([]);
  const [currentMenu, setCurrentMenu] = useState(menuItems);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMenuStack([]);
    setCurrentMenu(menuItems);
  };

  const navigateToSubMenu = (subMenu: MenuItem[]) => {
    setMenuStack([...menuStack, currentMenu]);
    setCurrentMenu(subMenu);
  };

  const navigateBack = () => {
    if (menuStack.length > 0) {
      const previousMenu = menuStack[menuStack.length - 1];
      setMenuStack(menuStack.slice(0, menuStack.length - 1));
      setCurrentMenu(previousMenu);
    } else {
      closeMenu();
    }
  };

  const handleLinkClick = (link: string) => {
    closeMenu();
    router.push(link);
  };

  return (
    <div className={styles.navigationBar}>
      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        <FaBars className={styles.hamIcon} />
      </div>
      {isMenuOpen && (
        <div className={styles.menuOverlay}>
          <div className={styles.menuContainer}>  
            <div className={styles.navCloseIcons}>
              <div className={styles.navCloseIconsInner}>
                <div className={styles.backIcon} onClick={navigateBack}>
                  <HiOutlineArrowSmallLeft />
                </div>
                <div className={styles.closeIcon} onClick={closeMenu}>
                  <IoMdClose />
                </div>
              </div>
            </div>
            <div className={styles.navMenuPadd}>
              {currentMenu.map((menuItem, index) => (
                <div
                  className={styles.menuItem}
                  key={index}
                  onClick={() => {
                    if (menuItem.link) {
                      handleLinkClick(menuItem.link);
                    } else {
                      navigateToSubMenu(menuItem.subMenu || []);
                    }
                  }}
                >
                  <div className={styles.menuItemTitle}>{menuItem.title}{menuItem.arrow}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;