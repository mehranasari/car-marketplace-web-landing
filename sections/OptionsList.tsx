import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Col } from "../kit/Column";
import { Row } from "../kit/Row";

import OptionsList1 from "../Icons/OptionsList1";

import OptionsListImg from "../public/Images/OptionsListImg.png";
import OptionsListImg2 from "../public/Images/OptionsListImg2.png";
import OptionsListImg3 from "../public/Images/OptionsListImg3.png";
import OptionsListImg4 from "../public/Images/OptionsListImg4.png";
import OptionsListImg5 from "../public/Images/OptionsListImg5.png";
import OptionsListImg6 from "../public/Images/OptionsListImg6.png";
import OptionsListImg7 from "../public/Images/OptionsListImg7.png";

export const OptionsListWrapper = styled.section`
  width: 100%;
  height: 120vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 8rem 10rem;
  font-family: irs-m;
  @media (max-width: 1440px) {
    padding: 4.875rem 7.75rem;
  }
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    padding: 3rem 8.75rem;
    height: auto;
  }
  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
  @media (max-width: 420px) {
    padding: 2rem;
  }
`;

export const OptionsListDetailsWrapper = styled(Col)`
  width: 46.875rem;
  justify-content: flex-start;
  margin-right: 2rem;
  @media (max-width: 1440px) {
    width: 70%;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
    margin-right: 0;
  }
`;

export const OptionsListDetailsTitle = styled(Row)`
  position: relative;
  font-size: 2.5rem;
  font-weight: 500;
  color: #000000;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  svg {
    position: absolute;
    top: 4rem;
    right: -0.5rem;
    @media (max-width: 1024px) {
      top: -0.5rem;
      width: 9.125rem;
      height: 8.813rem;
    }
  }
`;

export const OptionsListContainer = styled(Col)`
  width: 100%;
  justify-content: flex-start;
  margin-top: 2rem;
`;

export const Feature = styled(Col) <{ isActive: boolean }>`
  width: 100%;
  color: ${(props) => (props.isActive ? `black` : `#616161`)};
  border: ${(props) =>
    props.isActive ? `0.188rem solid #1839E8` : `0.063rem solid #E0E0E0`};
  border-radius: 1rem;
  margin: 1rem 0 0;
  padding: 1.25rem 1.75rem;
  cursor: pointer;

  :hover {
    background-color: #1839E8;
    color:#ffffff;
    .featureTitle {
      opacity: 1;
    }
  }
  @media (max-width:1024px){
    display: none;
  }
`;

export const FeatureTitle = styled(Row) <{ isActive: boolean }>`
  width: fit-content;
  font-size: 1.375rem;
  opacity: ${(props) => (props.isActive ? `1` : `0.8`)};
`;

export const FeatureDetail = styled.p<{ isActive: boolean }>`
  width: 100%;
  font-size: 1rem;
  margin: 0;
  margin-top: 0.5rem;
  text-align: justify;
  overflow: hidden;
  max-height: ${(props) => (props.isActive ? `10rem` : `0`)};
  transition: max-height 0.5s;
  white-space: pre-line;
`;

export const ImageContainer = styled(Row)`
  width: 40%;
  height: 80%;
  position: relative;
  @media (max-width: 1440px) {
    width: 70%;
  }
  @media (max-width: 1024px) {
    display:none;
   
  }

`;


export const FeatureMob = styled(Col)`
  width: 100%;
  border: 0.063rem solid #E0E0E0;
  border-radius: 1rem;
  margin: 1rem 0 0;
  padding: 1.25rem 1.75rem;
  
  @media (min-width:1025px){
    display:none;
  }
`;

export const FeatureTitleMob = styled(Row)`
  width: fit-content;
  font-size: 1.375rem;
`;

export const FeatureDetailMob = styled.p`
  width: 100%;
  font-size: 1rem;
  margin: 0;
  margin-top: 0.5rem;
  text-align: justify;
  overflow: hidden;
  /* transition: max-height 0.5s; */
  white-space: pre-line;
