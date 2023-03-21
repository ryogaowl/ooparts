// components/Header.js

import Link from "next/link";
import Image from "next/image";
import pic from "public/images/logo2.png";
function Header() {
  return (
    <header className="z-50 fixed w-full bg-black !important text-white">
      <nav className="z-50 text-xl bg-black container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link href="/" className="h-10 w-64">
            <Image src={pic} alt="LOGO" />
          </Link>
        </div>
        <div className="flex items-center">
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
            <Link href="/works" className="hover:text-gray-300">
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
      </nav>
    </header>
  );
}

export default Header;
