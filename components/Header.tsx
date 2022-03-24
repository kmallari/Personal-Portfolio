import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiDownArrow } from "react-icons/bi";
import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/useWindowDimensions";

interface HeaderProps {}

const lines: number[] = [];
for (let i = 0; i < 21; i++) {
  lines.push(i);
}

export const Header: React.FC<HeaderProps> = ({}) => {
  const { height, width } = useWindowDimensions();
  const bday = new Date("June 2, 99 00:00:00 GMT+8:00");
  const [diff, setDiff] = useState<number>(0);

  setTimeout(() => {
    const now = new Date();
    setDiff(now.getTime() - bday.getTime());
  }, 40);

  const heightToThirty = (height: number) => {
    return 22 / height;
  };

  return (
    <section
      id='home'
      className='h-auto min-h-full relative flex flex-col items-center justify-center cursor-default mt-32 my-16'
    >
      <div className='flex flex-row items-center justify-center gap-8 lg:gap-16'>
        <div className='w-2/3 md:w-1/3'>
          <h2
            className='text-4xl lg:text-5xl font-dm font-bold text-teal-700 dark:text-primary-1 leading-normal select-text drop-shadow-md dark:drop-shadow-lg'
            data-aos='fade-down'
            data-aos-easing='ease-in-out'
          >
            I&apos;m Kevin, a{" "}
            <span className='font-dm_mono hover:text-primary-2 dark:hover:text-primary-light'>
              {(diff / (1000 * 60 * 60 * 24 * 365)).toFixed(9)}
            </span>{" "}
            year-old developer.
          </h2>
          <p
            className='text-gray-600 drop-shadow-md dark:drop-shadow-none dark:text-primary-light font-dm_mono w-2/3 leading-relaxed mt-8 tracking-wide text-sm lg:text-base'
            data-aos='fade-down'
            data-aos-easing='ease-in-out'
            data-aos-delay='200'
          >
            I am a passionate and goal-oriented Computer Engineering student
            from Ateneo de Manila University who is interested in the field of
            software development and cloud computing.
          </p>

          <div
            className='mx-auto lg:mt-12 pt-8 flex flex-col gap-8 items-start'
            data-aos='fade-down'
            data-aos-easing='ease-in-out'
            data-aos-delay='400'
          >
            <h3 className='uppercase text-primary-2 text-sm font-dm_mono font-bold whitespace-nowrap'>
              I HAVE EXPERIENCE IN:
            </h3>
            <div className='flex w-5/6 flex-row gap-4 lg:gap-8 flex-wrap items-center'>
              <Image
                className='brightness-50 hover:brightness-0 dark:brightness-100 dark:hover:brightness-200'
                src='/react.png'
                width={
                  width != null && width > 1200
                    ? 761 * heightToThirty(213)
                    : (761 * heightToThirty(213)) / 1.3
                }
                height={
                  width != null && width > 1200
                    ? 213 * heightToThirty(213)
                    : (213 * heightToThirty(213)) / 1.3
                }
                alt='react-logo'
              />
              <Image
                className='brightness-50 hover:brightness-0 dark:brightness-100 dark:hover:brightness-200'
                src='/next.png'
                width={
                  width != null && width > 1200
                    ? 800 * heightToThirty(479)
                    : (800 * heightToThirty(479)) / 1.3
                }
                height={
                  width != null && width > 1200
                    ? 479 * heightToThirty(479)
                    : (479 * heightToThirty(479)) / 1.3
                }
                alt='nextjs-logo'
              />
              <Image
                className='brightness-50 hover:brightness-0 dark:brightness-100 dark:hover:brightness-200'
                src='/typescript.png'
                width={
                  width != null && width > 1200
                    ? 1024 * heightToThirty(213)
                    : (1024 * heightToThirty(213)) / 1.3
                }
                height={
                  width != null && width > 1200
                    ? 213 * heightToThirty(213)
                    : (213 * heightToThirty(213)) / 1.3
                }
                alt='ts-logo'
              />
              <Image
                className='brightness-50 hover:brightness-0 dark:brightness-100 dark:hover:brightness-200'
                src='/html_css_js.png'
                width={
                  width != null && width > 1200
                    ? 2108 * heightToThirty(1000)
                    : (2108 * heightToThirty(1000)) / 1.3
                }
                height={
                  width != null && width > 1200
                    ? 1000 * heightToThirty(1000)
                    : (1000 * heightToThirty(1000)) / 1.3
                }
                alt='html_css_js-logo'
              />
              <Image
                className='brightness-50 hover:brightness-0 dark:brightness-100 dark:hover:brightness-200'
                src='/tailwind.png'
                width={
                  width != null && width > 1200
                    ? 863 * heightToThirty(107)
                    : (863 * heightToThirty(107)) / 1.3
                }
                height={
                  width != null && width > 1200
                    ? 107 * heightToThirty(107)
                    : (107 * heightToThirty(107)) / 1.3
                }
                alt='tailwindcss-logo'
              />
              <Image
                className='brightness-50 hover:brightness-0 dark:brightness-100 dark:hover:brightness-200'
                src='/aws.png'
                width={
                  width != null && width > 1200
                    ? 1280 * heightToThirty(718)
                    : (1280 * heightToThirty(718)) / 1.3
                }
                height={
                  width != null && width > 1200
                    ? 718 * heightToThirty(718)
                    : (718 * heightToThirty(718)) / 1.3
                }
                alt='tailwindcss-logo'
              />
              <Image
                className='brightness-50 hover:brightness-0 dark:brightness-100 dark:hover:brightness-200'
                src='/postgres.png'
                width={
                  width != null && width > 1200
                    ? 3749 * heightToThirty(560)
                    : (3749 * heightToThirty(560)) / 1.3
                }
                height={
                  width != null && width > 1200
                    ? 560 * heightToThirty(560)
                    : (560 * heightToThirty(560)) / 1.3
                }
                alt='tailwindcss-logo'
              />
              <Image
                className='brightness-50 hover:brightness-0 dark:brightness-100 dark:hover:brightness-200'
                src='/python.png'
                width={
                  width != null && width > 1200
                    ? 1200 * heightToThirty(293)
                    : (1200 * heightToThirty(293)) / 1.3
                }
                height={
                  width != null && width > 1200
                    ? 293 * heightToThirty(293)
                    : (293 * heightToThirty(293)) / 1.3
                }
                alt='tailwindcss-logo'
              />
            </div>
          </div>
        </div>

        {width != null && width >= 768 ? (
          <div className='h-auto w-auto font-dm_mono text-gray-600 dark:text-primary-light flex flex-col items-center text-tiny lg:text-xs xl:text-sm mb-28'>
            <div
              className='h-full w-full sm:p-4 lg:p-8 flex flex-row lg:gap-4 xl:gap-4 bg-dark-neutral dark:bg-primary-light bg-opacity-5 dark:bg-opacity-5 hover:bg-opacity-0 dark:hover:bg-opacity-10 -md border-2 border-opacity-5 dark:border-opacity-10 rounded-xl shadow-2xl dark:shadow-xl border-dark-neutral dark:border-primary-light'
              data-aos='fade-down'
              data-aos-easing='ease-in-out'
              data-aos-delay='600'
            >
              <div className='absolute -left-24 -bottom-24 lg:-left-32 lg:-bottom-48'>
                <Image
                  data-aos='fade-down'
                  data-aos-easing='ease-in-out'
                  data-aos-delay='400'
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
              <div className='z-10'>
                {/* display each line in lines */}
                {lines.map((line: number) => (
                  <p key={line}>{line + 1}</p>
                ))}
              </div>

              <div className='drop-shadow-md'>
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
      <a
        className='mt-16 xl:mt-32 w-10 h-10 rounded-full border-2 dark:border-2 border-dark-neutral dark:border-primary-light drop-shadow-lg text-dark-neutral dark:text-primary-light flex items-center justify-center opacity-20 dark:opacity-25 hover:opacity-30 dark:hover:opacity-80'
        href='#projects'
      >
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
      </a>
    </section>
  );
};