`;


export const FeatureImageMob = styled.div`
margin:auto;
padding-top:1.5rem;
`

interface FeaturesInterface {
  id: Number;
  title: string;
  detail: string;
  image: any;
}

const features: FeaturesInterface[] = [
  {
    id: 1,
    title: "زیبا و آسان",
    detail:
      `پشتیبانی کامل از شخصی‌سازی رنگ و هویت برند شما با رابط کاربری زیبا و آسان، سازگار با دستگاه‌های مختلف شامل کامپیوتر، تبلت و گوشی هوشمند (Android/IOS) .`,
    image: OptionsListImg,
  },
  {
    id: 2,
    title: "ارائه همه مشخصات و ویژگی‌ها",
    detail: `دسترسی به تمام ابزارهایی که برای نمایش خودروهای نمایشگاه خود به آن نیاز دارید، از مشخصات و اطلاعات هر خودرو گرفته تا عکس‌ها و ارزیابی‌های فنی`,
    image: OptionsListImg2,
  },
  {
    id: 3,
    title: "جستجو و فیلتر حرفه‌ای",
    detail: `قابلیت جستجو، فیلتر و مرتب‌‌سازی حرفه‌ای خودروها که به بازدیدکنندگان این امکان را می‌دهد تا به راحتی خودروی مورد نظر خود را در لیست نمایشگاه شما پیدا و از آن بازدید کنند.`,
    image: OptionsListImg3,
  },
  {
    id: 4,
    title: "کارت مخصوص و فروخته شده",
    detail: `کارت مخصوص به شما کمک می‌کند تا بتوانید خودروهای مورد نظر خود را متفاوت از سایر خودرو‌ها کنید؛ به صورتی که چشم بازدیدکنندگان به این نوع کارت‌ها جذب می‌شود و احتمال کلیک و مشاهده آن خودرو را بالا می‌برد. استفاده از کارت فروخته شده هم، پویایی و فعالیت نمایشگاه شما را به بازدیدکنندگان نشان می‌دهد که اثر مثبتی در فرآیند فروش شما به دنبال خواهد داشت.`,
    image: OptionsListImg4,
  },
  {
    id: 5,
    title: "نشان‌گذاری مورد علاقه‌ها",
    detail: `این ویژگی به بازدیدکنندگان از نمایشگاه شما کمک می‌کند که بتوانند، خودروهای مورد نظر خود را به لیست مورد علاقه‌ اضافه کنند تا در زمان‌های بعدی هم به این لیست دسترسی داشته باشند.`,
    image: OptionsListImg5,
  },
  {
    id: 6,
    title: "تاریخچه بازدیدها",
    detail:
      "در این صفحه، لیستی از آخرین بازدیدهای هر بازدیدکننده نمایش داده می‌شود تا امکان دسترسی به خودروهای مورد نظر تسهیل شود.",
    image: OptionsListImg6,
  },
  {
    id: 7,
    title: "به اشتراک‌گذاری خودروها",
    detail:
      "این قابلیت به بازدیدکنندگان کمک می‌کند که بتوانند مشخصات مربوط به خودرو مورد نظر خود را با دیگران به اشتراک بگذارند. این امکان در همه شبکه‌های اجتماعی پشتیبانی می‌شود.",
    image: OptionsListImg7,
  },
];

interface OptionsListProps { }

const OptionsList: React.FC<OptionsListProps> = () => {
  const [activeFeature, setActiveFeature] = useState<FeaturesInterface>(
    features[0]
  );

  return (
    <OptionsListWrapper id="optionsList">
      <ImageContainer>
        <Image
          src={activeFeature?.image}
          alt="Picture of Order And Pay pay"
          layout="fill"
          objectFit="contain"
          priority
        />
      </ImageContainer>
      <OptionsListDetailsWrapper>
        <OptionsListDetailsTitle>
          هوشمندی در نمایشگاه شما
          <OptionsList1 />
        </OptionsListDetailsTitle>
        <OptionsListContainer>
          {features?.map((feature) => {
            return (
              <Feature
                key={`feature_${feature?.id}`}
                isActive={feature?.id === activeFeature?.id ? true : false}
                onClick={() => setActiveFeature(feature)}
              >
                <FeatureTitle
                  isActive={feature?.id === activeFeature?.id ? true : false}
                  className="featureTitle"
                >
                  {feature?.title}
                </FeatureTitle>
                <FeatureDetail
                  isActive={feature?.id === activeFeature?.id ? true : false}
                >
                  {feature?.detail}‌
                </FeatureDetail>

              </Feature>
            );
          })}
          {features?.map((feature) => {
            return (
              <FeatureMob
                key={`featureMob_${feature?.id}`}
              >
                <FeatureTitleMob
                  className="featureTitle"
                >
                  {feature?.title}
                </FeatureTitleMob>
                <FeatureDetailMob
                >
                  {feature?.detail}‌
                </FeatureDetailMob>
                <FeatureImageMob
                >
                  <Image
                    src={feature?.image}
                    alt="Picture of Order And Pay pay"

                  />
                </FeatureImageMob>
              </FeatureMob>
            );
          })}

        </OptionsListContainer>
      </OptionsListDetailsWrapper>
    </OptionsListWrapper>
  );
};

export default OptionsList;
