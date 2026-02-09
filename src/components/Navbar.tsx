import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router";
import { useRef, useState, Activity } from "react";

export default function Navbar() {
  const navButtonRef = useRef(null);
  const navMenuRef = useRef(null);
  return (
    <nav className="grid ">
      <button
        type="button"
        className="flex h-full p-2 border rounded-full  place-content-between lg:hidden z-3"
        ref={navButtonRef}
      >
        <IoMenu />
      </button>
      <ul
        className="grid pt-10 lg:pt-2 absolute p-2 gap-2 rounded-2xl lg:flex lg:flex-row lg:relative border backdrop-blur-xs z-2"
        ref={navMenuRef}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
