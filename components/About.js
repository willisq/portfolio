import styles from "./About.module.css";
import Link from "next/link";
export default function About(props) {
  const textColor = "grey-text text-darken-2";
  return (
    <div name="About" className="section">
      <div className="row section">
        <h1>William Suarez</h1>
        <div className="col s12 l4">
          <Link href="https://github.com/willisq">
            <a className={`${textColor} ${styles.mediaInfo}`}>
              github.com/willisq
            </a>
          </Link>
        </div>
        <div className="col s12 l4">
          <Link href="https://es.stackoverflow.com/users/185054/william-suarez">
            <a className={`${textColor} ${styles.mediaInfo}`}>
              es.stackoverflow.com/users/185054
            </a>
          </Link>
        </div>
      </div>
      <div className="section col s12">
        <p className={`flow-text ${styles.resumeDescription}`}>
          I am a web developer with experience in handling different
          technologies such as HTML, CSS and javascript, as well as different
          libraries such as React, Materialize, Socket.io among others. I can
          help you solve problems quickly and efficiently.
        </p>
      </div>
      <div className="row section no-pad-bot">
        <h2>skills</h2>
        <div className="divider"></div>
        <div className={styles.listGroup}>
        <ul>
          <li>
            <h3 className={styles.listTitle}>Frontend</h3>
          </li>
          <li>
            <p>HTML</p>
          </li>
          <li>
            <p>CSS</p>
          </li>
          <li>
            <p>javascript</p>
          </li>
          <li>
            <p>React</p>
          </li>
          <li>
            <p>React router</p>
          </li>
          <li>
            <p>Materialize</p>
          </li>
        </ul>
        <ul>
          <li>
            <h3 className={styles.listTitle}>Backend</h3>
          </li>
          <li>
            <p>Node</p>
          </li>
          <li>
            <p>Socket.io</p>
          </li>
          <li>
            <p>Express</p>
          </li>
          <li>
            <p>Postgres</p>
          </li>
          <li>
            <p>Next</p>
          </li>
        </ul>
        <ul >
          <li>
            <h3 className={styles.listTitle}>Tools</h3>
          </li>
          <li>
            <p>Adobe xd</p>
          </li>
          <li>
            <p>Pencil</p>
          </li>
          <li>
            <p>insomnia</p>
          </li>
          <li>
            <p>PgAdmin</p>
          </li>
          <li>
            <p>Github</p>
          </li>
          <li>
            <p>Gitlab</p>
          </li>
          <li>
            <p>Power Arquitect</p>
          </li>
        </ul>
        </div>
      </div>
      <div className="row section">
        <h2 >Work</h2>
        <div className="divider"></div>
        <div className={`col s12 m4 ${styles.sectionMargin}`}>
          <h3 className={styles.noMargin}>Insiemp</h3>
          <span>2021</span>
        </div>
        <div className={`col s12 m8 ${styles.sectionMargin}`} >
          <p className={styles.noMargin}>
I worked as a frontend developer with a team to develop a web application to make virtual classes using html, css, javascript and Socket.io.</p>
        </div>
      </div>
    </div>
  );
}
