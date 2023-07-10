import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { gsap } from "gsap";
import { Col } from "../kit/Column";
import { Row } from "../kit/Row";

import CarEvaluationImg from "../public/Images/CarEvaluationImg.png";
import CarEvaluationIcon from "../public/Images/CarEvaluationIcon.svg";
import CarEvaluationIcon1 from "../public/Images/CarEvaluationIcon1.svg";

export const CarEvaluationWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 10rem 5rem;
  font-family: irs-m;
  @media (max-width: 1440px) {
    padding: 0 7.75rem 4.875rem;
  }
  @media (max-width: 1024px) {
    height: auto;
    margin-top: 6rem;
    flex-direction: column;
    padding: 0 8.75rem 3rem;
  }
  @media (max-width: 768px) {
    padding: 0 2rem 3rem;
  }
  @media (max-width: 420px) {
    padding: 0 2rem 2rem;
  }
`;

export const CarEvaluationDetailsWrapper = styled(Col)`
  width: 46.875rem;
  justify-content: center;
  padding: 0 2rem 2rem 2rem;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
  .carEvaluationIconSvg {
  }
  .carEvaluationIcon1Svg {
    margin-top: 3rem;
  }
`;

export const CarEvaluationDetailsTitle = styled(Row)`
  color: #000000;
  font-size: 2.5rem;
  font-weight: 500;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

export const CarEvaluationDetailsContainer = styled(Col)`
  width: 100%;
  justify-content: flex-start;
  margin-top: 2rem;
  font-size: 1.125rem;
  font-weight: 400;
  font-family: irs;
  text-align: justify;
  color: #757575;
`;

export const CarEvaluationOption = styled(Col)`
  width: 100%;
  justify-content: flex-start;
  margin-top: 1.75rem;
`;

export const CarEvaluationOptionDesc = styled(Col)`
  width: 100%;
  justify-content: flex-start;
  margin-top: 0.75rem;
  font-size: 1.125rem;
  font-weight: 400;
  font-family: irs;
  text-align: justify;
  color: #757575;
`;

export const ImageContainer = styled(Row)`
  width: 35%;
  height: 100%;
  position: relative;
  @media (max-width: 1440px) {
    width: 70%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    min-height: 31.25rem;
    margin-top: 4rem;
  }
  @media (max-width: 420px) {
    margin-top: 1rem;
  }
  @media (max-width: 350px) {
    margin-top: 5rem;
  }
`;

interface CarEvaluationProps { }

const CarEvaluation: React.FC<CarEvaluationProps> = () => {
  useEffect(() => {
    gsap.to(".carEvaluationImageContainer", {
      scrollTrigger: {
        trigger: ".carEvaluationImageContainer",
        scrub: 1,
        start: "top 50%",
      },
      y: -80,
      rotation: -7,
      duration: 1,
      ease: "none",
    });
  }, []);
  return (
    <CarEvaluationWrapper>
      <CarEvaluationDetailsWrapper>
        <div className="carEvaluationIconSvg">
          <Image src={CarEvaluationIcon} alt="Picture of Car Sale Icon" />
        </div>
        <CarEvaluationDetailsTitle>کارشناسی خودرو</CarEvaluationDetailsTitle>
        <CarEvaluationDetailsContainer>
          با استفاده از این سرویس می‌توانید، موارد فنی مربوط به موتور، بدنه،
          شاسی‌های عقب و جلو هر خودرو را ارزیابی کنید تا بازدیدکنندگان با خیالی
          آسوده و اطمینان بیشتر نسبت به نمایشگاه شما، اقدام به خرید کنند.
        </CarEvaluationDetailsContainer>
        <div className="carEvaluationIcon1Svg">
          <Image src={CarEvaluationIcon1} alt="Picture of Car Sale Icon" />
        </div>
      </CarEvaluationDetailsWrapper>
      <ImageContainer className="carEvaluationImageContainer">
        <Image
          src={CarEvaluationImg}
          alt="Picture of Order And Pay"
          layout="fill"
          objectFit="contain"
        />
      </ImageContainer>
    </CarEvaluationWrapper>
  );
};

export default CarEvaluation;
