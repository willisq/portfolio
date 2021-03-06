import LinkList from "./LinksList";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
export default function Footer(props) {
  let links = <LinkList links={props.links} linksClassName="white-text" />;
  let icon = (
    <ul className={`right col s8 ${styles.iconList}`}>
      {props.icons.map((option, index) => {
        return (
          <li key={"icon" + index}>
            <Link href={option.link}>
              <a className={styles.image}>
                <Image alt="" src={option.iconSrc} height="24" width="24" />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  return (
    <>
      <div className={styles.footerContainer}>
        <Image src="/img/footer-wave.svg" layout="fill" alt="" />
        <footer className={`page-footer ${props.color} ${styles.footer}`}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">{props.title}</h5>
                <p className="grey-text text-lighten-4">
                  Feel free to reach out to me any time
                </p>
                <Link href="mailto: williamsuarezdev@gmail.com">
                  <a className="flow-text white-text">
                    williamsuarezdev@gmail.com
                  </a>
                </Link>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">{props.sectionsTitle}</h5>
                {links}
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <div className="row valign-wrapper">
                <p className="col s4">{props.copyRightText}</p>
                {icon}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
