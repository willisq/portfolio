import Link from "next/link";
import Image from "next/image";
import styles from "../styles/404.module.css";
export default function Get404(){
  return (
      <div className="container section">
        <h6 className="center-align">Oops!</h6>
        <h3 className="center-align">Something went wrong...</h3>
        <div className={`row ${styles.imageContainer}`}>
          <Image src="/img/404.svg" layout="fill" alt="404 image" priority />
        </div>
        <p className="flow-text center-align">
          The page you are looking for doesn&apos;t seem to exist or has been moved
          to a new location
        </p>
        <Link href="/">
          <a className="black-text "><h4 className="center-align">Let&apos;s go back Home</h4></a>
        </Link>
      </div>
  );
};
