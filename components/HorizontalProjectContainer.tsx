import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdLink, IoLogoGithub } from "react-icons/io";

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
  const x = image_src;
  return (
    <div className='h-1/2 w-full sm:p-4 lg:p-8 flex flex-row gap-4 xl:gap-8 bg-primary-light bg-opacity-5 backdrop-filter backdrop-blur-sm border-2 border-opacity-10 rounded-xl shadow-xl border-primary-light'>
      <Image
        src={image_src}
        alt='preview-of-plinko'
        width={494 / 2}
        height={848 / 3.3}
        quality={100}
        className="rounded-lg"
      />
      <div className='flex flex-col w-full gap-8'>
        <div className='flex flex-row items-center justify-between text-3xl w-full'>
          <h2 className='font-dm font-bold text-primary-1'>{title}</h2>
          <div className='text-primary-light flex flex-row gap-4 items-center text-xl'>
            <Link href={github_link}>
              <a
                className='hover:text-primary-1 cursor-pointer'
                target={"_blank"}
              >
                <IoLogoGithub />
              </a>
            </Link>
            <span className='text-base'>|</span>
            <Link href={live_link}>
              <a
                className='hover:text-primary-1 cursor-pointer'
                target={"_blank"}
              >
                <IoMdLink />
              </a>
            </Link>
          </div>
        </div>
        <p className='text-primary-light transition-all leading-relaxed text-base font-dm_mono -mt-4'>
          {description}
        </p>
        <p className='text-primary-light hover:text-white transition-all leading-relaxed text-sm font-dm_mono -mt-4'>
          <span className='font-bold text-primary-2'>Technologies Used:</span>
          <span className='opacity-50'> {technologies}</span>
        </p>
      </div>
    </div>
  );
};
