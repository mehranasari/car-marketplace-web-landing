import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import StyledButton from "../kit/Button";
import { Col } from "../kit/Column";
import { Row } from "../kit/Row";
import ImageComparisonSlider from "./ImageComparisonSlider";

import QrCode from "../public/Images/QrCode.png";
import IntroducingSvg1 from "../public/Images/IntroducingSvg1.svg";
import IntroductionSvg2 from "../public/Images/IntroductionSvg2.svg";
import CallingIcon from "../Icons/CallingIcon";
import OnlineChatIcon from "../Icons/OnlineChatIcon";
import InstagramIntroducingIcon from "../Icons/InstagramIntroducingIcon";
import WhatsappIntroducingIcon from "../Icons/WhatsappIntroducingIcon";
import TelegramIntroducingIcon from "../Icons/TelegramIntroducingIcon";

export const IntorducingWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 6.875rem 10rem;
  font-family: irs-m;
  overflow-x: hidden;
  @media (max-width: 1440px) {
    padding: 4.875rem 7.75rem;
  }
  @media (max-width: 1024px) {
    margin-top: 2rem;
    flex-direction: column-reverse;
    padding: 3rem 8.75rem;
    height: auto;
    overflow: unset;
  }
  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
  @media (max-width: 420px) {
    padding: 2rem;
    height: auto;
  }

  @media (max-height: 800px) {
    height: auto;
    overflow: unset;
    overflow-x: unset;
  }
`;

export const ImageContainer = styled(Row)`
  width: 40%;
  height: 100%;
  position: relative;
  @media (max-width: 1440px) {
    width: 70%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 2rem;
  }
  @media (max-width: 350px) {
    margin-top: 5rem;
  }
  @media (max-width: 420px) {
    height: 25rem;
  }

  @media (max-height: 420px) {
    height: 25rem;
  }
`;

export const IntorducingDetailsWrapper = styled(Col)`
  width: 45rem;
  justify-content: center;
  padding: 2rem;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

export const IntroducingSvg1Container = styled(Row)``;

export const IntorducingDetailsTitle = styled(Row)`
  color: #000000;
  font-size: 2.5rem;
  font-weight: 500;
  margin-top: 1.5rem;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

export const IntorducingDetailsContainer = styled(Col)`
  width: 100%;
  justify-content: flex-start;
  margin-top: 2rem;
  font-size: 1.125rem;
  font-weight: 400;
  font-family: irs;
  text-align: justify;
`;

export const IntroducingDetailsContactOptionsContainer = styled(Row)`
  justify-content: space-between;
  margin-top: 1.5rem;
`;

export const IntroducingDetailsContactOption = styled(Col)`
  align-items: center;
  .introducingDetailsContactOptionTitle {
    margin-top: 0.5rem;
    color: #000000;
    font-weight: 500;
  }
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
export const IntroductionImagesWrapper = styled(Row)`
  position: relative;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    margin: 6rem 0 9rem 0;
  }
  @media (max-width: 800px) {
    margin: 6rem 0 15rem 0;
  }
  .IntroductionSvg2Wrapper {
    position: absolute;
    bottom: -4.375rem;
    left: -10%;
    @media (max-width: 1024px) {
      bottom: -11rem;
    }
    @media (max-width: 800px) {
      bottom: -16rem;
      left: 9%;
    }
    @media (max-height: 800px) {
      bottom: -33%;
      left: 9%;
    }
    @media (max-width: 600px) {
      bottom: -16rem;
      left: 0%;
    }
  }
  .qrCodeWrapper {
    position: absolute;
    z-index: 10;
    bottom: -4.375rem;
    left: calc(50% - 150px);
    @media (max-width: 1024px) {
      bottom: -11rem;
    }
    @media (max-height: 800px) {
      bottom: -25%;
    }
  }
`;

interface FeaturesInterface {
  id: Number;
  title: string;
  icon: () => JSX.Element;
}

const introducingDetailsContactOptions: FeaturesInterface[] = [
  {
    id: 1,
    title: "تماس تلفنی",
    icon: CallingIcon,
  },
  {
    id: 2,
    title: "چت آنلاین",
    icon: OnlineChatIcon,
  },
  {
    id: 3,
    title: "اینستاگرام",
    icon: InstagramIntroducingIcon,
  },
  {
    id: 4,
    title: "واتس‌اپ",
    icon: WhatsappIntroducingIcon,
  },
  {
    id: 5,
    title: "تلگرام",
    icon: TelegramIntroducingIcon,
  },
];

interface IntorducingProps {}

const Intorducing: React.FC<IntorducingProps> = () => {
  const optionsListSection = () => {
    const optionsListSection = document.getElementById("optionsList");
    optionsListSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <IntorducingWrapper className="introducing">
      <IntroductionImagesWrapper>
        <div className="IntroductionSvg2Wrapper">
          <Image src={IntroductionSvg2} alt="introducing svg" />
        </div>
        <div className="qrCodeWrapper">
          <Image src={QrCode} alt="QrCode svg" />
        </div>
        <ImageComparisonSlider />
      </IntroductionImagesWrapper>
      <IntorducingDetailsWrapper>
        <IntroducingSvg1Container>
          <Image src={IntroducingSvg1} alt="introducing svg" />
        </IntroducingSvg1Container>
        <IntorducingDetailsTitle>
          همیشه در دسترس مشتریان باشید با امکانات و ویژگی‌هایی جذاب و کارآمد
        </IntorducingDetailsTitle>
        <IntorducingDetailsContainer>
          بازدیدکنندگان از نمایشگاه مجازی شما، از طریق روش‌های متعددی می‌توانند
          با شما در ارتباط باشند:
        </IntorducingDetailsContainer>
        <IntroducingDetailsContactOptionsContainer>
          {introducingDetailsContactOptions?.map((option) => {
            let Icon = option?.icon;
            return (
              <IntroducingDetailsContactOption
                key={"introducingDetailsContactOption" + option?.id}
              >
                <Icon />
                <div className="introducingDetailsContactOptionTitle">
                  {option?.title}
                </div>
              </IntroducingDetailsContactOption>
            );
          })}
        </IntroducingDetailsContactOptionsContainer>
        <MoreInfoButton>
          <StyledButton onClick={optionsListSection}>
            اطلاعات بیشتر
          </StyledButton>
        </MoreInfoButton>
      </IntorducingDetailsWrapper>
    </IntorducingWrapper>
  );
};

export default Intorducing;
