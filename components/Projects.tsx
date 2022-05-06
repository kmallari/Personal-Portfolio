import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { HorizontalProjectContainer } from "./HorizontalProjectContainer";
import { IoMdLink, IoLogoGithub, IoMdBookmarks } from "react-icons/io";
import { motion } from "framer-motion";

interface ProjectsProps {
  theme: string;
}

export const Projects: React.FC<ProjectsProps> = ({ theme }) => {
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
      className='w-full h-auto flex flex-col self-start items-center py-24'
      data-aos='fade-down'
      data-aos-easing='ease-in-out'
      data-aos-delay='0'
    >
      <h1 className='font-dm text-4xl text-primary-1 mb-12 font-bold'>
        Projects
      </h1>
      {isWidthSmall ? (
        <div className='flex flex-col gap-8 md:w-5/6 w-11/12 '>
          <HorizontalProjectContainer
            github_link='https://github.com/kmallari/5F-Dataset-and-Emotiv-EpocX-EEGNet-Training-Notebooks'
            live_link=''
            image_src={"/thesis_paper.png"}
            title='Undergraduate Thesis'
            description='We collected EEG data from a
            BCI and trained a neural network. The
            trained network was then used to control a prosthetic hand in
            real-time. The study was nominated as one, out of 21 studies in the
            department, to present in the AdMU SOSE Student Research Symposium.'
            technologies='Python, pandas, NumPy, PyTorch, mne'
          />
          <HorizontalProjectContainer
            github_link='https://github.com/kmallari/Personal-Portfolio'
            live_link='/'
            image_src={
              theme === "light"
                ? "/portfolio_vertical_light.png"
                : "/portfolio_vertical.png"
            }
            title='Portfolio'
            description="You're looking at it! It's where I showcase the personal projects that I'm especially pleased with. I'm proud of the outcome of the website, especially when it comes to the aesthetics."
            technologies='React, TypeScript, NextJS, Tailwind CSS, Framer Motion'
          />
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
            live_link='https://typr-client.vercel.app/'
            image_src='/typr.png'
            title='typr.'
            description="typr is a typing speed test. It's a simple web app that allows users to test their typing speed. Heavy inspiration from monkeytype.com was used in crafting the website."
            technologies='React, TypeScript, NextJS, Tailwind CSS, AWS Lambda'
          />
        </div>
      ) : (
        <div className='grid grid-cols-4 lg:grid-rows-3 grid-rows-4 gap-8 w-2/3 '>
          <motion.div
            whileHover={{
              scale: 1.025,
              transition: { duration: 0.1 },
            }}
            className='col-span-4 sm:p-4 lg:p-8 flex flex-row object-contain gap-8 bg-primary-light bg-opacity-40 dark:bg-opacity-5 border-2 border-opacity-10 rounded-xl shadow-xl border-primary-light hover:bg-opacity-30 dark:hover:bg-opacity-10'
          >
            <div className='object-contain'>
              <Image
                src='/thesis_demo.gif'
                alt='portfolio-preview'
                width={320}
                height={240}
                quality={100}
                className='rounded-xl'
              />
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between gap-12 items-center'>
                <h2 className='font-dm font-bold text-teal-700 dark:text-primary-1 text-2xl'>
                  Development of an EEG-based Brain-Controlled System for a
                  Virtual Prosthetic Hand
                </h2>
                <h3 className='font-dm_mono text-primary-light text-sm w-auto inline text-center'>
                  (Undergraduate Study)
                </h3>
                <div className='text-dark-neutral dark:text-primary-light flex flex-row gap-3 items-center text-xl'>
                  <Link href='https://github.com/kmallari/5F-Dataset-and-Emotiv-EpocX-EEGNet-Training-Notebooks'>
                    <a
                      className='hover:text-gray-600 dark:hover:text-primary-1 cursor-pointer'
                      target={"_blank"}
                    >
                      <IoLogoGithub />
                    </a>
                  </Link>
                  <span className='text-base'>|</span>
                  <Link href=''>
                    <a className='hover:text-gray-700 dark:hover:text-gray-500 cursor-not-allowed'>
                      <IoMdBookmarks />
                    </a>
                  </Link>
                </div>
              </div>
              <p className='text-gray-600 dark:text-primary-light leading-relaxed text-sm font-dm_mono my-4'>
                We collected electroencephalographic (EEG) data from a
                Brain-Computer Interface and trained a neural network. The
                trained network was then used to control a prosthetic hand in
                real-time.
              </p>
              <p className='text-gray-600 dark:text-primary-light leading-relaxed text-sm font-dm_mono mb-4'>
                The study was nominated as one, out of 21 studies in the
                department, to present in the Ateneo de Manila University School
                of Science and Engineering Student Research Symposium.{" "}
              </p>

              <p className='text-gray-600 hover:text-gray-900 dark:text-primary-light dark:hover:text-white  leading-relaxed text-sm font-dm_mono'>
                <span className='font-bold text-primary-2'>
                  Technologies Used:{" "}
                </span>
                <span className='opacity-50'>
                  Python, pandas, NumPy, PyTorch, mne
                </span>
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.025,
              transition: { duration: 0.1 },
            }}
            className='col-span-2 row-span-2 sm:p-4 lg:p-8 flex flex-col gap-8 bg-primary-light bg-opacity-40 dark:bg-opacity-5 border-2 border-opacity-10 rounded-xl shadow-xl border-primary-light hover:bg-opacity-30 dark:hover:bg-opacity-10'
          >
            <div className='object-contain'>
              <Image
                src={
                  theme === "light" ? "/portfolio_light.png" : "/portfolio.png"
                }
                alt='portfolio-preview'
                width={1690 / 2.4}
                height={961 / 2.4}
                quality={100}
                className='rounded-xl'
              />
            </div>
            <div className='flex flex-row items-center justify-between text-3xl'>
              <h2 className='font-dm font-bold text-teal-700 dark:text-primary-1'>
                {width != null && width >= 1280
                  ? "Personal Portfolio"
                  : "Portfolio"}
              </h2>
              <div className='text-dark-neutral dark:text-primary-light flex flex-row gap-8 items-center text-xl'>
                <Link href='https://github.com/kmallari/Personal-Portfolio'>
                  <a
                    className='hover:text-gray-600 dark:hover:text-primary-1 cursor-pointer'
                    target={"_blank"}
                  >
                    <IoLogoGithub />
                  </a>
                </Link>
                <span className='text-base'>|</span>
                <Link href='/'>
                  <a className='hover:text-gray-600 dark:hover:text-primary-1 cursor-pointer'>
                    <IoMdLink />
                  </a>
                </Link>
              </div>
            </div>
            <p className='text-gray-600 dark:text-primary-light leading-relaxed text-sm font-dm_mono -mt-4'>
              You&apos;re looking at it! This is where I showcase the personal
              projects that I&apos;m especially pleased with.
            </p>
            <p className='text-gray-600 dark:text-primary-light leading-relaxed text-sm font-dm_mono -mt-4'>
              I&apos;m proud of the outcome of the website, especially when it
              comes to the aesthetics.
            </p>
            <p className='text-gray-600 hover:text-gray-900 dark:text-primary-light dark:hover:text-white  leading-relaxed text-sm font-dm_mono -mt-4'>
              <span className='font-bold text-primary-2'>
                Technologies Used:{" "}
              </span>
              <span className='opacity-50'>
                NextJS, React, TypeScript, Tailwind CSS, Framer Motion
              </span>
            </p>
          </motion.div>
          <div className='col-span-2 row-span-1'>
            <HorizontalProjectContainer
              github_link='https://github.com/kmallari/plinko'
              live_link='https://kmallari.github.io/plinko/'
              image_src='/plinko.png'
              title='Plinko'
              description="A Plinko game inspired by stake.com's Plinko game. Since this version is not meant to be used for real gambling, the user can set their own balance to start playing the game."
              technologies='React, Vanilla CSS, Framer Motion'
            />
          </div>
          <div className='col-span-2 row-span-1'>
            <HorizontalProjectContainer
              github_link='https://github.com/kmallari/typr-client'
              live_link='https://typr-client.vercel.app/'
              image_src='/typr.png'
              title='typr.'
              description="typr is a typing speed test. It's a simple web app that allows users to test their typing speed. Heavy inspiration from monkeytype.com was used in crafting the website."
              technologies='React, TypeScript, NextJS, Tailwind CSS, AWS Lambda'
            />
          </div>
        </div>
      )}
    </div>
  );
};
