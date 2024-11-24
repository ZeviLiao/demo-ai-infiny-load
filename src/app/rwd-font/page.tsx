import React from "react";
import styles from "./page.module.scss";

const RwdFontDemo: React.FC = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Responsive Typography Demo</h1>
      <p className={styles.paragraph}>
        <span className={styles.firstLetter}>R</span>esponsive design is a key element of modern web development, ensuring that websites provide an optimal experience across all devices, from mobile phones to large desktop screens.
      </p>
      <p className={styles.paragraph}>
        <span className={styles.firstLetter}>T</span>ypography is a cornerstone of user experience. Ensuring that text remains legible and visually appealing on different screen sizes requires careful consideration and implementation of responsive font strategies.
      </p>
      <p className={styles.paragraph}>
        <span className={styles.firstLetter}>I</span>n this demonstration, we highlight the importance of using relative units like <code>rem</code>, along with global font-size adjustments based on media queries, to create scalable and accessible typography.
      </p>
      <footer className={styles.footer}>
        <p className={styles.author}>Author: John Doe</p>
        <p className={styles.intro}>
          John specializes in front-end development with a focus on accessible and responsive web design.
        </p>
        <p className={styles.updated}>Last updated: November 24, 2024</p>
      </footer>
    </main>
  );
};

export default RwdFontDemo;
