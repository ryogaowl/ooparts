import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import pic from "public/images/logo2.png";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  if (process.browser) {
    if (openMenu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }
  return (
    <>
      <header className="z-40 fixed top-0 w-full bg-black !important text-white ">
        <nav className=" z-50 text-xl bg-black container mx-auto px-4 flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="h-10 w-64">
              <Image src={pic} alt="LOGO" />
            </Link>
          </div>
          <div className="lg:flex hidden  items-center">
            <div className="mx-4 border-b-2 border-transparent hover:border-gray-300">
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </div>
            <div className="mx-4 border-b-2 border-transparent hover:border-gray-300">
              <Link href="/service" className="hover:text-gray-300">
                Service
              </Link>
            </div>
            <div className="mx-4 border-b-2 border-transparent hover:border-gray-300">
              <Link href="/#works" className="hover:text-gray-300">
                Works
              </Link>
            </div>
            <div className="mx-4 border-b-2 border-transparent hover:border-gray-300">
              <Link href="/news" className="hover:text-gray-300">
                News
              </Link>
            </div>
            <div className="mx-4 border-b-2 border-transparent hover:border-gray-300">
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </div>
          </div>
          <button
            onClick={handleMenuOpen}
            type="button"
            className="lg:hidden block absolute right-5 top-6 z-50 space-y-2"
          >
            <div
              className={
                openMenu
                  ? "w-8 h-0.5 bg-white translate-y-2.5 rotate-45"
                  : "w-8 h-0.5 bg-white"
              }
            />
            <div className={openMenu ? "opacity-0" : "w-8 h-0.5 bg-white"} />
            <div
              className={
                openMenu
                  ? "w-8 h-0.5 bg-white -rotate-45"
                  : "w-8 h-0.5 bg-white"
              }
            />
          </button>
        </nav>
      </header>
      <div
        className={
          openMenu ? "h-screen w-screen bg-black  fixed z-30" : undefined
        }
      >
        <nav className={openMenu ? "block" : "hidden"}>
          <ul className="text-center text-white">
            <li className="mt-52 text-3xl font-bold">
              <Link
                onClick={handleMenuOpen}
                href="/about"
                className="hover:text-gray-300"
              >
                About
              </Link>
            </li>
            <li className="mt-14 text-3xl font-bold">
              <Link
                onClick={handleMenuOpen}
                href="/service"
                className="hover:text-gray-300"
              >
                Service
              </Link>
            </li>
            <li className="mt-14 text-3xl font-bold">
              <Link
                onClick={handleMenuOpen}
                href="/#works"
                className="hover:text-gray-300"
              >
                Works
              </Link>
            </li>
            <li className="mt-14 text-3xl font-bold">
              <Link
                onClick={handleMenuOpen}
                href="/news"
                className="hover:text-gray-300"
              >
                News
              </Link>
            </li>
            <li className="mt-14 text-3xl font-bold">
              <Link
                onClick={handleMenuOpen}
                href="/contact"
                className="hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
