'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import HeaderLink from './HeaderLink';
import { headerData } from './Menudata';
import Logo from './Logo';
import MobileHeader from './MobileHeader';
import { CTAButton } from '@/components/shared/CTAButton';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const router = useRouter();

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
        <div className="w-full max-w-[82.8rem] mx-auto px-5 sm:px-7 py-3">
          <nav
            className={`flex items-center justify-between transition-all duration-300 ${
              sticky
                ? 'rounded-full shadow-sm bg-white/95 backdrop-blur-md px-4 py-3'
                : 'px-4 py-3 bg-transparent'
            }`}
          >
            <div className="flex items-center">
              <Logo />
            </div>
            {/* Desktop Navigation Menu - visible from 1025px (lg) and above */}
            <div className="hidden lg:flex bg-dark_black/5 rounded-3xl py-3 px-1">
              <ul className="flex gap-0 2xl:gap-1.5">
                {headerData.map((item, index) => (
                  <HeaderLink key={index} item={item} activeLink={activeLink} />
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-2 xl:gap-4">
              {/* CTA Button - visible from 1025px (lg) and above */}
              <div className="flex items-center gap-2">
                <CTAButton
                  href="/contact"
                  className="hidden lg:inline-flex px-4 py-2 text-sm shadow-lg"
                  labelClassName="text-sm font-NeueMontreal"
                  arrowSize={20}
                >
                  Get Started
                </CTAButton>
              </div>
              {/* Burger Menu - only visible below 1024px */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="flex lg:hidden items-center justify-center w-10 h-10 text-darkBlue hover:text-primaryYellow transition-colors duration-200 -mr-2"
                aria-label="Toggle mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <path d="M4.5 12h15M4.5 6.23h15M4.5 17.77h15" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        {/* Mobile sidebar - only visible below 1024px */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out w-full max-w-xs ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50 flex flex-col`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 flex-shrink-0">
            <h2 className="text-lg font-bold font-NeueMontreal text-darkBlue">Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Close mobile menu"
              className="flex items-center justify-center w-10 h-10 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-darkBlue"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <ul className="flex flex-col gap-0">
              {headerData.map((item, index) => (
                <MobileHeader
                  key={index}
                  item={item}
                  onClose={() => setSidebarOpen(false)}
                />
              ))}
            </ul>
            <div className="flex flex-col items-center gap-3 px-2 mt-6 pb-4">
              <CTAButton
                href="/contact"
                className="w-full justify-center px-4 py-3 text-base shadow-lg"
                labelClassName="text-center font-NeueMontreal"
                arrowSize={20}
              >
                Get Started
              </CTAButton>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

