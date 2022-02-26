import Link from "next/link";

export default function LinkList(props){
  const makeLinks = (active) => props.links.map((link,index) =>{
    let icon = link.icon ? <i className="material-icons left">{link.icon}</i> : null;
    let icon2 = link.dropdown ? <i className="material-icons right">arrow_drop_down</i> : null;
    return(
      <li key = {index} className={props.active === link.title && active ? 'active' : null} >
        <Link href = {link.link}>
          <a  data-target = {link.dropdown ? props.side ? link.dropdown + 'side' : link.dropdown : null} className={`${props.linksClassName} ${link.button === true ? 'waves-effect btn':''} ${link.dropdown ? "dropdown-trigger": ""}`}>{icon}{link.title}{icon2} </a>
        </Link>
      </li>
    );
  });
    return <ul id={props.id ? props.id : null} className = {props.className}>{makeLinks(props.active)}</ul>
}