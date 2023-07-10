import React from "react";
import styled from "styled-components";
import { Row } from "../kit/Row";
import { Col } from "../kit/Column";
import Image from "next/image";

import LogoIcon from "../Icons/LogoIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import WhatsappFooterIcon from "../Icons/WhatsappFooterIcon";

import ArrowUp from "../Icons/ArrowUp";

export const FooterWrapper = styled.footer`
  width: 100%;
  /* height: 100vh; */
  height: 15.375rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  padding: 2.5rem 3.75rem;
  font-family: irs-m;
  border-top: 0.063rem solid #eeeeee;
  @media (max-width: 1440px) {
    padding: 2.5rem 3rem;
  }
  @media (max-width: 1024px) {
    padding: 1.5rem 2rem;
  }
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    height: 13rem;
  }
  @media (max-width: 420px) {
    padding: 1rem;
    height: 17rem;
  }
`;

export const ColumnContainer = styled(Col)`
  height: 100%;
  justify-content: space-between;
  &.heigthAuto {
    height: auto;
    margin-top: 1rem;
  }
`;

export const LogoContainer = styled(Row)`
  svg {
    @media (max-width: 420px) {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const LogoName = styled.h6`
  font-weight: 500;
  font-size: 1.75rem;
  color: #060606;
  margin: 0;
  margin-right: 0.75rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 420px) {
    font-size: 1.25rem;
  }
`;

export const SocialMediaContainer = styled(Row)`
  width: 100%;
  display: flex;

  /* @media (max-width: 420px) {
    justify-content: space-between;
  } */

  svg {
    margin: 0 1rem;
    :first-child {
      margin-right: 0;
    }
    @media (max-width: 420px) {
      width: 2rem;
      height: 2rem;
      margin: 0 1.5rem;
    }
  }
`;

export const Address = styled.p`
  width: 100%;
  color: #424242;
  font-weight: 400;
  font-size: 1.125rem;
  font-family: "irs";
  margin: 0;
  margin-top: 1rem;
  @media (max-width: 420px) {
    max-width: 14.5rem;
  }
`;

export const IconWrapper = styled(Row)`
  width: 100%;
  justify-content: flex-end;
`;

export const IconContainer = styled(Row)`
  position: relative;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  background-color: #ffffff;
  border: 0.094rem solid #1839e8;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    ::before {
      width: 4rem;
      height: 4rem;
    }
    path {
      stroke: #ffffff;
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

  svg {
    z-index: 1;
  }
`;

export const PoweredBy = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 1.125rem;
  color: #424242;
  font-family: irs;
  @media (max-width: 420px) {
    font-size: 1rem;
    max-width: 8rem;
  }
  span {
    font-family: irs-m;
    font-weight: 500;
    color: #000000;
  }
`;

export const EnamadSign = styled.div`
  position: relative;
`;

export const SocialMedia = styled.a`
  cursor: pointer;
  margin-left: 1rem;
  @media only screen and (max-width: 1400px) and (min-width: 1025px) {
    margin-left: 0rem;

    svg {
      width: 50%;
      height: 50%;
    }
  }
`;

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterWrapper>
      <ColumnContainer>
        <LogoContainer>
          <LogoIcon />
          <LogoName>ماشین باز</LogoName>
        </LogoContainer>
        <ColumnContainer className="heigthAuto">
          <SocialMediaContainer>
            <SocialMedia href="https://wa.me/989926070508" target="_blank">
              <WhatsappFooterIcon />
            </SocialMedia>
            <SocialMedia
              href="https://www.instagram.com/mashinbuzzcom"
              target="_blank"
            >
              <InstagramIcon />
            </SocialMedia>
            <SocialMedia
              href="https://www.twitter.com/mashinbuzzcom"
              target="_blank">
              <TwitterIcon />
            </SocialMedia>
            {/* <SocialMedia>
              <LinkedInIcon />
            </SocialMedia> */}
          </SocialMediaContainer>
          <Address>
            تهران، دانشگاه صنعتی شریف، مجتمع فناوری شریف، طبقه چهارم، واحد ۴۱۵
          </Address>
        </ColumnContainer>
      </ColumnContainer>
      <ColumnContainer>
        <IconWrapper>
          <IconContainer
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <ArrowUp />
          </IconContainer>
        </IconWrapper>
        {/* <PoweredBy>
          طراحی و پیاده‌سازی توسط <span>ماشین باز</span>
        </PoweredBy> */}
        <EnamadSign>
          <a
            referrerPolicy="origin"
            target="_blank"
            rel="noreferrer"
            href="https://trustseal.enamad.ir/?id=298973&amp;Code=utFem891UdxInXKgKUcQ"
          >
            <Image
              referrerPolicy="origin"
              src="https://Trustseal.eNamad.ir/logo.aspx?id=298973&amp;Code=utFem891UdxInXKgKUcQ"
              alt=""
              id="utFem891UdxInXKgKUcQ"
              layout="fill"
            />
          </a>
        </EnamadSign>
      </ColumnContainer>
    </FooterWrapper >
  );
};

export default Footer;
