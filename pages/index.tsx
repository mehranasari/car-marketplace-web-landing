import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../shared/Navbar";

import FoldIn from "../sections/FoldIn";
import QuickGuide from "../sections/QuickGuide";
import Introducing from "../sections/Introducing";
import WinWinGame from "../sections/WinWinGame";
import FeaturesList from "../sections/FeaturesList";
import AddaptiveService from "../sections/AddaptiveService";
import CarSale from "../sections/CarSale";
import CarEvaluation from "../sections/CarEvaluation";
import NetworkOfAutoGalleries from "../sections/NetworkOfAutoGalleries";
import PaymentMethods from "../sections/PaymentMethods";
import OptionsList from "../sections/OptionsList";
import ContactForm from "../sections/ContactForm";
import FAQ from "../sections/FAQ";
import SpeedDial from "../sections/SpeedDial";
import MoreInfo from "../sections/MoreInfo";
import Footer from "../shared/Footer";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {

  return (
    <Fragment>
      <Head>
        <title> ماشین‌ باز | پلتفرم حرفه ای فروش و بازاریابی خودرو</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.mashinbuzz.com/" />
        {/* Pre load fonts */}
        <link rel="preload" href="/fonts/iransans-l.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/iransans-m.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/iransans-ul.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/iransans.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        {/* Pre load fonts */}
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="با ماشین‌باز، بازدیدکنندگان می‌توانند از طریق اسکن QR کد به راحتی و بدون نصب هیچ برنامه‌ای به نمایشگاه مجازی شما وارد شوند، خودروهای شما را ببینند و به راحتی با شما از طریق تماس تلفنی یا چت ارتباط برقرار کنند."
        />
        <meta property="og:image" content="/Images/MashinBuzz-banner.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta name="google-site-verification" content="nc9_FpfXhZvnR1n6db_LFEfelX2CvNu9XD0SLyYdlqc" />
      </Head>

      <ToastContainer
        rtl
        autoClose={5000}
        toastClassName="toast"
        position="top-right"
      />

      <Navbar />
      <main className={styles.main}>
        <FoldIn />

        <QuickGuide />

        <Introducing />

        <WinWinGame />

        <FeaturesList />

        <AddaptiveService />

        <CarSale />

        <CarEvaluation />

        <NetworkOfAutoGalleries />

        {/* <PaymentMethods /> */}

        <OptionsList />

        <ContactForm />

        <FAQ />

        <MoreInfo />

        <SpeedDial />

        <Footer />
      </main>
    </Fragment>
  );
};

export default Home;
