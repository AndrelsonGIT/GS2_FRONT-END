import React, { useEffect, useState } from 'react';
import styles from "./Reloading.module.css"

interface ReloadingProps {
  reloadingText: string;
  navigateTo: string;
}

const Reloading: React.FC<ReloadingProps> = ({ reloadingText, navigateTo }) => {
  const [text, setText] = useState(reloadingText);
  const [textCounter, setTextCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (textCounter === 3) {
        setText(reloadingText);
        setTextCounter(0);
      } else {
        setText((prevText) => prevText + '.');
        setTextCounter((prevCounter) => prevCounter + 1);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [textCounter, reloadingText]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = navigateTo;
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigateTo]);

  return (
    <div className={styles.reloadingContainer}>
      <h2 className={styles.reloadingText}>{text}</h2>
      <h3 className={styles.reloadingSubtext}>Você irá voltar para a tela inicial</h3>
      <img
        src="https://i.pinimg.com/originals/1c/13/f3/1c13f3fe7a6bba370007aea254e195e3.gif"
        className={styles.reloadingImage}
        alt="Loading animation"
      />
    </div>
  );
};

export default Reloading;
