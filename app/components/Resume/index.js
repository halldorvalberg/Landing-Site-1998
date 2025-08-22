import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import styles from './MarkdownResume.module.css';

const URLS = {
    is: 'https://raw.githubusercontent.com/halldorvalberg/CV/main/ferilskr%C3%A1.md',
    en: 'https://raw.githubusercontent.com/halldorvalberg/CV/main/resume.md',
};

export default function MarkdownResume() {
    const [content, setContent] = useState('');
    const [lang, setLang] = useState('is');

    useEffect(() => {
        fetch(URLS[lang])
            .then(res => res.text())
            .then(md => setContent(marked(md)));
    }, [lang]);

    return (
            <div className={styles.glassmorphicResumeContainer}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5em', marginBottom: '0.5em' }}>
                    <button
                        className={lang === 'is' ? styles.selectedLangButton : styles.langButton}
                        onClick={() => setLang('is')}
                        aria-label="Icelandic"
                    >
                        is
                    </button>
                    <button
                        className={lang === 'en' ? styles.selectedLangButton : styles.langButton}
                        onClick={() => setLang('en')}
                        aria-label="English"
                    >
                        en
                    </button>
                </div>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
    );
}
