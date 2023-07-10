import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Col } from "../kit/Column";
import { Row } from "../kit/Row";

import FeaturesList1 from "../Icons/FeaturesList1";

import ToInfinityAndBeyond from "../public/Images/ToInfinityAndBeyond.svg";
import FeaturesListImg from "../public/Images/FeaturesListImg.png";
import FeaturesListImg2 from "../public/Images/FeaturesListImg2.png";
import FeaturesListImg3 from "../public/Images/FeaturesListImg3.png";
import FeaturesListImg4 from "../public/Images/FeaturesListImg4.png";
import ArrowIcon from "../public/Images/ArrowIcon.png";

export const FeaturesListWrapper = styled.section`
  width: 100%;
  height: 400vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0rem 10rem;
  font-family: irs-m;

  @media (max-width: 1440px) {
    padding: 0rem 7.75rem;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 3rem 8.75rem;
    margin-top: 2rem;
    height: max-content;
  }
  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
  @media (max-width: 420px) {
    padding: 2rem;
  }
  @media (max-height: 420px) {
    height: 450vh;
  }
`;

export const FeaturesListContainer = styled(Row)`
  width: 100%;
  height: 400vh;
  position: relative;
  padding-top: 12rem;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 1440px) {
  }
  @media (max-width: 1024px) {
    display: none;
    flex-direction: column;
    justify-content: flex-start;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 420px) {
    padding-top: 4rem;
  }

  @media (max-height: 420px) {
    height: auto;
  }

  .toInfinityAndBeyondSvg {
    position: absolute;
    top: 4%;
    left: 40%;
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

export const FeaturesListDetailsWrapper = styled(Col)`
  width: 32rem;
  justify-content: flex-start;
  padding-left: 2rem;
  @media (max-width: 1440px) {
    width: 50%;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

export const FeaturesListDetailsTitle = styled(Row)`
  position: relative;
  font-size: 2.5rem;
  font-weight: 500;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  svg {
    position: absolute;
    top: -2.813rem;
    right: -2.5rem;
    @media (max-width: 1024px) {
      width: 9.125rem;
      height: 8.813rem;
    }
  }
`;

export const FeaturesListDesc = styled(Col)`
  width: 100%;
  justify-content: flex-start;
  margin-top: 2rem;
  font-size: 1.125rem;
  font-weight: 400;
  font-family: irs;
  text-align: justify;
  @media (max-width: 1024px) {
    margin: 4rem 0;
  }
`;

export const FeatureItemContainer = styled(Col)`
  width: 100%;
  justify-content: flex-start;
  margin-top: 2rem;
  @media (max-width: 1024px) {
    display: none;
  }
  .isFeatureActive {
    padding-right: 2rem;
    padding-bottom: 0.9rem;
    padding-top: 0.9rem;
    border-right: 0.188rem solid #1839e8;
    .featureTitle {
      opacity: 1;
      color: #1839e8;
    }
    .featureDetail {
      display: block;
      animation: fadein 1s cubic-bezier(0.16, 1, 0.3, 1);
      @keyframes fadein {
        0% {
          transform: translateY(15%);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }
`;

export const Feature = styled(Col)`
  width: 100%;
  border-right: 0.063rem solid rgba(160, 161, 240, 0.3);
  padding-right: 2rem;
  padding-bottom: 0.9rem;
  padding-top: 0.9rem;
  cursor: pointer;
  overflow: hidden;
  :first-child {
    padding-top: 0;
  }
  :last-child {
    padding-bottom: 0;
  }
`;

export const FeatureTitle = styled(Row)`
  width: fit-content;
  font-size: 1.375rem;
  opacity: 0.3;
  color: #1839e8;
  :hover {
    opacity: 1;
  }
`;

export const FeatureDetail = styled(Row)`
  width: 100%;
  font-size: 1rem;
  margin-top: 0.5rem;
  text-align: justify;
  color: #000000;
  display: none;
`;

export const ImageWrapper = styled(Row)`
  width: 40%;
  height: 31.25rem;
  position: relative;
  justify-content: flex-start;
  margin-top: 3rem;
  @media (max-width: 1440px) {
    width: 50%;
  }
  @media (max-width: 1024px) {
    display: none;
  }

  .isFeatureImageActive {
    opacity: 1;
    transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const ImageContainer = styled(Row)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: contain;
  object-position: center;
  opacity: 0;
  transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const FeaturesListContainerMob = styled(Col)`
  width: 100%;
  justify-content: flex-start;
  margin-top: 2rem;
  @media (min-width: 1025px) {
    display: none;
  }
`;
export const FeatureMob = styled(Col) <{ isActive: boolean }>`
  width: 100%;
  color: ${(props) => (props.isActive ? `black` : `#1839E8`)};
  border-radius: 1rem;
  border: 1px solid rgba(23, 38, 171, 0.6);
  margin: 1rem 0 0;
  padding: 1.25rem 1.75rem;
  cursor: pointer;
  background-color: white;
`;

export const FeatureTitleMob = styled(Row) <{ isActive: boolean }>`
  width: fit-content;
  font-size: 1.5rem;
`;

export const FeatureTitleIconMob = styled(Row) <{ isActive: boolean }>`
  border-radius: 100%;
  border: 1px solid #c4bebe;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  transform: ${(props) => (props.isActive ? "none" : "rotate(0.5turn)")};
  transition: 0.3s all cubic-bezier(0.16, 1, 0.3, 1);
`;

export const FeatureDetailMob = styled.p<{ isActive: boolean }>`
  width: 100%;
  font-size: 1rem;
  margin: 0;
  margin-top: 0.5rem;
  text-align: justify;
  overflow: hidden;
  max-height: ${(props) => (props.isActive ? `8rem` : `0`)};
  transition: max-height 0.5s;
  white-space: pre-line;
`;

export const FeatureImageMob = styled.div<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? "block" : "none")};
  margin: auto;
  padding-top: 1.5rem;
  @media (min-width: 1025px) {
    display: none;
  }
`;

interface FeaturesInterface {
  id: Number;
  title: string;
  detail: string;
  image: any;
}

const features: FeaturesInterface[] = [
  {
    id: 1,
    title: "نمایشگاه مجازی",
    detail:
      "امکان بازدید از خودروهای نمایشگاه، ارائه مشخصات، عکس‌ها و ویژگی‌های اختصاصی به همراه قیمت، شرایط فروش و ارزیابی فنی را برای مشتریان خود فراهم کنید.",
    image: FeaturesListImg,
  },
  {
    id: 2,
    title: "بدون نیاز به نصب",
    detail:
      "مشتریان به دنبال ماشین دلخواه و اطلاع از مشخصات آن هستند و می‌خواهند بهترین انتخاب را انجام دهند. ماشین‌باز ۱۰۰٪ مبتنی بر وب است و به راحتی از هر تلفن هوشمند قابل دسترسی است.",
    image: FeaturesListImg2,
  },
  {
    id: 3,
    title: "برندسازی سفارش",
    detail:
      "می‌توانید QR کد نمایشگاه را مطابق با هویت برند خود انتخاب کنید. همچنین می‌توانید نمایشگاه خود را با عکس‌های زیبا، لوگوی خود و لینک‌های دیگر در شبکه‌های اجتماعی همراه کنید.",
    image: FeaturesListImg3,
  },
  {
    id: 4,
    title: "گزارش‌گیری و تحلیل",
    detail:
      "با برندها و مدل‌های مورد علاقه بازدیدکنندگان آشنا شوید. همچنین می‌توانید با توجه به تعداد بازدید و  مورد علاقه‌های هر خودرو، نمودارهای مقایسه‌ای و ... درک نظر مشتریان برای خود آسان‌تر کنید.",
    image: FeaturesListImg4,
  },
];
interface FeaturesInterface {
  id: Number;
  title: string;
  detail: string;
  image: any;
}
interface FeaturesListProps { }

const FeaturesList: React.FC<FeaturesListProps> = () => {
  const [activeFeature, setActiveFeature] = useState<FeaturesInterface>(
    features[0]
  );
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Changig background color
    ScrollTrigger.create({
      trigger: ".featuresList",
      start: "top 50%",
      end: "bottom 50%",

      onEnter: () => {
        gsap.to("body", {
          duration: 0,
          backgroundColor: "#EEF0F6",
          color: "#000000",
        });
      },
      onEnterBack: () => {
        gsap.to("body", {
          duration: 0,
          backgroundColor: "#EEF0F6",
          color: "#000000",
        });
      },
      onLeave: () => {
        gsap.to("body", {
          duration: 0,
          backgroundColor: "#ffffff",
          color: "#000000",
        });
      },
      onLeaveBack: () => {
        gsap.to("body", {
          duration: 0,
          backgroundColor: "#ffffff",
          color: "#000000",
        });
      },
    });

    // Animation on featuresList
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".featuresList",
          scrub: 0.3,
          start: "top top",
          end: "bottom bottom",
          pin: true,
        },
      })
      .to(".feature", {
        className: "isFeatureActive",
        duration: 1,
        ease: "none",
        stagger: {
          each: 2,
          yoyo: true,
          repeat: 1,
        },
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".featuresList",
          scrub: 0.3,
          start: "top top",
          end: "bottom bottom",
          pin: true,
        },
      })
      .to(".featureImage", {
        className: "isFeatureActive",
        duration: 1,
        ease: "none",
        stagger: {
          each: 2,
          yoyo: true,
          repeat: 1,
        },
      });
  }, []);

  return (
    <FeaturesListWrapper id="featuresList">
      <FeaturesListContainer className="featuresList">
        <div className="toInfinityAndBeyondSvg">
          <Image
            src={ToInfinityAndBeyond}
            alt="Picture of To Infinity And Beyond Text"
          />
        </div>
        <FeaturesListDetailsWrapper>
          <FeaturesListDetailsTitle>
            ماشین باز چطور کار میکند؟
            <FeaturesList1 />
          </FeaturesListDetailsTitle>
          <FeaturesListDesc>
            دستیاری قدرتمند برای شما جهت راه‌اندازی نمایشگاه مجازی و همیشه فعال
            خود به همراه ابزارهای بازاریابی و تجزیه و تحلیل
          </FeaturesListDesc>
          <FeatureItemContainer>
            {features?.map((feature) => {
              return (
                <Feature
                  key={`feature_${feature?.id}`}
                  className={`feature`}
                  id={`feature_${feature?.id}`}
                >
                  <FeatureTitle className="featureTitle">
                    {feature?.title}
                  </FeatureTitle>
                  <FeatureDetail className="featureDetail">
                    {feature?.detail}‌
                  </FeatureDetail>
                </Feature>
              );
            })}
          </FeatureItemContainer>
        </FeaturesListDetailsWrapper>
        <ImageWrapper>
          {features?.map((feature) => {
            return (
              <ImageContainer
                key={`featureImage_${feature?.id}`}
                className="featureImage"
              >
                <Image
                  src={feature?.image}
                  alt="Picture of Order And Pay pay"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </ImageContainer>
            );
          })}
        </ImageWrapper>
      </FeaturesListContainer>
      <FeaturesListContainerMob>
        <div className="toInfinityAndBeyondSvg">
          <Image
            src={ToInfinityAndBeyond}
            alt="Picture of To Infinity And Beyond Text"
          />
        </div>
        <FeaturesListDetailsTitle>
          ماشین باز چطور کار میکند؟
          <FeaturesList1 />
        </FeaturesListDetailsTitle>
        <FeaturesListDesc>
          دستیاری قدرتمند برای شما جهت راه‌اندازی نمایشگاه مجازی و همیشه فعال خود به همراه ابزارهای بازاریابی و تجزیه و تحلیل
        </FeaturesListDesc>

        {features?.map((feature) => {
          return (
            <FeatureMob
              key={`feature_${feature?.id}`}
              isActive={feature?.id === activeFeature?.id ? true : false}
              onClick={() => setActiveFeature(feature)}
            >
              <FeatureTitleMob
                isActive={feature?.id === activeFeature?.id ? true : false}
                className="featureTitle"
              >
                <FeatureTitleIconMob
                  isActive={feature?.id === activeFeature?.id ? true : false}
                >
                  <Image src={ArrowIcon} alt="Picture of Order And Pay pay" />
                </FeatureTitleIconMob>
                {feature?.title}
              </FeatureTitleMob>
              <FeatureDetailMob
                isActive={feature?.id === activeFeature?.id ? true : false}
              >
                {feature?.detail}‌
              </FeatureDetailMob>
              <FeatureImageMob
                isActive={feature?.id === activeFeature?.id ? true : false}
              >
                <Image
                  src={activeFeature?.image}
                  alt="Picture of Order And Pay pay"
                />
              </FeatureImageMob>
            </FeatureMob>
          );
        })}
      </FeaturesListContainerMob>
    </FeaturesListWrapper>
  );
};

export default FeaturesList;
