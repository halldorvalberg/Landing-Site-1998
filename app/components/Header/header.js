// Header for site 
import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

export default function Header() {

    return (
        <div className={styles.Container}>
            <div className={styles.HeaderContainer}>
                <div className={styles.HeaderItem}>
                    <Link href='/'>
                        Home
                    </Link>
                </div>
            </div>
        </div>
    )
}