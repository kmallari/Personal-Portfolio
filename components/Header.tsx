import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BiDownArrow } from "react-icons/bi";
import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/useWindowDimensions";

interface HeaderProps {}

const lines: number[] = [];
for (let i = 0; i < 21; i++) {
  lines.push(i);
  console.log("DOES THIS RUN?");
}

export const Header: React.FC<HeaderProps> = ({}) => {
  const { height, width } = useWindowDimensions();
  const bday = new Date("June 2, 99 00:00:00 GMT+8:00");
  const [diff, setDiff] = useState<number>(0);

  setTimeout(() => {
    const now = new Date();
    setDiff(now.getTime() - bday.getTime());
  }, 40);

  return (
    <div
      id='home'
      className='h-screen relative flex flex-col items-center justify-center '
    >
      <div className='flex flex-row items-center justify-center gap-8 lg:gap-16'>
        <div className='w-2/3 md:w-1/3'>
          <h2 className='text-5xl md:text-4xl lg:text-5xl font-dm font-bold text-primary-1 leading-normal select-text drop-shadow-lg'>
            I&apos;m Kevin, a{" "}
            <span className='font-dm_mono transition-all hover:text-white'>
              {(diff / (1000 * 60 * 60 * 24 * 365)).toFixed(9)}
            </span>{" "}
            year-old developer.
          </h2>
          <p className='text-primary-light font-dm_mono w-2/3 leading-relaxed mt-8 tracking-wide text-sm lg:text-base'>
            I am a passionate and goal-oriented Computer Engineering student
            from Ateneo de Manila University who is interested in the field of
            software development and cloud computing.
          </p>
        </div>

        {width != null && width >= 768 ? (
          <div className='h-auto w-auto sm:p-4 lg:p-8 bg-primary-light bg-opacity-5 hover:bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-xl border-primary-light border-2 border-opacity-10 rounded-xl font-dm_mono text-primary-light flex flex-col items-center text-tiny lg:text-xs xl:text-sm mb-28 transition-all'>
            <div className='flex flex-row lg:gap-4 xl:gap-4'>
              <div className='absolute -left-20 -bottom-20 lg:-left-40 lg:-bottom-32 -z-10 shadow-2xl'>
                <Image
                  src='/me.png'
                  width={
                    window.innerWidth >= 1280
                      ? 640 / 2.5
                      : window.innerWidth >= 1024
                      ? 640 / 3
                      : 640 / 4
                  }
                  height={
                    window.innerWidth >= 1280
                      ? 771 / 2.5
                      : window.innerWidth >= 1024
                      ? 771 / 3
                      : 771 / 4
                  }
                  quality={100}
                  alt={"picture of developer"}
                />
              </div>
              <div>
                {/* display each line in lines */}
                {lines.map((line: number) => (
                  <p key={line}>{line + 1}</p>
                ))}
              </div>

              <div className='drop-shadow-lg'>
                <p>import React from &quot;react&quot;;</p>
                <br />
                <p>interface TodoProps &#123;</p>
                <p>&nbsp;&nbsp;todo: [];</p>
                <p>&#125;</p>
                <br />
                <p>
                  const Todo: React.FC &lt;TodoProps&gt; = &#40;&#123; todo
                  &#125;&#41; =&gt; &#123;
                </p>
                <p>&nbsp;&nbsp;return &#40;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;todo.map&#40;</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#40;todo:
                  &#123; title: string; description: string &#125;,
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index:
                  number&#41; =&gt; &#40;
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                  key= &#123;index&#125;&gt;
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&#123;todo.title&#125;&lt;/p&gt;
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&#123;todo.description&#125;&lt;/p&gt;
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#41;
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#41;&#125;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&#47;&gt;</p>
                <p>&nbsp;&nbsp;&#41;</p>
                <p>&#125;</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <button className='absolute bottom-4 w-10 h-10 rounded-full border-2 border-primary-light drop-shadow-lg text-primary-light flex items-center justify-center transition-all opacity-25 hover:opacity-80'>
        <motion.div
          animate={{
            y: [3, -3, 3],
          }}
          transition={{
            duration: 2,
            loop: Infinity,
            ease: "easeInOut",
          }}
        >
          <BiDownArrow />
        </motion.div>
      </button>
    </div>
  );
};
