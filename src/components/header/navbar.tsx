import Image from "next/image";
import { MainNav } from "./main-nav";


import styles from "@/app/page.module.css" 
import Link from "next/link";
import NavigationBar from "./mobile";

const Navbar = () => {

    return(
        <div className={styles.outerNav}>
            <div className={styles.innerNav}>
                <div className={styles.navSec}>
                    <Link href="/"><Image src="/logo.svg" alt="" width={200} height={40} /></Link>
                </div>
                <div className={styles.navSec2}>
                    <MainNav />
                </div>
                <div className={styles.navSec}>
                    <button className={styles.navButton}>
                        Strategic Marketing & AI
                    </button>
                </div>
                <div className={styles.mobileMenu}>
                    <NavigationBar />
                </div>
            </div>
        </div>
    )
}

export default Navbar;