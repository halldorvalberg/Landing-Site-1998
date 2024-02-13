import React from 'react';

import styles from './Bio.module.css';

const Bio = () => {
  return (
    <div className={styles.container}>
      <p>Born October 1998 in Reykjavík Iceland.</p>
      <p>Interested in the art of web design and the occult magic of web development.</p>
      <p>Advocate for sustainability, usability, and accessibility.</p>
      <p>Most often found between a mountain and an ocean.</p>
    </div>
  );
};

export default Bio;
