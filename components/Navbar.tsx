import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { FiHome, FiInfo, FiCode, FiBriefcase } from "react-icons/fi";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { motion, useCycle, AnimatePresence } from "framer-motion";

interface NavbarProps {
  handleThemeChange: () => void;
  theme: string;
  systemTheme: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  handleThemeChange,
  theme,
  systemTheme,
}) => {
  const [isHamburger, setIsHamburger] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);
  const [showHamburgerMenu, onShowHamburgerMenu] = useCycle<boolean>(
    false,
    true
  );
  const { height, width } = useWindowDimensions();

  const checkHamburger = (): void => {
    if (width != null) {
      if (width <= 768) {
        setIsHamburger(true);
      } else {
        setIsHamburger(false);
        if (showHamburgerMenu === true) {
          onShowHamburgerMenu();
        }
      }
    }
  };

  const handleHamburgerClick = (): void => {
    onShowHamburgerMenu();
  };

  useEffect(() => {
    checkHamburger();
  }, [width]);

  useEffect(() => {
    checkHamburger();
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 20;
      setScroll(!scrollCheck);
    });
  });

  return (
    <>
      <nav
        className={`flex flex-row justify-between h-16 w-full items-center pl-16 pr-16 lg:pl-32 lg:pr-32 font-dm fixed top-0 text-dark-neutral dark:text-white ${
          scroll && "backdrop-blur-sm shadow-xl shadow-gray-300"
        }  dark:shadow-none z-50`}
      >
        <Link href='/'>
          <a>
            <div className='flex flex-row gap-6 items-center'>
              {/* 904 x 1100 */}
              <Image alt='logo' src='/logo.png' width={25.83} height={31.42} />
              <h1 className='text-sm tracking-widest select-none'>
                KEVIN MALLARI
              </h1>
            </div>
          </a>
        </Link>
        {isHamburger ? (
          <div className='flex items-center gap-10'>
            <button
              onClick={handleThemeChange}
              className='bg-dark-neutral dark:bg-primary-light bg-opacity-10 dark:bg-opacity-10 dark:hover:bg-opacity-20 hover:bg-opacity-20 p-2 rounded-full'
            >
              {theme === "light" ? (
                <MdOutlineLightMode />
              ) : (
                <MdOutlineDarkMode />
              )}
            </button>
            <div onClick={handleHamburgerClick} className='cursor-pointer'>
              <RiMenuUnfoldLine
                style={{
                  color:
                    theme === "system"
                      ? systemTheme === "dark"
                        ? "#C4CBCA"
                        : "#0A0F0D"
                      : theme === "light"
                      ? "#0A0F0D"
                      : "#C4CBCA",
                }}
              />
            </div>
          </div>
        ) : (
          <div className='flex flex-row gap-14 h-full items-center'>
            <Link href='/'>
              <a className='flex justify-center items-center h-full select-none group'>
                <div className='flex flex-row gap-2 items-center md:group-hover:text-teal-700 dark:md:group-hover:text-primary-1'>
                  <div className='text-gray-500 dark:text-primary-light md:group-hover:text-teal-700 dark:md:group-hover:text-primary-1'>
                    <FiHome />
                  </div>
                  Home
                </div>
              </a>
            </Link>
            <Link href='#projects'>
              <a className='flex justify-center items-center h-full select-none group'>
                <div className='flex flex-row gap-2 items-center md:group-hover:text-teal-700 dark:md:group-hover:text-primary-1'>
                  <div className='text-gray-500 dark:text-primary-light md:group-hover:text-teal-700 dark:md:group-hover:text-primary-1'>
                    <FiCode />
                  </div>
                  Projects
                </div>
              </a>
            </Link>
            <Link href='#contact'>
              <a className='flex justify-center items-center h-full select-none group'>
                <div className='flex flex-row gap-2 items-center md:group-hover:text-teal-700 dark:md:group-hover:text-primary-1'>
                  <div className='text-gray-500 dark:text-primary-light md:group-hover:text-teal-700 dark:md:group-hover:text-primary-1'>
                    <FiBriefcase />
                  </div>
                  Contact
                </div>
              </a>
            </Link>
            <button
              onClick={handleThemeChange}
              className='bg-dark-neutral dark:bg-primary-light bg-opacity-10 dark:bg-opacity-10 dark:hover:bg-opacity-20 hover:bg-opacity-20 p-2 rounded-full'
            >
              {theme === "light" ? (
                <MdOutlineLightMode />
              ) : (
                <MdOutlineDarkMode />
              )}
            </button>
          </div>
        )}
      </nav>
      <AnimatePresence>
        {showHamburgerMenu && (
          <motion.div
            className='h-screen bg-opacity-10 dark:bg-opacity-50 -sm flex flex-col top-16 w-full fixed overflow-hidden font-dm text-dark-neutral dark:text-white bg-dark-neutral z-50 backdrop-blur-sm'
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -768 }}
          >
            <Link href='/'>
              <a className='select-none pl-12 pt-4 pb-4 w-full overflow-x-hidden md:hover:bg-primary-light hover:bg-opacity-10 group'>
                <div className='flex flex-row gap-4 items-center md:group-hover:text-teal-700 dark:md:group-hover:text-primary-1'>
                  <div className='text-gray-500 dark:text-primary-light md:group-hover:text-teal-700 dark:md:group-hover:text-primary-1'>
                    <FiBriefcase />
                  </div>
                  Home
                </div>
              </a>
            </Link>
            <Link href='#projects'>
              <a className='select-none pl-12 pt-4 pb-4 w-full overflow-x-hidden md:hover:bg-primary-light hover:bg-opacity-10 group'>
                <div className='flex flex-row gap-4 items-center md:group-hover:text-teal-700 dark:md:group-hover:text-primary-1'>
                  <div className='text-gray-500 dark:text-primary-light md:group-hover:text-teal-700 dark:md:group-hover:text-primary-1'>
                    <FiCode />
                  </div>
                  Projects
                </div>
              </a>
            </Link>
            <Link href='#contact'>
              <a className='select-none pl-12 pt-4 pb-4 w-full overflow-x-hidden md:hover:bg-primary-light hover:bg-opacity-10 group'>
                <div className='flex flex-row gap-4 items-center md:group-hover:text-teal-700 dark:md:group-hover:text-primary-1'>
                  <div className='text-gray-500 dark:text-primary-light md:group-hover:text-teal-700 dark:md:group-hover:text-primary-1'>
                    <FiBriefcase />
                  </div>
                  Contact
                </div>
              </a>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
