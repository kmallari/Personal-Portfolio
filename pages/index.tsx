import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { BlurredBalls } from "../components/BlurredBalls";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();

  const bodyStyle: React.CSSProperties = {
    // backgroundColor: "rgb(13, 13, 14)",
    backgroundSize: "40px 40px",
    // backgroundImage:
    //   theme === "dark"
    //     ? "linear-gradient(\n      to right,\n      rgb(19, 19, 20) 1px,\n      transparent 1px\n    ),\n    linear-gradient(to bottom, rgb(19, 19, 20) 1px, transparent 1px)"
    //     : "linear-gradient(\n      to right,\n      rgb(225, 225, 238) 1px,\n      transparent 1px\n    ),\n    linear-gradient(to bottom, rgb(225, 225, 238) 1px, transparent 1px)",
    backgroundAttachment: "fixed",
    scrollBehavior: "smooth",
    overflowX: "hidden",
  };

  const handleThemeChange = (): void => {
    console.log(theme);
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div
      style={bodyStyle}
      className='bg-slate-200 dark:bg-dark-neutral bg-light-grid dark:bg-dark-grid'
    >
      <Head>
        <title>Kevin Mallari | Portfolio</title>
        <meta name='keywords' content='personal-portfolio' />
      </Head>
      <BlurredBalls theme={theme} />
      <Header />
      <Projects theme={theme} />
      <ContactForm />
      <Footer />
      <Navbar theme={theme} handleThemeChange={handleThemeChange} />
    </div>
  );
};

export default Home;
