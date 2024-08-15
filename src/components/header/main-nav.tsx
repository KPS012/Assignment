"use client"

import Link from "next/link";

import styles from "@/app/page.module.css"

export function MainNav(){

    const routes = [
        {
            href: `/`,
            label: 'Masters',
        },
        {
            href: `/`,
            label: 'Admissions',
        },
        {
            href: `/`,
            label: 'Student Life',
        },
        {
            href: `/contact-us`,
            label: 'Contact Us',
        },
    ];


    return(
        <nav className={styles.navbar}>
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={styles.navLink}
                >
                    {route.label}    
                </Link>
            ))}
        </nav>
    )
}