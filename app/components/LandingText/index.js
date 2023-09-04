import { useEffect } from "react";

import styles from './styles.module.css'

export default function LandingText() {

    useEffect(() => {
        enhance('email');
        enhance('github');
        enhance('instagram');
        enhance('linkedin');
    }, []);
    
    const enhance = id => {
        const el = document.getElementById(id),
          text = el.innerText.split('');
        el.innerText = '';
        text.forEach(letter => {
          const span = document.createElement('span');
          span.className = `${styles.letter}`
          span.innerText = letter;
          el.appendChild(span);
        })
      }

    return (
    <div>
        <div className={styles.textContainer}>
        <div className={styles.text}>
          <div className={styles.line}>

            <div className={styles.word}> I&apos;m </div>
            <div className={styles.word}> Halldór </div>
            <div className={styles.word}> Valberg </div>

          </div>
          <div className={styles.line}>
            <div className={styles.word}> Web </div>
            <div className={styles.word}> & </div>
            <div className={styles.word}> App </div>
            <div className={styles.word}> Developer </div>
          </div>
          <div className={styles.line}>
            <a id='github' className={`${styles.word} ${styles.fancy}`}
            href='https://www.github.com/halldorvalberg' target='_blank'>
              Github
            </a>
            <a id='instagram' className={`${styles.word} ${styles.fancy}`} href='https://www.instagram.com/halldorvalberg/' target='_blank'>
              Instagram
            </a>
            <a id='linkedin' className={`${styles.word} ${styles.fancy}`} href='https://www.linkedin.com/in/halldor-valberg/' target='_blank'>
              Linkedin
            </a>
          </div>
          <div className={styles.line}>
            <a id='email' className={`${styles.word} ${styles.fancy}`} href='mailto:halldor.valberg@hotmail.com' target='_blank'>
              halldor.valberg@hotmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
    );

}
