import styles from "./Work.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    import("materialize-css").then((M) => {
      const collapsible = document.querySelector(".collapsible.popup");
      M.Collapsible.init(collapsible);
    });
  });
  return (
    <>
      <div className="container">
        <div className="section">
          <div name = "Work" className="row">
            <h2>Work</h2>
            <div className="divider"></div>
            <div className="section">
              <div className={`col s12 m4 no-padding`}>
                <h4 className={styles.noMargin}>Insiemp</h4>
                <span>2019 - 2021</span>
              </div>
            </div>
            <div className={`col s12 m8`}>
              <p className={styles.noMargin}>
                I worked as a frontend developer with a team to develop a web
                application to make virtual classrooms using html, css, javascript
                and Socket.io. <br />I developed the frontend of the website of
                Insiemp&apos;s client educational institutions.
              </p>
            </div>
          </div>
          <div className="row">
            <h2 className="header">Recent Projects</h2>
            <ul className="collapsible popup">
              <li>
                <div className="collapsible-header">Portfolio</div>
                <div className="collapsible-body no-padding">
                  <div className="card z-depth-0">
                    <div className="card-image">
                      <Image src="/img/portfolio.png" alt="portfolio" layout="fill" />
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <p>A portfolio site made with nextjs.</p>
                      </div>
                      <div className="card-action">
                        <Link href="https://github.com/willisq/portfolio">
                          <a className="black-text">See on Github</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="collapsible-header">Calculator</div>
                <div className="collapsible-body no-padding">
                  <div className="card z-depth-0">
                    <div className="card-image">
                      <Image src="/img/calculator.png" layout="fill" alt="" />
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <p>A simple calculator made with javascript modules.</p>
                      </div>
                      <div className="card-action">
                        <Link href="https://github.com/willisq/Calculadora">
                          <a className="black-text">See on Github</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
