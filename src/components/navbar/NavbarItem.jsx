import { NavLink } from "react-router-dom";
import "./../../index.css";

export function NavbarItem(props) {
  return (
    <li className="py-2">
      <NavLink
        to={props.link}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-text font-inter font-semibold text-base before:content-['>_']"
            : "text-text font-inter font-semibold text-base"
        }>
        {props.name}
      </NavLink>
    </li>
  );
}
