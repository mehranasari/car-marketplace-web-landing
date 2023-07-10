import React, { useEffect } from "react";
import styled from "styled-components";
import { Row } from "../kit/Row";
import StyledButton from "../kit/Button";

import MashinBuzzPrices from "../public/Images/MashinBuzzPrices.jpg";

import LogoIcon from "../Icons/LogoIcon";
import NavnarIcon1 from "../Icons/NavnarIcon1";

export const NavbarWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  padding-top: 1rem;
  z-index: 1000;
  @media screen and (max-width: 350px) {
    position: sticky;
  }
`;

export const NavbarContainer = styled(Row) <{ navbarTransform: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  padding: 0.7rem;
  border-radius: 3.75rem;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(24, 57, 232, 0.3);
  backdrop-filter: blur(10px);
  transform: ${(props) =>
    props.navbarTransform && `translateY(-${props.navbarTransform}px)`};
  transition: 0.3s all ease;
`;

export const LogoWrapper = styled(Row)``;

export const LogoImgContainer = styled(Row)`
  margin-right: 1rem;
  @media screen and (max-width: 768px) {
    width: 2.5rem;
  }
`;

export const LogoName = styled.h1`
  font-size: 1.75rem;
  margin: 0 0.75rem 0 0;
  color: #000000;
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ListContainer = styled(Row)``;

export const ListItem = styled(Row)`
  position: relative;
  margin: 0 1.125rem;
  font-size: 1rem;
  cursor: pointer;
  color: #000000;
  @media screen and (max-width: 768px) {
    display: none;
  }
  :hover {
    span:before {
      transform: scaleX(1);
      transform-origin: left center;
    }
  }
  span:before {
    transform-origin: right center;
    position: absolute;
    bottom: -2px;
    left: 0;
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #000000;
    transform: scaleX(0);
    transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const ActionButtonsContainer = styled(Row)`
  .buttonContainer {
    background: #1839e8;
    border-radius: 3.75rem;
    color: #ffffff;
  }
`;

export const PricesListButton = styled.a<{ navbarTransform: number }>`
  position: relative;
  transform: ${(props) =>
    props.navbarTransform === 0
      ? `translateY(${0}px)`
      : `translateY(${100}px)`};
  transition: 0.3s all ease-in-out;
  margin-left: 1rem;
  @media screen and (max-width: 768px) {
    margin-left: 0.5rem;
  }
  .buttonContainer {
    background-color: #ffffff;
    border-radius: 3.75rem;
    color: #1839e8;
    border: 0.125rem solid #1839e8;
    border-radius: 60px;
  }
`;

export const DemoButton = styled.a<{ navbarTransform: number }>`
  position: relative;
  transform: ${(props) =>
    props.navbarTransform === 0
      ? `translateY(${0}px)`
      : `translateY(${100}px)`};
  transition: 0.3s all ease-in-out;
  svg {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = ({ }) => {
  const [navbarTransform, setNavbarTransform] = React.useState<number>(0);

  let oldScrollY = 0;
  const controlDirection = () => {
    if (window?.scrollY > oldScrollY) {
      setNavbarTransform(100);
    } else {
      setNavbarTransform(0);
    }
    oldScrollY = window?.scrollY;
  };

  useEffect(() => {
    window?.addEventListener("scroll", controlDirection);
    return () => {
      window?.removeEventListener("scroll", controlDirection);
    };
  }, []);

  return (
    <NavbarWrapper>
      <NavbarContainer navbarTransform={navbarTransform}>
        <LogoWrapper>
          <LogoImgContainer>
            <LogoIcon />
          </LogoImgContainer>
          <LogoName>ماشین‌باز</LogoName>
        </LogoWrapper>
        <ListContainer>
          {/* <ListItem>
            <span>سفارش و پرداخت</span>
          </ListItem>
          <ListItem>
            <span>مشتریان شما</span>
          </ListItem>
          <ListItem>
            <span>ویژگی ها</span>
          </ListItem>
          <ListItem>
            <span>منابع</span>
          </ListItem> */}
        </ListContainer>
        <ActionButtonsContainer>
          <PricesListButton
            href={MashinBuzzPrices.src}
            download="لیست تعرفه های ۱۴۰۱ ماشین باز"
            target='_blank'
            rel="noreferrer"
            navbarTransform={navbarTransform}
          >
            <StyledButton>لیست تعرفه‌ها</StyledButton>
          </PricesListButton>
          <DemoButton
            href="https://macan.stage-mashinbuzz.ir"
            target="_blank"
            rel="noreferrer"
            navbarTransform={navbarTransform}
          >
            <StyledButton>
              دموی آنلاین <NavnarIcon1 />
            </StyledButton>
          </DemoButton>
        </ActionButtonsContainer>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
