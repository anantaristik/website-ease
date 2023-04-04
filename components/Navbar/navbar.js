import React, { useState } from "react";
import Link from "next/link";
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <li className={styles.dropdown}
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}>
              <span>Services</span>
              <div
                className={`${styles.dropdownContent} ${
                  isDropdownOpen ? styles.show : ""
                }`}
              >
                <Link href="/services/creative">
                  <span>Service 1</span>
                </Link>
                <Link href="/services/studio">
                  <span>Service 2</span>
                </Link>
                <Link href="/services/zoom">
                  <span>Service 3</span>
                </Link>
              </div>
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
