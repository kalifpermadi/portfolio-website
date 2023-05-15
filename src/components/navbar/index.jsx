import { NavbarItem } from "./NavbarItem";
import "./../../index.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function Navbar() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(() => !show);
  }
  const links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Projects', link: '/work' },
  ];
  
  return (
    <nav className="z-10 lg:h-screen lg:items-center lg:flex p-4 bg-tertiary lg:fixed">
      <button className="lg:hidden" onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} color="#FDFCFC" className="w-8 h-8" />
      </button>
      <ul className={show ? 'inline' : 'hidden lg:inline'}>
        {links.map((link) => (
          <NavbarItem key={link.link} name={link.name} link={link.link} />
        ))}
      </ul>
    </nav>
  );
}
