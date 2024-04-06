import React from "react";

interface NavItemProps {
  title: string;
  href: string;
}

function NavItem({ title, href }: NavItemProps) {
  return (
    <li className="p-3">
      <a href={href}>{title}</a>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="border-white flex flex-row align-middle justify-between py-3 px-4 border-b-2">
      <h1 className="font-light text-xl pt-2.5 text-pretty">DSN @ U-M</h1>
      <ul className="flex flex-row">
        <NavItem title="Home" href="/home" />
        <NavItem title="About" href="/about" />
        <NavItem title="Who We Are" href="/contact" />
      </ul>
    </nav>
  );
}
