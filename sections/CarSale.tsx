import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { gsap } from "gsap";
import { Col } from "../kit/Column";
import { Row } from "../kit/Row";

import CarSaleImg from "../public/Images/CarSaleImg.png";
import CarSaleIcon from "../public/Images/CarSaleIcon.svg";
import CarSaleIcon1 from "../public/Images/CarSaleIcon1.svg";

export const CarSaleWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 10rem 0;
  font-family: irs-m;
  @media (max-width: 1440px) {
    padding: 4.875rem 7.75rem 0;
  }
  @media (max-width: 1024px) {
    height: auto;
    flex-direction: column-reverse;
    padding: 2rem 8.75rem 0;
  }
  @media (max-width: 768px) {
    padding: 2rem 2rem 0;
  }
  @media (max-width: 420px) {
    padding: 1.5rem 2rem;
  }
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
    margin-top: 3rem;
  }
  @media (max-width: 420px) {
    margin-top: 1rem;
  }
  @media (max-width: 350px) {
    margin-top: 5rem;
  }
`;

export const CarSaleDetailsWrapper = styled(Col)`
  width: 46.875rem;
  justify-content: center;
  padding: 0 2rem 8rem 2rem;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
  .carSaleIconSvg {
  }
  .carSaleIcon1Svg {
    margin-top: 3rem;
  }
`;

export const CarSaleDetailsTitle = styled(Row)`
  color: #000000;
  font-size: 2.5rem;
  font-weight: 500;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

export const CarSaleDetailsContainer = styled(Col)`
  width: 100%;
  justify-content: flex-start;
  margin-top: 2rem;
  font-size: 1.125rem;
  font-weight: 400;
  font-family: irs;
  text-align: justify;
  color: #757575;
`;

export const MoreInfoButton = styled.a`
  position: relative;
  margin-top: 3.25rem;
  @media (max-width: 1024px) {
    margin-top: 1rem;
  }
  .buttonContainer {
    border-radius: 3.75rem;
    border: 0.063rem solid #e0e0e0;
    color: #424242;
    padding: 1.25rem 1.5rem;
  }
`;

interface CarSaleProps { }

const CarSale: React.FC<CarSaleProps> = () => {
  useEffect(() => {
    gsap.to(".carSaleImageContainer", {
      scrollTrigger: {
        trigger: ".carSaleImageContainer",
        scrub: 1,
        start: "top 50%",
      },
      y: -80,
      rotation: 7,
      duration: 1,
      ease: "none",
    });
  }, []);
  return (
    <CarSaleWrapper>
      <ImageContainer className="carSaleImageContainer">
        <Image
          src={CarSaleImg}
          alt="Picture of Order And Pay"
          layout="fill"
          objectFit="contain"
        />
      </ImageContainer>
      <CarSaleDetailsWrapper>
        <div className="carSaleIconSvg">
          <Image src={CarSaleIcon} alt="Picture of Car Sale Icon" />
        </div>
        <CarSaleDetailsTitle>فروش خودرو</CarSaleDetailsTitle>
        <CarSaleDetailsContainer>
          به راحتی می‌توانید خودروهای مورد نظر خود را در لیست فروش خود قرار
          دهید، به صورتی که بازدیدکنندگان می‌توانند تمام اطلاعات، جزئیات فنی،
          قیمت و عکس‌های مربوط به هر خودرو را مشاهده کنند و از طریق تماس تلفنی و
          همچنین چت آنلاین با شما در ارتباط باشند.
        </CarSaleDetailsContainer>
        <div className="carSaleIcon1Svg">
          <Image src={CarSaleIcon1} alt="Picture of Car Sale Icon" />
        </div>
      </CarSaleDetailsWrapper>
    </CarSaleWrapper>
  );
};

export default CarSale;
