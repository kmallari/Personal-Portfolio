import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdLink, IoLogoGithub } from "react-icons/io";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <div id='projects' className='w-full h-screen flex items-center'>
      <div className='flex flex-row gap-8 justify-center h-2/3 w-full'>
        <div className='h-full w-1/3 sm:p-4 lg:p-8 flex flex-col lg:gap-4 xl:gap-8 bg-primary-light bg-opacity-5 backdrop-filter backdrop-blur-sm border-2 border-opacity-10 rounded-xl shadow-xl border-primary-light transition-all'>
          <Image
            src='/portfolio.png'
            alt='portfolio-preview'
            width={1690 / 2.4}
            height={961 / 2.4}
            quality={100}
            className='rounded-xl'
          />
          <div className='flex flex-row items-center justify-between text-3xl'>
            <h2 className=' font-dm font-bold text-primary-1'>
              Personal Portfolio
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
          <p className='text-primary-light transition-all leading-relaxed text-base font-dm_mono -mt-4'>
            You&apos;re looking at it! This is where I showcase the personal
            projects that I&apos;m especially pleased with.
          </p>
          <p className='text-primary-light transition-all leading-relaxed text-base font-dm_mono -mt-4'>
            I&apos;m proud of the outcome of the website, especially when it
            comes to the aesthetics, which includes the general design and
            animations.
          </p>
          <p className='text-primary-light hover:text-white transition-all leading-relaxed text-sm font-dm_mono -mt-4'>
            <span className='font-bold text-primary-2'>Technologies Used:</span>
            <span className='opacity-50'>
              {" "}
              NextJS, React, Tailwind CSS, Framer Motion
            </span>
          </p>
        </div>
        <div className='flex flex-col gap-8 w-1/3'>
          <div className='h-1/2 w-full sm:p-4 lg:p-8 flex flex-row lg:gap-4 xl:gap-4 bg-primary-light bg-opacity-5 hover:bg-opacity-10 backdrop-filter backdrop-blur-sm border-2 border-opacity-10 rounded-xl shadow-xl border-primary-light transition-all'></div>
          <div className='h-1/2 w-full sm:p-4 lg:p-8 flex flex-row lg:gap-4 xl:gap-4 bg-primary-light bg-opacity-5 hover:bg-opacity-10 backdrop-filter backdrop-blur-sm border-2 border-opacity-10 rounded-xl shadow-xl border-primary-light transition-all'></div>
        </div>
      </div>
    </div>
  );
};
