import React from "react";
import styled from "styled-components";
import Image from "next/image";
import StyledButton from "../kit/Button";
import { Col } from "../kit/Column";
import { Row } from "../kit/Row";

import FoldInImg from "../public/Images/FoldInImg.png";
import FoldInImg2 from "../public/Images/FoldInImg2.png";
import FreeUseSvg from "../public/Images/FreeUseSvg.svg";

import FoldInLine1 from "../Icons/FoldInLine1";

export const FoldInWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media (max-height: 420px) {
    height: auto;
  }
`;

export const FoldInContentContainer = styled(Col)`
  width: 50%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 18rem 10rem 0 2rem;
  @media (max-width: 1440px) {
    padding: 14rem 3rem 0 0;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 10rem 2rem 0;
    align-items: center;
  }
  @media (max-width: 420px) {
    padding: 8rem 2rem 0;
  }
  @media (max-width: 350px) {
    padding: 2rem 2rem 0;
  }
`;

export const FoldInTitle = styled.h1`
  display: flex;
  position: relative;
  font-family: irs-m;
  font-weight: 500;
  font-size: 4rem;
  line-height: 5.5rem;
  letter-spacing: -0.02em;
  color: #000000;
  margin: 0;
  width: 50rem;

  @media (max-width: 1360px) {
    width: 38rem;
  }
  @media (max-width: 440px) {
    font-size: 2.5rem;
    width: 22rem;
    line-height: 4rem;
    text-align: center;
    max-width: 100%;
  }
  svg {
    position: absolute;
    top: 4.5rem;
    right: 9.5rem;
    @media (max-width: 440px) {
      width: 8rem;
      right: 6.5rem;
      top: 3rem;
    }
  }
`;

export const FoldInDesc = styled.h3`
  display: flex;
  font-family: irs-m;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.938rem;
  color: #000000;
  margin: 2rem 0 0 0;

  @media (max-width: 420px) {
    text-align: center;
  }
`;

export const FoldInActionsContainer = styled(Row)`
  position: relative;
  margin-top: 3.25rem;
  font-family: irs;
  @media (max-width: 420px) {
    margin-top: 2rem;
  }
`;

export const MobileImageContainer = styled(Row)`
  width: 100%;
  height: 100%;
  /* margin-top:11.563rem; */
  margin-top: 2rem;
  display: none;
  position: relative;
  @media (max-width: 1024px) {
    display: flex;
  }

  @media (max-height: 420px) {
    height: 25rem;
  }
`;

export const DemoButton = styled.a`
  position: relative;
  margin-left: 1rem;

  .buttonContainer {
    background: #1839E8;
    border-radius: 3.75rem;
    color: #ffffff;
    padding: 1.25rem 1.5rem;
  }
`;

export const MoreInfoButton = styled.a`
  position: relative;
  .buttonContainer {
    border-radius: 3.75rem;
    border: 0.063rem solid #e0e0e0;
    color: #424242;
    background-color: #ffffff;
    padding: 1.25rem 1.5rem;
  }
`;

export const ImageContainer = styled(Row)`
  position: relative;
  width: 50%;
  margin-top: 10rem;
  @media (max-width: 1440px) {
    width: 80%;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const FreeUseImageContainer = styled.div`
  width: 27rem;
  height: 6rem;
  position: relative;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    height: 12rem;
    margin-top: 1rem;
  }
`;
export const H1Text = styled.h1`
  color: white;
  font-size: 0.1rem;
`;

interface FoldInProps { }

const FoldIn: React.FC<FoldInProps> = () => {
  const scrollToContactFormSection = () => {
    const contactFormSection = document.getElementById("contactForm");
    contactFormSection?.scrollIntoView({ behavior: "smooth" });
  };

  const featuresListSection = () => {
    if (window.innerWidth > 1025) {
      // For Desktop
      const featuresListSection = document.getElementById("feature_1");
      featuresListSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      // For Mobile
      const featuresListSection = document.getElementById("featuresList");
      featuresListSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <H1Text>ماشین باز</H1Text>
      <FoldInWrapper>
        <FoldInContentContainer>
          <FoldInTitle>
            پلتفرم حرفه‌ای فروش ، بازاریابی
            <br/>
              و تجزیه تحلیل مشتریان
            <FoldInLine1 />
          </FoldInTitle>
          <FoldInDesc>
            این امکان را برای مشتریان خود فراهم کنید که خودروهای نمایشگاه شما را در تلفن همراه خود ببینند، به راحتی با شما ارتباط بگیرند و مشتری شما شوند.
          </FoldInDesc>
          <FoldInActionsContainer>
            <DemoButton>
              <StyledButton onClick={scrollToContactFormSection}>
                رایگان دریافت کنید
                {/* <FoldInLine2 /> */}
              </StyledButton>
            </DemoButton>
            <MoreInfoButton>
              <StyledButton onClick={featuresListSection}>
                اطلاعات بیشتر
              </StyledButton>
            </MoreInfoButton>
          </FoldInActionsContainer>
          <FreeUseImageContainer>
            <Image
              src={FreeUseSvg}
              alt="Picture of the customer and waitor"
              layout="fill"
              priority
            />
          </FreeUseImageContainer>

          <MobileImageContainer>
            <Image
              src={FoldInImg2}
              alt="Picture of mobile"
              layout="fill"
              objectFit="contain"
            />
          </MobileImageContainer>
        </FoldInContentContainer>
        <ImageContainer>
          <Image
            src={FoldInImg}
            alt="Picture of the customer and waitor"
            layout="fill"
            priority
          />
        </ImageContainer>
      </FoldInWrapper>
    </>
  );
};

export default FoldIn;
