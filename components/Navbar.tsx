import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { FiHome, FiInfo, FiCode, FiBriefcase } from "react-icons/fi";
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
    false,
    true
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
        <div className='flex flex-row gap-6 items-center'>
          {/* 904 x 1100 */}
          <Image alt='logo' src='/logo.png' width={25.83} height={31.42} />
          <h1 className='text-sm tracking-widest select-none'>KEVIN MALLARI</h1>
        </div>
        {isHamburger ? (
          <div onClick={handleHamburgerClick} className='cursor-pointer'>
            <RiMenuUnfoldLine style={{ color: "#C4CBCA" }} />
          </div>
        ) : (
          <div className='flex flex-row gap-14 h-full items-center'>
            <Link href='/'>
              <a className='flex justify-center items-center h-full transition-all select-none group'>
                <div className='flex flex-row gap-2 items-center group-hover:text-primary-1'>
                  <div className='text-primary-light group-hover:text-primary-1'>
                    <FiHome />
                  </div>
                  Home
                </div>
              </a>
            </Link> 
            <Link href='#projects'>
              <a className='flex justify-center items-center h-full transition-all select-none group'>
                <div className='flex flex-row gap-2 items-center group-hover:text-primary-1'>
                  <div className='text-primary-light group-hover:text-primary-1'>
                    <FiCode />
                  </div>
                  Projects
                </div>
              </a>
            </Link>
            <Link href='#contact'>
              <a className='flex justify-center items-center h-full transition-all select-none group'>
                <div className='flex flex-row gap-2 items-center group-hover:text-primary-1'>
                  <div className='text-primary-light group-hover:text-primary-1'>
                    <FiBriefcase />
                  </div>
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
            className='h-screen bg-opacity-20 backdrop-filter backdrop-blur-sm flex flex-col top-16 w-full fixed overflow-hidden font-dm text-white'
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -768 }}
          >
            <Link href='/'>
              <a className='select-none pl-12 pt-4 pb-4 w-full overflow-x-hidden hover:bg-primary-light hover:bg-opacity-10 group'>
                <div className='flex flex-row gap-4 items-center group-hover:text-primary-1'>
                  <div className='text-primary-light group-hover:text-primary-1'>
                    <FiBriefcase />
                  </div>
                  Home
                </div>
              </a>
            </Link>
            <Link href='#projects'>
              <a className='select-none pl-12 pt-4 pb-4 w-full overflow-x-hidden hover:bg-primary-light hover:bg-opacity-10 group'>
                <div className='flex flex-row gap-4 items-center group-hover:text-primary-1'>
                  <div className='text-primary-light group-hover:text-primary-1'>
                    <FiCode />
                  </div>
                  Projects
                </div>
              </a>
            </Link>
            <Link href='#contact'>
              <a className='select-none pl-12 pt-4 pb-4 w-full overflow-x-hidden hover:bg-primary-light hover:bg-opacity-10 group'>
                <div className='flex flex-row gap-4 items-center group-hover:text-primary-1'>
                  <div className='text-primary-light group-hover:text-primary-1'>
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
