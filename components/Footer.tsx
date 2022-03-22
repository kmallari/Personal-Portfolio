import React from "react";
import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <>
      <div className='h-auto w-full font-dm bg-black bg-opacity-100 text-white flex flex-row justify-around py-12 z-20'>
        <div className='flex flex-col gap-5 z-20'>
          <h1 className='text-xl font-bold'>Connect with me</h1>
          <div className='text-gray-400 flex flex-col gap-3'>
            <Link href='https://www.linkedin.com/in/kevin-luis-mallari-a4364719a/'>
              <a className='flex flex-row items-center gap-2 hover:text-white transition'>
                <AiFillLinkedin />
                LinkedIn
              </a>
            </Link>
            <Link href='https://github.com/kmallari/'>
              <a className='flex flex-row items-center gap-2 hover:text-white transition'>
                <AiFillGithub />
                GitHub
              </a>
            </Link>
            <Link href='https://www.facebook.com/kevinluismallari/'>
              <a className='flex flex-row items-center gap-2 hover:text-white transition'>
                <AiFillFacebook />
                Facebook
              </a>
            </Link>
            <Link href='https://twitter.com/kevinmallari_'>
              <a className='flex flex-row items-center gap-2 hover:text-white transition'>
                <AiFillTwitterCircle />
                Twitter
              </a>
            </Link>
          </div>
        </div>
        <div className='z-30'>
          <p className='text-right'>
            Made with ♥ by{" "}
            <span className='underline underline-offset-4 text-primary-1 hover:text-primary-2 transition-all z-30 cursor-default'>
              Kevin Mallari
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
