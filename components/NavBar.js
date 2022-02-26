import { useEffect } from "react";
import LinkList from "./LinksList";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function NavBar(props) {
  let dropdowns, dropdownsSide;
  useEffect(() => {
    import("materialize-css").then((M) => {
      let sideNav = document.querySelectorAll(".sidenav");
      M.Sidenav.init(sideNav, {});
      let elems = document.querySelectorAll(".dropdown-trigger");
      M.Dropdown.init(elems, { hover: true });
      window.Waves.displayEffect();
    });
  });
  if(props.Dropdown){
    dropdowns = props.dropdown.map((dropdown, index) => (
      <LinkList
        key = {index}
        links={dropdown.data}
        id={dropdown.id}
        className="dropdown-content"
      />
    ));
    dropdownsSide = props.dropdown.map((dropdown, index) => (
      <LinkList
        key = {index}
        links={dropdown.data}
        id={dropdown.id + "side"}
        className="dropdown-content"
      />
    ));
  }

  return (
    <>
      <nav
        className={`${styles.navbarWrapper} ${props.color} ${
          props.color + props.extended ? "nav-extended" : ""
        }`}
      >
        <div className="nav-wrapper">
          <Link href="/">
            <a className={`brand-logo ${styles.logo}`}>{props.logo}</a>
          </Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons ">menu</i>
          </a>
          <LinkList
            active={props.active}
            className="right hide-on-med-and-down"
            links={props.links}
          />
        </div>
        {props.children}
      </nav>
      {dropdowns}
      {dropdownsSide}
      <LinkList side className="sidenav" id="mobile-demo" links={props.links} />
    </>
  );
}
