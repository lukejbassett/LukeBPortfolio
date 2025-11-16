import { navLinks } from "../services/navlinks";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      id="navbar"
      className="sticky top-0 z-100 bg-(--white) dark:bg-[var(--black)] transition-colors duration-250"
    >
      <nav className="web-width mx-auto flex justify-between items-center py-4 px-4">
        <Link to="/">
          <img
            src="./src/components/img/logo-lightmode.png"
            alt=""
            className="w-30 h-auto block dark:hidden transition-opacity duration-250 ease-in-out hover:opacity-60"
          />
          <img
            src="./src/components/img/logo-darkmode.png"
            alt=""
            className="w-30 h-auto hidden dark:block transition-opacity duration-250 ease-in-out hover:opacity-75"
          />
        </Link>

        {/* desktop */}
        <ul className="hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={`/${link.path}`}
                className="
                relative inline-block
                uppercase font-semibold px-4 py-2
                transition-colors duration-200
                hover:text-(--accent)
                
                after:content-['']
                after:absolute after:left-1/2 after:bottom-0
                after:h-[2px]
                after:w-[30%]
                after:bg-(--accent)
                after:-translate-x-1/2
                after:scale-x-0
                after:origin-center
                after:transition-transform after:duration-300
                hover:after:scale-x-100
                
                active:opacity-60
                
                text-[var(--black)]
                dark:text-[var(--white)]
                "
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button onClick={toggleMenu} className="md:hidden z-100">
            {isOpen ? (
              <X
                size={40}
                className="hover:text-red-500 transition-colors cursor-pointer"
              />
            ) : (
              <Menu
                size={40}
                className="hover:opacity-75 transition-opacity cursor-pointer"
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`fixed top-0 left-0 w-full bg-black p-8 transform transition-transform duration-300 ease-in-out z-1 ${
          isOpen ? "translate-y-0 mt-18" : "-translate-y-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <a
                href={`#${link.path}`}
                className="hover:opacity-75 transition-opacity uppercase font-semibold text-white"
                onClick={() => setIsOpen(false)} // close menu on link click
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
