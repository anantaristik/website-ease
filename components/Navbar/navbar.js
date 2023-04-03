import React, { useState } from "react";
import Link from "next/link";
import styles from './navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <header className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">
              <span className={styles.logoText}>Logo</span>
            </Link>
          </div>
          <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
            <ul className={styles.navList}>
              <li>
                <Link href="/about">
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
          <button
              className={`${styles.menuButton} ${isOpen ? styles.open : ""} ${
                isOpen ? styles.openToFront : ""
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
        </div>
      </header>
    );    
    
  };
  
  export default Navbar;
  
  