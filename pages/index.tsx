import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { BlurredBalls } from "../components/BlurredBalls";
import { ContactForm } from "../components/ContactForm";

const Home: NextPage = () => {
  return (
    <>
      {/* <BlurredBalls /> */}
      <Header />
      <Projects />
      <ContactForm />
      <Navbar />
    </>
  );
};

export default Home;
