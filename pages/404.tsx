import { Fragment } from "react";
import styled from "styled-components";
import Head from "next/head";

import StyledButton from "../kit/Button";
import { Col } from "../kit/Column";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import styles from "../styles/Home.module.css";

// import NotFoundImg from "../public/Images/404-not-found.webp";

import BackIcon from "../Icons/BackIcon";

export const NotFoundPageWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 17rem);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5rem;
  @media (max-width: 768px) {
    padding: 6rem 5rem 5rem;
    height: 100vh;
  }
  @media (max-width: 420px) {
    height: calc(100vh - 17rem);
    padding: 2rem;
    @media (max-height: 768px) {
      height: 100vh;
    }
  }
`;

export const NotFoundPageContainer = styled(Col)`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 4.438rem;
  span {
    max-width: 600px !important;
    max-height: 326px !important;
    width: 100% !important;
    @media (max-height: 800px) {
      height: 200px !important;
    }
  }
`;

export const GoToMainPageButton = styled.a`
  position: relative;
  margin-top: 2rem;
  .buttonContainer {
    border-radius: 3.75rem;
    border: 0.063rem solid #e0e0e0;
    color: #424242;
    background-color: #ffffff;
    padding: 1.25rem 1.5rem;
    svg {
      margin-right: 0.75rem;
    }
  }
`;

export default function NotFoundPage() {
  
  return (
    <Fragment>
      <Head>
        <title> ماشین‌ باز | پلتفرم حرفه ای فروش و بازاریابی خودرو</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Pre load fonts */}
        <link rel="preload" href="/fonts/iransans-l.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/iransans-m.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/iransans-ul.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/iransans.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        {/* Pre load fonts */}
        <meta
          name="description"
          content="با ماشین‌باز، بازدیدکنندگان می‌توانند از طریق اسکن QR کد به راحتی و بدون نصب هیچ برنامه‌ای به نمایشگاه مجازی شما وارد شوند، خودروهای شما را ببینند و به راحتی با شما از طریق تماس تلفنی یا چت ارتباط برقرار کنند."
        />
        <meta property="og:image" content="/Images/MashinBuzz-banner.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta name="google-site-verification" content="nc9_FpfXhZvnR1n6db_LFEfelX2CvNu9XD0SLyYdlqc" />
        <meta property="og:image:height" content="200" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <NotFoundPageWrapper>
          <NotFoundPageContainer>
            <h1>صفحه ‌ای که دنبال آن بودید، یافت نشد :(</h1>
            {/* <Image
              src={NotFoundImg}
              alt="404-not-found"
              layout="fixed"
              priority
            /> */}
            <GoToMainPageButton href="/">
              <StyledButton>
                صفحه اصلی
                <BackIcon />
              </StyledButton>
            </GoToMainPageButton>
          </NotFoundPageContainer>
        </NotFoundPageWrapper>
        <Footer />
      </main>
    </Fragment>
  );
}
