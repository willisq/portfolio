import styles from "./About.module.css";
import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="container">
        <div name="About" className="section">
          <div className="section col s12">
            <h6>A few words about me</h6>
            <p className={`flow-text ${styles.resumeDescription}`}>
              I am a web developer with 4+ years experience in handling
              different technologies such as HTML, CSS and javascript, as well
              as different libraries such as React, Materialize, Socket.io among
              others. I can help you solve problems quickly and efficiently.
            </p>
          </div>
          <div className="row no-pad-bot">
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
                <li>
                  <p>Next</p>
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
              </ul>
              <ul>
                <li>
                  <h3 className={styles.listTitle}>Tools</h3>
                </li>
                <li>
                  <p>Adobe xd</p>
                </li>
                <li>
                  <p>Figma</p>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
