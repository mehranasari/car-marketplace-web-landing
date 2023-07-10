/* eslint-disable react-hooks/exhaustive-deps */
import React, { SyntheticEvent, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { gsap, TweenLite } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import StyledButton from "../kit/Button";
import { Col } from "../kit/Column";
import { Row } from "../kit/Row";
import LinearProgress from "../components/quickGuide/LinearProgress";

import styles from "../styles/Home.module.css";

import QuickGuideImg from "../public/Images/QuickGuideImg.png";
import QuickGuideImg1 from "../public/Images/QuickGuideImg1.png";
import EasySvg from "../public/Images/Easy.svg";
import QuickGuideSvg3 from "../public/Images/QuickGuideSvg3.svg";

export const QuickGuideWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 6.875rem 10rem 6.875rem 14.75rem;
  font-family: irs-m;
  overflow: hidden;
  @media (max-width: 1440px) {
    padding: 4.875rem 7.75rem 0;
  }
  @media (max-width: 1024px) {
    padding: 4.875rem 8.75rem;
    height: 1000px;
  }
  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
  @media (max-width: 420px) {
    padding: 2rem 2rem 5rem;
    //height: auto;
  }

  @media (max-height: 420px) {
    height: auto;
  }
`;

export const QuickGuideDetailsWrapper = styled(Col)`
  width: 40.875rem;
  justify-content: flex-start;
  @media (max-width: 1440px) {
    width: 30rem;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const QuickGuideDetailsTitle = styled(Row)`
  font-size: 2.1rem;
  font-weight: 500;
  line-height: 3.75rem;
  letter-spacing: -0.02em;
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    line-height: 2.75rem;
  }
`;

export const QuickGuideSvg1Container = styled(Row)`
  width: 100%;
  height: 10%;
  position: absolute;
  right: 55%;
  @media only screen and (max-width: 1199x) and (min-width: 1020px) {
    right: 67%;
  }
  @media only screen and (max-width: 1440px) and (min-width: 1200px) {
    right: 47%;
  }
  @media only screen and (max-width: 1740px) and (min-width: 1441px) {
    right: 48%;
    height: 23%;
  }
  @media (max-width: 1024px) {
    right: 75%;
    top: 7%;
    width: 90px;
  }
  @media (max-width: 340px) {
    right: 60%;
    top: 8%;
  }
`;
export const QuickGuideSvg3Container = styled(Row)`
  width: 12rem;
  position: absolute;
  right: 13rem;
  @media only screen and (max-width: 1024px) and (min-width: 770px) {
    right: 19rem;
    top: 5.5rem;
  }
  @media only screen and (max-width: 1440px) and (min-width: 1025px) {
    width: 100%;
    right: 23rem;
  }
  @media only screen and (min-width: 1441px) {
    width: 100%;
    right: 25rem;
  }
`;

export const QuickGuideDetailsImageContainer = styled(Row)`
  position: relative;
  margin: 2rem 0;
  height: 100%;
  width: 100%;
  .mobileImages {
    border-radius: 25%;
  }
  @media (min-width: 1025px) {
    display: none;
  }
`;

export const QuickGuideDetailsContainer = styled(Col)`
  width: 100%;
  justify-content: flex-start;
  margin-top: 2.5rem;
  @media (max-width: 1024px) {
    margin-top: 0.5rem;
    justify-content: center;
  }
`;

export const Scan_Order_PayContainer = styled(Row) <{ translateAmount: number }>`
  flex-wrap: nowrap;
  transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
  @media (max-width: 1024px) {
    height: 5.625rem;
  }
  @media (max-width: 768px) {
    position: relative;
    right: 0;
  }
  @media only screen and (min-width: 1025px) and (max-width: 2300px) {
    transform: translateX(${(props) => props.translateAmount + "rem"});
  }
  @media (max-width: 630px) {
    transform: translateX(${(props) => props.translateAmount * 0.5 + "rem"});
  }
  @media only screen and (min-width: 1025px) and (max-width: 2300px) {
    transform: translateX(${(props) => props.translateAmount + "rem"});
  }
  @media (max-width: 630px) {
    transform: translateX(${(props) => props.translateAmount * 0.5 + "rem"});
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Scan_Order_PayTitle = styled(Row)`
  flex-wrap: nowrap;
  font-size: 5rem;
  line-height: 12.688rem;
  opacity: 0.15;
  margin-left: 1rem;
  cursor: pointer;
  user-select: none;

  :hover {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
    margin-left: 0.4rem;
  }
  @media (max-width: 768px) {
    /* margin-right: 2rem; */
    margin-left: unset;
  }
  @media (max-width: 500px) {
    /* font-size:1.5rem; */
    margin-right: 1rem;
  }

  h1 {
    margin: 0;
  }

  span {
    font-size: 8.5rem;
    @media (max-width: 1024px) {
      font-size: 5.5rem;
    }
    @media (max-width: 500px) {
      font-size: 3rem;
    }
  }
`;

export const QuickGuideDescContainer = styled(Row)`
  width: 100%;
  font-size: 1.125rem;
  line-height: 1.938rem;
  margin-top: 2rem;
  text-align: justify;
  @media screen and (min-width: 1025px) and (max-width: 1800px) {
    width: 33vw;
  }
`;

export const TryNowContainer = styled(Row)`
  position: relative;
  margin-top: 3.25rem;
  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
  @media (max-width: 420px) {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .buttonContainer {
    border-radius: 3.75rem;
    color: #000000;
    padding: 1.25rem 1.5rem;
    background-color: #ffffff;
  }

  svg {
    position: absolute;
    right: 13.5rem;
    bottom: -1.875rem;
    @media (max-width: 1024px) {
      bottom: -0.625rem;
    }
    @media (max-width: 444px) {
      right: 6rem;
      bottom: -3rem;
    }
    @media (max-width: 350px) {
      right: 3rem;
      bottom: -3rem;
    }
  }
`;

export const ImageContainer = styled(Row)`
  position: relative;
  z-index: 2;
  height: 100%;
  @media (max-width: 1025px) {
    display: none;
  }
`;

export const QuickGuideVideo = styled.video`
  width: 100%;
  position: absolute;
  height: 96%;
  border-radius: 25%;
  @media only screen and (min-width: 300px) and (max-width: 500px) {
    border-radius: 32%;
  }
  @media only screen and (min-width: 500px) and (max-width: 600px) {
    border-radius: 42%;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    border-radius: 47%;
  }
  @media (min-width: 1021px) {
    height: 95.5%;
    border-radius: 11%;
  }
  @media (min-width: 1021px) {
    height: 96%;
    border-radius: 13%;
  }
`;

export const BlueCarContainer = styled.div`
  position: absolute;
  width: 60%;
  height: 100%;
  left: -5%;
  bottom: -20vh;
  transform: translateX(-100%);
  transition: 0.3s all ease-in-out;
  background: linear-gradient(
    357.88deg,
    #000000 19.25%,
    rgba(0, 0, 0, 0) 45.55%
  );
  mix-blend-mode: screen;
  @media (max-width: 1024px) {
    width: 140%;
    height: 100%;
    left: -15%;
    bottom: 10%;
    z-index: -1;
  }
`;

const steps = [
  {
    id: 0,
    title: "اسکن",
    detail: `با هر گوشی هوشمندی، مشتریان می‌توانند با اسکن کد QR یا وارد نمودن لینک اختصاصی وارد نمایشگاه مجازی شوند و به خودروهای شما دسترسی داشته باشند.`,
    src: "/videos/scan.mp4",
  },
  {
    id: 1,
    title: "بازدید",
    detail: `
    بعد از ورود، اطلاعات نمایشگاه شما شامل لوگو، تصویر بنری، اسم برند، باز/بسته بودن، آدرس (روی نقشه)، توضیحات، ساعات کاری، لینک‌های جانبی/شبکه‌های اجتماعی و اطلاعات تماس به بازدیدکنندگان نمایش داده می‌شود که می‌توانند با انتخاب دکمه خرید خودرو وارد لیست خودروها شوند.
    `,
    src: "/videos/split.mp4",
  },
  {
    id: 2,
    title: "بررسی",
    detail: `
    در این صفحه لیستی از تمامی خودروهای نمایشگاه به بازدیدکنندگان نمایش داده می‌شود که با توجه به امکاناتی نظیر، جستجو، فیلتر و مرتب‌سازی، به راحتی می‌توانند خودرو مورد نظر را پیدا کنند و با کلیک بر روی کارت آن، جزئیات و مشخصات مربوط به آن را بررسی کنند.
    `,
    src: "/videos/pay.mp4",
  },
  {
    id: 3,
    title: "ارتباط",
    detail: `
    بعد از بررسی جزئیات و مشخصات خودرو، بازدیدکنندگان می‌توانند از طریق دکمه تماس با کارشناس فروش با شما در ارتباط باشند. همچنین در صورت علاقه‌مندی به خودرو مورد نظر، می‌توانند آن را نشان کنند تا در زمان دلخواه و به راحتی به خودرو دسترسی داشته باشند.
    `,
    src: "/videos/pay.mp4",
  },
];
interface QuickGuideProps { }
interface QuickGuidVideoComponentProps { }
interface Scan_Order_PayTitleComponentProps {
  value: number;
  children: any;
}

const QuickGuide: React.FC<QuickGuideProps> = () => {
  const [selectMode, setSelectMode] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const QuickGuideRef = useRef<any>();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".quickGuide",
      start: "top 50%",
      end: "bottom 50%",

      onEnter: () => {
        gsap.to(".blueCar", {
          duration: 0.5,
          ease: "power2.inOut",
          x: 0,
        });
        gsap.to("body", {
          duration: 0,
          backgroundColor: "#1839E8",
          color: "#ffffff",
        });
      },
      onEnterBack: () => {
        gsap.to("body", {
          duration: 0,
          backgroundColor: "#1839E8",
          color: "#ffffff",
        });
        gsap.to(".blueCar", {
          duration: 0.5,
          ease: "power2.inOut",
          x: 0,
        });
      },
      onLeave: () => {
        gsap.to("body", {
          duration: 0,
          backgroundColor: "#ffffff",
          color: "#000000",
        });
        gsap.to(".blueCar", {
          duration: 0.5,
          ease: "power2.inOut",
          x: -1000,
        });
      },
      onLeaveBack: () => {
        gsap.to("body", {
          duration: 0,
          backgroundColor: "#ffffff",
          color: "#000000",
        });
        gsap.to(".blueCar", {
          duration: 0.5,
          ease: "power2.inOut",
          x: -1000,
        });
      },
    });
  }, []);

  const handleChangeVideo = (value: number) => {
    setSelectMode(value);
  };
  const handleStartPoint = (e: SyntheticEvent<HTMLVideoElement>) => {
    const target = e.target as HTMLVideoElement;

    target.currentTime = 0;
    setTime(target.duration);
  };
  const handleEndVideo = () => {
    setSelectMode((preState) =>
      preState === 2 ? 0 : (preState = preState + 1)
    );
  };

  const handleTranslateAmount = () => {
    if (selectMode === 0) return 0;
    else if (selectMode === 1) return 15;
    else if (selectMode === 2) return 40;
    else if (selectMode === 3) return 60;
    else return 40;
  };



  const QuickGuidVideoComponent: React.FC<
    QuickGuidVideoComponentProps
  > = () => {
    return (
      <QuickGuideVideo
        autoPlay
        muted
        playsInline
        onPlay={(e) => handleStartPoint(e)}
        onEnded={handleEndVideo}
      >
        <source src={steps?.[selectMode]?.src} />
      </QuickGuideVideo>
    );
  };

  const Scan_Order_PayTitleComponent: React.FC<
    Scan_Order_PayTitleComponentProps
  > = ({ value, children }) => (
    <Scan_Order_PayTitle
      onClick={() => handleChangeVideo(value)}
      className={`${selectMode === value ? styles.active : ""}`}
    >
      {children}
    </Scan_Order_PayTitle>
  );

  return (
    <QuickGuideWrapper className="quickGuide" ref={QuickGuideRef}>
      <QuickGuideDetailsWrapper>
        <QuickGuideDetailsTitle>
          مشتریان می‌توانند از هر جا و هر زمانی خودروهای نمایشگاه را ببینند و با
          شما ارتباط بگیرند.
        </QuickGuideDetailsTitle>
        <QuickGuideSvg3Container>
          <Image src={QuickGuideSvg3} alt="quick guid svg" />
        </QuickGuideSvg3Container>
        <QuickGuideSvg1Container>
          <Image src={EasySvg} alt="easy use svg" />
        </QuickGuideSvg1Container>
        <QuickGuideDetailsImageContainer>
          {/* <QuickGuidVideoComponent />

          <Image
            src={QuickGuideImg}
            alt="Picture of mobile"
            layout="fill"
            objectFit="contain"
          /> */}
        </QuickGuideDetailsImageContainer>

        <QuickGuideDetailsContainer>
          <Scan_Order_PayContainer translateAmount={handleTranslateAmount()}>
            {steps.map((step) => (
              <Scan_Order_PayTitleComponent
                key={"step" + step.id}
                value={step?.id}
              >
                <h1>{step?.title}</h1>
                <span> . </span>
              </Scan_Order_PayTitleComponent>
            ))}
          </Scan_Order_PayContainer>
          {/* <LinearProgress time={time} /> */}
          <QuickGuideDescContainer>
            {steps?.[selectMode]?.detail}
          </QuickGuideDescContainer>
        </QuickGuideDetailsContainer>
        <TryNowContainer>
          <a
            href="https://macan.stage-mashinbuzz.ir"
            target="_blank"
            rel="noreferrer"
          >
            <StyledButton>دموی آنلاین را ببینید!</StyledButton>
          </a>
          {/* <QuickGuideSvg2 /> */}
        </TryNowContainer>
      </QuickGuideDetailsWrapper>
      <BlueCarContainer className="blueCar">
        <Image
          src={QuickGuideImg1}
          alt="Picture of blue car"
          layout="fill"
          objectFit="contain"
        />
      </BlueCarContainer>
      <ImageContainer>
        {/* <QuickGuidVideoComponent /> */}
        {/* <Image src={QuickGuideImg} alt="Picture of mobile" /> */}
      </ImageContainer>
    </QuickGuideWrapper>
  );
};

export default QuickGuide;
