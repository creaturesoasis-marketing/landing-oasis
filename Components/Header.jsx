"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"; // Import useState for dropdown
import logo from "../Assets/LOGO.png";
import { MdShoppingCartCheckout, MdMenu, MdClose } from "react-icons/md";

const navlinks = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Offers", path: "http://www.creaturesoasis.com/sales" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      <div className="flex justify-between items-center py-5 px-5 md:px-7 ">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src={logo}
              width={60}
              alt="logo"
              className="w-[70px] sm:w-auto"
              priority={1}
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex">
          <ul className="flex space-x-6">
            {navlinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={pathname === item.path ? "activeLink" : ""}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Shop Now Button */}
        <div className="hidden md:inline-flex">
          <Link
            href="https://www.creaturesoasis.com"
            className="inline-flex items-center gap-1 bg-yellow-500 text-xs text-white p-3 rounded-xl hover:bg-gradient-to-r from-yellow-500 to-blue-800"
          >
            SHOP NOW <MdShoppingCartCheckout className="text-2xl hover:text-blue-800" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navlinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`${
                    pathname === item.path ? "activeLink" : ""
                  } block text-center w-full py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://www.creaturesoasis.com"
                className="inline-flex items-center gap-1 bg-yellow-500 text-xs text-white p-3 rounded-xl hover:bg-gradient-to-r from-yellow-500 to-blue-800"
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP NOW <MdShoppingCartCheckout className="text-2xl hover:text-blue-800" />
              </Link>
            </li>
          </ul>
        </div>
      )}

      <hr className="mx-10 text-blue-800" />
    </div>
  );
};

export default Header;
