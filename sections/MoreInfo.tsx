import React, { ReactElement, useEffect, useRef } from "react";
// import { gsap } from "gsap";
import styled from "styled-components";
import { Row } from "../kit/Row";
import Image from "next/image";
import PaymentMethodsShining from "../public/Images/PaymentMethodsShining.svg";
import SupportIcon from "../public/Images/SupportIcon.svg";
import PhoneCallIcon from "../public/Images/PhoneCallIcon.svg";
import WhatsAppIcon from "../public/Images/WhatsAppIcon.svg";
import StyledButton from "../kit/Button";

export const MoreInfoWrapper = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  font-family: irs-m;
  overflow: hidden;
  text-align: center;
  padding: 8rem 10rem;
  @media (max-width: 1440px) {
    padding: 4.875rem 7.75rem;
  }
  @media (max-width: 1024px) {
    padding: 3rem 8.75rem;
  }
  @media (max-width: 760px) {
    padding: 3rem 2rem;
  }
  @media (max-width: 420px) {
    padding: 2rem;
  }
`;
export const MoreInfoText = styled.div`
  padding: 0 10rem 3rem 10rem;
  position: relative;
  @media (max-width: 1024px) {
    padding: 3rem 1rem 3rem 1rem;
  }
`;
export const MoreInfoTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  position: relative;
`;
export const MoreInfoTitleSvg = styled.div`
  position: absolute;
  right: 3rem;
  bottom: -2.7rem;
  @media (max-width: 400px) {
    right: 2rem;
    top: -2.5rem;
  }
  @media only screen and (min-width: 400px) and (max-width: 700px) {
    right: calc(50% - 135px);
  }
`;

export const MoreInfoDesciption = styled.p`
  font-size: 1.1rem;
`;
export const MoreInfoActions = styled(Row)`
  justify-content: center;
`;
export const ButtonAction = styled(StyledButton)`
  .button_Text {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    color: white;
    font-family: irs-m;
    align-items: center;
    @media screen and (min-width: 1200px) and (max-width: 1440px) {
      gap: 1rem;
    }
    @media (max-width: 420px) {
      gap: 1rem;
    }
  }

  .title {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1rem;
    @media (max-width: 760px) {
      font-size: 1.5rem;
    }
    @media (max-width: 320px) {
      font-size: 1.3rem;
    }
  }
  .desc {
    font-size: 1.25rem;
    font-weight: 400;
    @media screen and (min-width: 1200px) and (max-width: 1600px) {
      font-size: 1.2rem;
    }
    @media (max-width: 760px) {
      font-size: 1rem;
    }

    @media (max-width: 320px) {
      font-size: 0.85rem;
    }
  }
  .actionText {
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 16.25rem;
    text-align: start;
    @media (max-width: 760px) {
      width: 12rem;
    }
  }
`;
export const Action = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27.5rem;
  height: 11.688rem;
  padding: 2rem;
  background-color: Black;
  border-radius: 1.875rem;
  margin: 0.5rem;
  :hover {
    transform: scale(1.04);
  }
  transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);

  @media screen and (min-width: 1200px) and (max-width: 1700px) {
    width: 31%;
    padding: 1rem;
  }

  @media (max-width: 760px) {
    padding: 1rem;
    width: 100%;
  }
`;

const MoreInfo = () => {
  const scrollToContactFormSection = () => {
    const contactFormSection = document.getElementById("contactForm");
    contactFormSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MoreInfoWrapper>
      <MoreInfoText>
        <MoreInfoTitle>
          به اطلاعات بیشتری نیاز دارید؟
          <MoreInfoTitleSvg>
            <Image src={PaymentMethodsShining} alt="svg of title" />
          </MoreInfoTitleSvg>
        </MoreInfoTitle>
        <MoreInfoDesciption>
          کارشناسان فروش ما آماده پاسخگویی به سوالات شما هستند!
        </MoreInfoDesciption>
      </MoreInfoText>
      <MoreInfoActions>
        <Action
          className="actionContainer"
          onClick={scrollToContactFormSection}
        >
          <ButtonAction disableHoverScal={true}>
            <Image src={PhoneCallIcon} alt="svg of title" />
            <div className="actionText">
              <div className="title">درخواست مشاوره</div>
              <div className="desc">
                کلیک کنید و فرم را تکمیل نمایید تا با شما تماس بگیریم.
              </div>
            </div>
          </ButtonAction>
        </Action>

        <Action
          href="tel:02191692046"
          target="_self"
          className="actionContainer"
        >
          <ButtonAction disableHoverScal={true}>
            <Image src={SupportIcon} alt="svg of title" />
            <div className="actionText">
              <div className="title">تماس تلفنی</div>
              <div className="desc">
                <span>
                  ۴۶ ۲۰ ۶۹ ۹۱ - ۰۲۱
                </span>
              </div>
            </div>
          </ButtonAction>
        </Action>

        <Action
          href="https://wa.me/989926070508"
          target="_blank"
          className="actionContainer"
        >
          <ButtonAction disableHoverScal={true}>
            <Image src={WhatsAppIcon} alt="svg of title" />
            <div className="actionText">
              <div className="title">ارتباط در واتساپ</div>
              <div className="desc">جهت ارسال پیام برای ما، کلیک کنید.</div>
            </div>
          </ButtonAction>
        </Action>
      </MoreInfoActions>
    </MoreInfoWrapper>
  );
};

export default MoreInfo;
