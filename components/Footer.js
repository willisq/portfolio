import LinkList from "./LinksList";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
export default function Footer(props) {
  let links = <LinkList links={props.links} linksClassName="white-text" />;
  console.log(props.icons);
  let icon = (
    <ul className={`right col s8 ${styles.iconList}`}>
      {props.icons.map((option, index) => {
        return (
          <li key={"icon" + index}>
            <Link href={option.link}>
              <a className={styles.image}>
                <Image alt= "" src={option.iconSrc} height="24" width="24" />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  return (
    <footer className={`page-footer ${props.color}`}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">{props.title}</h5>
            <p className="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
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
  );
}
