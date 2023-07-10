import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Row } from "../kit/Row";

import WinWinGameIcon1 from "../Icons/WinWinGameIcon1";
import WinWinGameIcon2 from "../Icons/WinWinGameIcon2";
import WinWinGameIcon3 from "../Icons/WinWinGameIcon3";
import WinWinGameIcon4 from "../Icons/WinWinGameIcon4";

import MoreChanceToSale from "../public/Images/MoreChanceToSale.svg";
import VirtualVenue from "../public/Images/VirtualVenue.svg";
import WhatIsElseBetter from "../public/Images/WhatIsElseBetter.svg";

export const WinWinGameWrapper = styled.section`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 6.875rem 16rem;
  font-family: irs-m;
  @media (max-width: 1440px) {
    padding: 4.875rem 7.75rem;
  }
  @media (max-width: 1024px) {
    margin-top: 2rem;
    padding: 3rem 7.75rem;
  }
  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
  @media (max-width: 420px) {
    padding: 2rem;
  }
`;

export const WinWinGameTitle = styled(Row)`
  position: relative;
  font-size: 2.5rem;
  font-weight: 500;
  color: #000000;
  @media (max-width: 420px) {
    font-size: 2rem;
  }
  svg {
    position: absolute;
    bottom: -0.125rem;
    right: 4.625rem;
    @media (max-width: 420px) {
      width: 12rem;
      bottom: 3rem;
      right: 3rem;
    }
    @media (max-width: 330px) {
      bottom: 2.5rem;
    }
  }
`;

export const WinWinGameDesc = styled(Row)`
max-width: 38rem;
font-size: 1.25rem;
  font-weight: 400;
  color: #000000;
  margin-top: 2rem;
`;

export const OptionsContainer = styled(Row)`
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 3.5rem;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const OptionBox = styled(Row)`
  justify-content: center;
  align-items: flex-start;
  width: 27.5rem;
  height: 20rem;
  justify-content: space-between;
  position: relative;
  padding: 3rem 3rem 0 3rem;
  margin: 0.5rem;
  border: 0.063rem solid #1839e8;
  border-radius: 1.875rem;
  font-size: 2.5rem;
  font-weight: 500;
  color: #000000;
  @media (max-width: 1440px) {
    padding: 2rem;
    font-size: 2rem;
  }
  @media (max-width: 1024px) {
    width: 47%;
    height: 15rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 14rem;
  }
  @media (max-width: 420px) {
    /* padding: 2rem; */
  }
`;

export const OptionBox1 = styled(OptionBox)`
  svg {
    position: absolute;
    top: 6.5rem;
    right: 2.625rem;
    @media (max-width: 1440px) {
      top: 5rem;
      right: 1.5rem;
    }
  }
  .moreChanceToSaleSvg {
    position: absolute;
    bottom: 1rem;
    left: 3rem;
    @media (max-width: 1440px) {
      bottom: 1rem;
      left: 1rem;
    }
    @media (max-width: 1024px) {
      bottom: 0rem;
      left: 2rem;
    }
    @media (max-width: 768px) {
      left: 2rem;
      width: 5rem;
    }
  }
`;

export const OptionBox2 = styled(OptionBox)`
  svg {
    position: absolute;
    top: 6.5rem;
    right: 3rem;
    @media (max-width: 1440px) {
      top: 5rem;
      right: 1.5rem;
    }
  }
  .virtualVenueSvg {
    position: absolute;
    bottom: 1rem;
    left: 3rem;
    @media (max-width: 1440px) {
      bottom: 1rem;
      left: 1rem;
    }
    @media (max-width: 1024px) {
      bottom: -1rem;
      left: 2rem;
    }
    @media (max-width: 768px) {
      left: 1rem;
      width: 8rem;
    }
  }
`;

export const OptionBox3 = styled(OptionBox)`
  svg {
    position: absolute;
    top: 6.5rem;
    right: 2.625rem;
    @media (max-width: 1440px) {
      top: 5rem;
      right: 1.5rem;
    }
  }
  .whatIsElseBetterSvg {
    position: absolute;
    bottom: 1rem;
    left: 3rem;
    @media (max-width: 1440px) {
      bottom: 1rem;
      left: 1rem;
    }
    @media (max-width: 1024px) {
      bottom: 0rem;
      left: 2rem;
    }
    @media (max-width: 768px) {
      left: 2rem;
      width: 5rem;
    }
  }
`;

interface WinWinGameProps { }

const WinWinGame: React.FC<WinWinGameProps> = () => {
  return (
    <WinWinGameWrapper>
      <WinWinGameTitle>
        یک سرویس کامل برای نمایشگاه خودرو
        <WinWinGameIcon1 />
      </WinWinGameTitle>
      <WinWinGameDesc>
        با استفاده از هوش مصنوعی و ابزار قدرتمند آنالیز ماشین‌باز، رفتار
        بازدیدکنندگان و قیمت خودروها را رصد کنید و بهترین عملکرد را میان رقبای
        خود داشته باشید.
      </WinWinGameDesc>
      <OptionsContainer>
        <OptionBox1>
          ٪۶۰ افزایش بازدید
          نمایشگاه و خودروها
          <WinWinGameIcon2 />
          <div className="moreChanceToSaleSvg">
            <Image src={MoreChanceToSale} alt="More Chance To Sale Text" />
          </div>
        </OptionBox1>
        <OptionBox2>
          شخصی‌سازی برندینگ نمایشگاه
          <WinWinGameIcon3 />
          <div className="virtualVenueSvg">
            <Image src={VirtualVenue} alt="Virtual Venue Text" />
          </div>
        </OptionBox2>
        <OptionBox3>
          ٪۴۵ افزایش ارتباط و مکالمه با مشتریان
          <WinWinGameIcon4 />
          <div className="whatIsElseBetterSvg">
            <Image
              src={WhatIsElseBetter}
              alt="Picture of What Is Else Better Text"
            />
          </div>
        </OptionBox3>
      </OptionsContainer>
    </WinWinGameWrapper>
  );
};

export default WinWinGame;
