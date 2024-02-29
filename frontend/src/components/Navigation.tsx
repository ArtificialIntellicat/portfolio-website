'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import EmailIcon from './EmailIcon';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';
import ThemeToggle from './ThemeToggle';
import { IoMenu, IoClose } from "react-icons/io5";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (anchor: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
    e?.preventDefault();
    const destination = `/${anchor}`;
    if (router.pathname !== '/') {
      router.push(destination);
    } else {
      document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 fixed top-0 bg-[#5470c8] dark:bg-[#4e56a7]`}>
      <nav className="flex justify-between items-center text-white text-lg font-bold py-2 lowercase nav">

        {/* Hamburger Menu Icon (Visible on small screens) */}
        <div className="flex md:hidden px-2">
          <div className="flex flex-col items-start px-2">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <IoClose className="text-white" size={25} /> : <IoMenu className="text-white" size={25} />}
            </button>
          </div>
          <div className="items-center">
            <ThemeToggle />
          </div>
        </div>

         {/* Mobile Menu (Visible when menu is open) */}
         <div className={`absolute top-full left-0 w-full bg-[#5470c8] dark:bg-[#4e56a7] md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-start py-2">
            <Link href="/" onClick={() => window.scrollTo(0, 0)} className="hover-effect py-1 px-2 cursor-pointer">
              Home
            </Link>
            <a onClick={(e) => handleNavigation('#about', e)} className="hover-effect py-1 px-2 cursor-pointer">About Me</a>
            <a onClick={(e) => handleNavigation('#cv', e)} className="hover-effect py-1 px-2 cursor-pointer">CV</a>
            <a onClick={(e) => handleNavigation('#portfolio', e)} className="hover-effect py-1 px-2 cursor-pointer">Portfolio</a>
            <a onClick={(e) => handleNavigation('#blog', e)} className="hover-effect py-1 px-2 cursor-pointer">Blog</a>
          </div>
          <div className="flex justify-left py-2 px-2 gap-4">
            <EmailIcon className="icon-hover" />
            <GitHubIcon className="icon-hover" />
            <LinkedInIcon className="icon-hover" />
          </div>
        </div>

        {/* Desktop Menu (Hidden on small screens) */}
        <div className="flex-grow justify-center hidden md:flex">
          <div className="flex basis-1/4"></div>
          <div className="flex basis-1/2 justify-center gap-4">
            <Link href="/" onClick={() => window.scrollTo(0, 0)} className="hover-effect cursor-pointer">
              Home
            </Link>
            <a onClick={(e) => handleNavigation('#about', e)} className="hover-effect cursor-pointer">About Me</a>
            <a onClick={(e) => handleNavigation('#cv', e)} className="hover-effect cursor-pointer">CV</a>
            <a onClick={(e) => handleNavigation('#portfolio', e)} className="hover-effect cursor-pointer">Portfolio</a>
            <a onClick={(e) => handleNavigation('#blog', e)} className="hover-effect cursor-pointer">Blog</a>
          </div>
          <div className="flex basis-1/4 gap-4 justify-end">
            <EmailIcon className="icon-hover" />
            <GitHubIcon className="icon-hover" />
            <LinkedInIcon className="icon-hover" />
            <div className="border-l-2 border-white px-3 items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      <style jsx global>{`
          .nav {
              font-family: 'SciFly-Sans', sans-serif;
              font-size: 25px;
          }
      `}</style>
    </header>
  );
};

export default Navigation;
