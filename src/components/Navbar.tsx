import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="grid border">
      <button
        type="button"
        className="flex h-full border place-content-between lg:hidden"
      >
        navbar
      </button>
      <ul className="grid border pt-8 lg:pt-2 absolute p-2 gap-2 rounded-2xl lg:flex lg:flex-row lg:relative">
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
