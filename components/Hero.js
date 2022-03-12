import styles from "./Hero.module.css";
import Image from "next/image";
import { forwardRef } from "react";

export default forwardRef((props,ref)=> {
  return (
    <main ref = {ref} className={`hero ${styles.heroContainer}`}>
      <div className={styles.imageBg}>
        <Image
          className={styles.waveSmall}
          alt={props.alt ? props.alt : ""}
          layout="fill"
          src="/img/hero-wave-small.svg"
        />
        <Image
          className={styles.wave}
          alt={props.alt ? props.alt : ""}
          layout="fill"
          src="/img/hero-wave.svg"
        />
      </div>
      <div className={styles.secundaryContent}>
        <div className={styles.info}>
          <h1>{props.title}</h1>
          <h5>{props.subTitle}</h5>
          {props.description ? (
            <p className="flow-text">{props.description}</p>
          ) : null}
          <a className={`waves-effect yellow black-text waves-light btn ${styles.button}`}>
            Contact Me
          </a>
        </div>
        <div className={styles.primaryImage}>
          <img src={props.primaryImage} />
        </div>
      </div>
    </main>
  );
});
