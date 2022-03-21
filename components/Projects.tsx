import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { HorizontalProjectContainer } from "./HorizontalProjectContainer";
import { IoMdLink, IoLogoGithub } from "react-icons/io";

interface ProjectsProps {}

// TO MAKE RESPONSIVE

export const Projects: React.FC<ProjectsProps> = ({}) => {
  const { height, width } = useWindowDimensions();
  const [isWidthSmall, setIsWidthSmall] = useState<boolean>(false);

  useEffect(() => {
    if (width != null) {
      if (width <= 1024) {
        setIsWidthSmall(true);
      } else {
        setIsWidthSmall(false);
      }
    }
  }, [width]);

  return (
    <div
      id='projects'
      className='w-full h-auto flex self-start items-center my-32'
    >
      <div className='flex flex-row self-start gap-8 justify-center h-2/3 w-full'>
        {isWidthSmall ? null : (
          <div className='h-auto w-1/3 sm:p-4 lg:p-8 flex flex-col object-contain gap-8 bg-primary-light bg-opacity-5 backdrop-filter backdrop-blur-sm border-2 border-opacity-10 rounded-xl shadow-xl border-primary-light'>
            <div className='object-contain'>
              <Image
                src='/portfolio.png'
                alt='portfolio-preview'
                width={1690 / 2.4}
                height={961 / 2.4}
                quality={100}
                className='rounded-xl'
              />
            </div>
            <div className='flex flex-row items-center justify-between text-3xl'>
              <h2 className='font-dm font-bold text-primary-1'>
                {width != null && width >= 1280 
                  ? "Personal Portfolio"
                  : "Portfolio"}
              </h2>
              <div className='text-primary-light flex flex-row gap-8 items-center text-xl'>
                <Link href='https://github.com/kmallari/Personal-Portfolio'>
                  <a
                    className='hover:text-primary-1 cursor-pointer'
                    target={"_blank"}
                  >
                    <IoLogoGithub />
                  </a>
                </Link>
                <span className='text-base'>|</span>
                <Link href='/'>
                  <a className='hover:text-primary-1 cursor-pointer'>
                    <IoMdLink />
                  </a>
                </Link>
              </div>
            </div>
            <p className='text-primary-light transition-all leading-relaxed text-sm font-dm_mono -mt-4'>
              You&apos;re looking at it! This is where I showcase the personal
              projects that I&apos;m especially pleased with.
            </p>
            <p className='text-primary-light transition-all leading-relaxed text-base font-dm_mono -mt-4'>
              I&apos;m proud of the outcome of the website, especially when it
              comes to the aesthetics.
            </p>
            <p className='text-primary-light hover:text-white transition-all leading-relaxed text-sm font-dm_mono -mt-4'>
              <span className='font-bold text-primary-2'>
                Technologies Used:
              </span>
              <span className='opacity-50'>
                {" "}
                NextJS, React, TypeScript, Tailwind CSS, Framer Motion
              </span>
            </p>
          </div>
        )}

        <div className='flex flex-col justify-center items-center gap-8 lg:w-2/4 xl:w-1/3'>
          {isWidthSmall ? (
            <HorizontalProjectContainer
              github_link='https://github.com/kmallari/Personal-Portfolio'
              live_link='/'
              image_src='/portfolio_vertical.png'
              title='Portfolio'
              description="You're looking at it! It's where I showcase the personal projects that I'm especially pleased with. I'm proud of the outcome of the website, especially when it comes to the aesthetics."
              technologies='React, TypeScript, NextJS, Tailwind CSS, Framer Motion'
            />
          ) : null}
          <HorizontalProjectContainer
            github_link='https://github.com/kmallari/plinko'
            live_link='https://kmallari.github.io/plinko/'
            image_src='/plinko.png'
            title='Plinko'
            description="A Plinko game inspired by stake.com's Plinko game. Since this version is not meant to be used for real gambling, the user can set their own balance to start playing the game."
            technologies='React, Vanilla CSS, Framer Motion'
          />
          <HorizontalProjectContainer
            github_link='https://github.com/kmallari/typr-client'
            live_link='https://typr-client-fpg5jvb1g-kmallari.vercel.app/'
            image_src='/typr.png'
            title='typr.'
            description="typr is a typing speed test. It's a simple web app that allows users to test their typing speed. Heavy inspiration from monkeytype.com was used in crafting the website."
            technologies='React, TypeScript, NextJS, Tailwind CSS, AWS Lambda'
          />
        </div>
      </div>
    </div>
  );
};