import React from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { IoMdLink, IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";

interface HorizontalProjectContainerProps {
  github_link: string;
  live_link: string;
  image_src: string;
  title: string;
  description: string;
  technologies: string;
}

export const HorizontalProjectContainer: React.FC<
  HorizontalProjectContainerProps
> = ({
  github_link,
  live_link,
  image_src,
  title,
  description,
  technologies,
}) => {
  const { height, width } = useWindowDimensions();

  return (
    <motion.div
      className='h-auto w-5/6 lg:w-full lg:h-1/2 p-8 flex flex-row object-contain gap-8 bg-primary-light bg-opacity-40 dark:bg-opacity-5 border-2 border-opacity-10 rounded-xl shadow-xl border-primary-light hover:bg-opacity-30 dark:hover:bg-opacity-10'
      whileHover={{
        scale: 1.025,
        transition: { duration: 0.1 },
      }}
    >
      <div className='object-contain'>
        <Image
          src={image_src}
          alt='preview-of-plinko'
          width={width != null && width > 1024 ? 494 / 2 : 494 / 3}
          height={width != null && width > 1024 ? 848 / 2 : 848 / 3}
          quality={100}
          className='rounded-lg'
        />
      </div>
      <div className='flex flex-col w-full gap-8'>
        <div className='flex flex-col-reverse md:flex-row gap-4 justify-between text-3xl w-full'>
          <h2 className='font-dm font-bold text-teal-700 dark:text-primary-1'>
            {title}
          </h2>
          <div className='text-dark-neutral dark:text-primary-light flex flex-row gap-4 items-center text-xl'>
            <Link href={github_link}>
              <a
                className='hover:text-gray-600 dark:hover:text-primary-1 cursor-pointer'
                target={"_blank"}
              >
                <IoLogoGithub />
              </a>
            </Link>
            <span className='text-base cursor-default'>|</span>
            <Link href={live_link}>
              <a
                className='hover:text-gray-600 dark:hover:text-primary-1 cursor-pointer'
                target={"_blank"}
              >
                <IoMdLink />
              </a>
            </Link>
          </div>
        </div>
        <p className='text-gray-600 hover:text-gray-600 dark:text-primary-light leading-relaxed text-sm font-dm_mono -mt-4'>
          {description}
        </p>
        <p className='text-gray-600 hover:text-gray-700 dark:text-primary-light dark:hover:text-white leading-relaxed text-sm font-dm_mono -mt-4'>
          <span className='font-bold text-primary-2'>Technologies Used:</span>
          <span className='opacity-50'> {technologies}</span>
        </p>
      </div>
    </motion.div>
  );
};
