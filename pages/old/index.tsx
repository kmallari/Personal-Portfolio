import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { Projects } from "../../components/Projects";
import { BlurredBalls } from "../../components/BlurredBalls";
import { ContactForm } from "../../components/ContactForm";
import { Footer } from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const Old: NextPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();
  const bodyStyle: React.CSSProperties = {
    backgroundSize: "40px 40px",
    backgroundAttachment: "fixed",
    scrollBehavior: "smooth",
    overflowX: "hidden",
  };

  const handleThemeChange = (): void => {
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
        <title>Kevin Mallari | Old Portfolio</title>
        <meta name='keywords' content='personal-portfolio' />
      </Head>
      <BlurredBalls theme={theme} />
      <Header />
      <Projects theme={theme} />
      <ContactForm />
      <Footer />
      <Navbar
        systemTheme={systemTheme}
        theme={theme}
        handleThemeChange={handleThemeChange}
      />
    </div>
  );
};

export default Old;
