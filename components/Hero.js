import styles from './Hero.module.css';
import Image from 'next/image';
export default function Hero(props){
    return (
        <main className={styles.heroContainer}>
          <div className={styles.imageBg}>
            <Image alt= {props.alt? props.alt : ''} layout='fill' src= {props.imgSrc}/>
          </div>
          <div className={styles.info}>
            <h1>{props.title}</h1>
            <h5 >{props.subTitle}</h5>
          </div>
        </main>
      );
}