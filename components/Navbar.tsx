import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { FiHome, FiInfo, FiCode, FiBriefcase } from "react-icons/fi";
import { IconContext } from "react-icons";
import { motion, useCycle, AnimatePresence } from "framer-motion";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  //   const glass = {
  // "background": "rgba(145, 150, 153, 0.2)",
  // "borderRadius": "16px",
  // "boxShadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
  // backdrop-filter: blur(5px),
  // -webkit-backdrop-filter: blur(5px),
  // "border": "1px solid rgba(145, 150, 153, 0.3)"
  // }

  const [isHamburger, setIsHamburger] = useState<boolean>(false);
  const [showHamburgerMenu, onShowHamburgerMenu] = useCycle<boolean>(
    true,
    false
  );
  const { height, width } = useWindowDimensions();

  const checkHamburger = (): void => {
    if (width != null) {
      if (width <= 768) {
        setIsHamburger(true);
        // setShowHamburgerMenu(false);
      } else {
        setIsHamburger(false);
        if (showHamburgerMenu === true) {
          onShowHamburgerMenu();
        }
      }
    }
  };

  const handleHamburgerClick = (): void => {
    console.log(showHamburgerMenu);
    onShowHamburgerMenu();
  };

  useEffect(() => {
    checkHamburger();
  }, [width]);

  useEffect(() => {
    checkHamburger();
  }, []);

  return (
    <>
      <nav
        className={`bg-dark-neutral bg-opacity-20
         backdrop-filter backdrop-blur-sm shadow-xl flex flex-row justify-between h-16 w-full items-center pl-16 pr-16 lg:pl-32 lg:pr-32 font-dm fixed top-0 text-white transition-all`}
      >
        {/* {`width: ${width}, isHamburger: ${isHamburger}`} */}
        <h1>Test</h1>
        {isHamburger ? (
          <div onClick={handleHamburgerClick} className='cursor-pointer'>
            <RiMenuUnfoldLine style={{ color: "#C4CBCA" }} />
          </div>
        ) : (
          <div className='flex flex-row gap-14 h-full items-center'>
            <Link href='/'>
              <a className='flex justify-center items-center h-full hover:text-primary-1 transition-all'>
                <div className='flex flex-row gap-2 items-center'>
                  <FiHome />
                  Home
                </div>
              </a>
            </Link>
            <Link href='#about'>
              <a className='flex justify-center items-center h-full hover:text-primary-1 transition-all'>
                <div className='flex flex-row gap-2 items-center'>
                  <FiInfo />
                  About
                </div>
              </a>
            </Link>
            <Link href='#projects'>
              <a className='flex justify-center items-center h-full hover:text-primary-1 transition-all'>
                <div className='flex flex-row gap-2 items-center'>
                  <FiCode />
                  Projects
                </div>
              </a>
            </Link>
            <Link href='#contact'>
              <a className='flex justify-center items-center h-full hover:text-primary-1 transition-all'>
                <div className='flex flex-row gap-2 items-center'>
                  <FiBriefcase />
                  Contact
                </div>
              </a>
            </Link>
          </div>
        )}
      </nav>
      <AnimatePresence>
        {showHamburgerMenu && (
          <motion.div
            className='bg-opacity-20 backdrop-filter backdrop-blur-sm flex flex-col top-16 w-full fixed overflow-hidden font-dm text-white'
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -768 }}
          >
            <Link href='/'>
              <a className='select-none pl-12 pt-4 pb-4 w-full overflow-x-hidden hover:bg-dark-neutral hover:text-primary-1 hover:bg-opacity-10 transition-all'>
                <div className='flex flex-row gap-4 items-center'>
                  <FiBriefcase style={{ color: "#C4CBCA" }} />
                  Home
                </div>
              </a>
            </Link>
            <Link href='#about'>
              <a className='select-none pl-12 pt-4 pb-4 w-full overflow-x-hidden hover:bg-dark-neutral hover:text-primary-1 hover:bg-opacity-10 transition-all'>
                <div className='flex flex-row gap-4 items-center'>
                  <FiInfo />
                  About
                </div>
              </a>
            </Link>
            <Link href='#projects'>
              <a className='select-none pl-12 pt-4 pb-4 w-full overflow-x-hidden hover:bg-dark-neutral hover:text-primary-1 hover:bg-opacity-10 transition-all'>
                <div className='flex flex-row gap-4 items-center'>
                  <FiCode />
                  Projects
                </div>
              </a>
            </Link>
            <Link href='#contact'>
              <a className='select-none pl-12 pt-4 pb-4 w-full overflow-x-hidden hover:bg-dark-neutral hover:text-primary-1 hover:bg-opacity-10 transition-all'>
                <div className='flex flex-row gap-4 items-center'>
                  <FiBriefcase />
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
