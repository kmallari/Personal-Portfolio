import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Old from "./old";

const Home: NextPage = () => {
  const bodyStyle: React.CSSProperties = {
    backgroundSize: "40px 40px",
    backgroundAttachment: "fixed",
    scrollBehavior: "smooth",
    overflowX: "hidden",
  };

  return (
    <>
      <Head>
        <title>Kevin Mallari | Portfolio</title>
        <meta name='keywords' content='personal-portfolio' />
      </Head>
      <div
        style={bodyStyle}
        className='h-screen flex flex-col items-center justify-center z-50'
      >
        <h1 className='text-blue-400 text-3xl fon-bold z-50'>
          A new website is under construction.
        </h1>
        <h2 className='text-slate-200 text-xl my-4 z-50'>In the meantime...</h2>
        <p className='text-slate-400 z-50'>
          You can contact me through{" "}
          <span className='hover:underline hover:underline-offset-2 hover:text-white transition-all'>
            kevin.mallari@gmail.com
          </span>
        </p>
        <p className='text-slate-400 z-50'>
          To visit the old website, {" "}
          <Link href='/old'>
            <a className='text-blue-400 underline hover:text-blue-600'>
              click here.
            </a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Home;
