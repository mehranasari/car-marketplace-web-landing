import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Col } from "../kit/Column";
import { Row } from "../kit/Row";

import DownArrow from "../Icons/DownArrow";

export const FAQWrapper = styled.section`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 8rem 10rem;
  font-family: irs-m;
  @media (max-width: 1440px) {
    padding: 4.875rem 7.75rem;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
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

export const FAQDetailsTitle = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

export const FAQDetailsWrapper = styled(Col)`
  width: 60.313rem;
  justify-content: flex-start;
  padding-right: 2rem;
  @media (max-width: 1440px) {
    width: 70%;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
    padding-right: 0;
    margin-top: 1rem;
  }
`;

export const FAQContainer = styled(Col)`
  width: 100%;
  justify-content: flex-start;
`;

export const FAQItem = styled(Col) <{ isActive: boolean }>`
  width: 100%;
  background-color: ${(props) => (props.isActive ? `#1839E8` : `transparent`)};
  color: ${(props) => (props.isActive ? `#ffffff` : `unset`)};
  border-radius: 1rem;
  padding: ${(props) => (props.isActive ? `2rem` : `1rem`)};
  cursor: pointer;
`;

export const FAQTitle = styled(Row)`
  flex-wrap: nowrap;
`;

export const IconContainer = styled(Row) <{ isActive: boolean }>`
  position: relative;
  width: 2.75rem;
  height: 2.75rem;
  justify-content: center;
  margin-left: 1rem;
  background-color: #ffffff;
  border: 0.094rem solid #1839e8;
  border-radius: 50%;
  :hover {
    ::before {
      width: 2.75rem;
      height: 2.75rem;
    }
    path {
      fill: #ffffff;
    }
  }
  ::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: #1839e8;
    transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
  }
  @media (max-width: 768px) {
    margin-left: 0.5rem;
  }
  svg {
    transform: ${(props) => (props.isActive ? `rotate(180deg)` : `none`)};
    transition: transform 0.2s ease-in-out;
    z-index: 1;
  }
`;

export const FAQTitleText = styled(Row)`
  width: fit-content;
  font-size: 1.375rem;
`;

export const FAQDetail = styled(Row) <{ isActive: boolean }>`
  width: 100%;
  font-size: 1rem;
  margin-top: 0.5rem;
  text-align: justify;
  overflow: hidden;
  max-height: ${(props) => (props.isActive ? `18rem` : `0`)};
  transition: max-height 0.5s;
`;

interface FAQsInterface {
  id: Number;
  title: string;
  detail: string;
}

const FAQs: FAQsInterface[] = [
  {
    id: 1,
    title: "آیا ماشین باز یک اپلیکیشن هست؟",
    detail:
      "ماشین باز یک برنامه نیست؛ بنابراین مشتریان شما آن را در اپ بازار یا Play Store پیدا نخواهند کرد. در لحظه‌ای که مشتریان کد QR را اسکن می‌کنند، به یک برنامه وب هدایت می‌شوند و به آنها امکان دسترسی به منوی شما داده می‌شود. بدون نصب برنامه، بدون دانلود",
  },
  {
    id: 2,
    title: "چگونه با ماشین‌باز تعداد مشتری‌های خود را افزایش دهم؟",
    detail:
      "بازدیدکنندگان می‌توانند از طریق اسکن QR کد (به شکل برچسب روی سر در/روی کرکره/پشت شیشه) به راحتی و بدون نصب هیچ برنامه‌ای به نمایشگاه مجازی شما وارد شوند، خدمات و سرویس‌های شما را ببینند، از خودروهای شما بازدید کنند، مورد بررسی قرار دهند و به راحتی با شما از طریق تماس تلفنی یا چت ارتباط برقرار کنند. به این ترتیب حتی در زمان بسته بودن نمایشگاه هم بازدیدکنندگان می‌توانند خودروهای شما را ببینند و با شما در ارتباط باشند.  ",
  },
  {
    id: 3,
    title: "آیا ماشین‌باز روی همه موبایل‌ها کار میکند؟",
    detail: `بله ماشین باز روی تمام گوشی های هوشمند از هر مدل و برندی قابل اجراست .`,
  },
  {
    id: 4,
    title: "کار با اپلیکیشن ماشین‌باز راحت است؟",
    detail:
      "راه اندازی ماشین باز از این آسان‌تر نمی‌شود. می‌توانیم نمایشگاه مجازی شما را در کمتر از ۱۵ دقیقه راه اندازی کنیم.",
  },
];

interface FAQProps { }

const FAQ: React.FC<FAQProps> = () => {
  const [activeFAQ, setActiveFAQ] = useState<FAQsInterface | null>(
    FAQs[0]
  );

  const handleActiveFAQ = (faq: FAQsInterface) => {
    if (faq === activeFAQ) {
      setActiveFAQ(null);
    } else {
      setActiveFAQ(faq);
    }
  };

  return (
    <FAQWrapper className="fAQ">
      <FAQDetailsTitle>سوالی براتون پیش اومد؟</FAQDetailsTitle>
      <FAQDetailsWrapper>
        <FAQContainer>
          {FAQs?.map((faq) => {
            return (
              <FAQItem
                key={`faq_${faq?.id}`}
                isActive={faq?.id === activeFAQ?.id ? true : false}
                onClick={() => handleActiveFAQ(faq)}
              >
                <FAQTitle>
                  <IconContainer
                    isActive={faq?.id === activeFAQ?.id ? true : false}
                  >
                    <DownArrow />
                  </IconContainer>
                  <FAQTitleText>{faq?.title}</FAQTitleText>
                </FAQTitle>
                <FAQDetail
                  isActive={faq?.id === activeFAQ?.id ? true : false}
                >
                  {faq?.detail}‌
                </FAQDetail>
              </FAQItem>
            );
          })}
        </FAQContainer>
      </FAQDetailsWrapper>
    </FAQWrapper>
  );
};

export default FAQ;
