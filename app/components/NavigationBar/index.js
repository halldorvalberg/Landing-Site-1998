import Link from 'next/link';
import styles from './styles.module.css';

const NavigationBar = ({ activeElement, handleSelect }) => {
  return (
    <div className={styles.navigationBar}>
        <div className={styles.frame}>
            <a className={ activeElement === 'Home' ? styles.navigationElementActive : styles.navigationElement } onClick={() => handleSelect('Home')}>Home</a>
            {/* <a className={ activeElement === 'Projects' ? styles.navigationElementActive : styles.navigationElement } onClick={() => handleSelect('Projects')}>Projects</a> */}
            {/* <a className={ activeElement === 'Skills' ? styles.navigationElementActive : styles.navigationElement } onClick={() => handleSelect('Skills')}>Skills</a> */}
            {/* <a className={ activeElement === 'Resume' ? styles.navigationElementActive : styles.navigationElement } onClick={() => handleSelect('Resume')}>Resume</a> */}
        </div>
    </div>
  );
}

export default NavigationBar;
