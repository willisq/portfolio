import styles from "./Hero.module.css";
import Image from "next/image";
import { forwardRef } from "react";
import Link from "next/link";

const Hero = forwardRef((props, ref) => {
  return (
    <main ref={ref} className={`hero ${styles.heroContainer}`}>
      <div className={styles.imageBg}>
        <Image
          priority
          className={styles.waveSmall}
          alt={props.alt ? props.alt : ""}
          layout="fill"
          src="/img/hero-wave-small.svg"
        />
        <Image
          priority
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
          <Link href="mailto: williamsuarezdev@gmail.com">
            <a
              className={`waves-effect yellow black-text waves-light btn ${styles.button}`}
            >
              Contact Me
            </a>
          </Link>
        </div>
        <div className={styles.primaryImage}>
          <img src={props.primaryImage} />
        </div>
      </div>
    </main>
  );
});
Hero.displayName = "Hero";

export default Hero;
