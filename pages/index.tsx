import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
};

export default Home;
