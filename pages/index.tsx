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
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        // TO SOMETHING HERE
        console.log("Reached bottom");
      }
    }
  };

  return (
    <>
      <BlurredBalls />
      <Header />
      <Projects />
      <ContactForm />
      <Footer />
      <Navbar />
    </>
  );
};

export default Home;
