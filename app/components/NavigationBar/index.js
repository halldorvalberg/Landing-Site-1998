import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.css';

const NavigationBar = ({ activeElement, handleSelect }) => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => setOpen(!open);
  const handleNavClick = (section) => {
    handleSelect(section);
    setOpen(false);
  };

  return (
    <nav className={styles.navigationBar}>
      <div className={styles.hamburger} onClick={handleMenuClick}>
        <div className={open ? styles.barOpen : styles.bar}></div>
        <div className={open ? styles.barOpen : styles.bar}></div>
        <div className={open ? styles.barOpen : styles.bar}></div>
      </div>
      <div className={open ? styles.frameMobile : styles.frame}>
        <a className={activeElement === 'Home' ? styles.navigationElementActive : styles.navigationElement} onClick={() => handleNavClick('Home')}>Home</a>
        {/* <a className={ activeElement === 'Projects' ? styles.navigationElementActive : styles.navigationElement } onClick={() => handleNavClick('Projects')}>Projects</a> */}
        {/* <a className={ activeElement === 'Skills' ? styles.navigationElementActive : styles.navigationElement } onClick={() => handleNavClick('Skills')}>Skills</a> */}
        <a className={activeElement === 'Resume' ? styles.navigationElementActive : styles.navigationElement} onClick={() => handleNavClick('Resume')}>Resume</a>
        {/* <a className={ activeElement === 'Advertisements' ? styles.navigationElementActive : styles.navigationElement } onClick={() => handleNavClick('Advertisements')}>Advertisements</a> */}
      </div>
    </nav>
  );
}

export default NavigationBar;
