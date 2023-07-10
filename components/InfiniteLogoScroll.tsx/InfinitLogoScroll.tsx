import React, { ReactElement, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import Image from "next/image";

import { Row } from "../../kit/Row";
import { Col } from "../../kit/Column";

import MashinBuzzLogo from "../../public/Images/MashinBuzz.svg";

import TweenTarget = gsap.TweenTarget;

export const InfinitLogoScrollWrapper = styled(Col)`
  width: 100%;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  font-family: irs-m;
`;

export const InfinitLogoScrollContainer = styled(Row)`
  align-items: center;
  width: max-content;
`;
export const InfinitLogoScrollTitle = styled.p`
  font-size: 8.75rem;
  padding: 0 1rem;
  margin: 3rem 0;
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
`;
export const InfinitLogoScrollIcon = styled.div`
  width: 8.75rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  /* margin: 0 1rem; */
  @media (max-width: 1024px) {
    width: 5rem;
  }
`;
export const AnimationContetntContainter = styled(Row)`
  width: 71rem;
  align-items: center;
  @media (max-width: 1024px) {
    width: 28rem;
  }
`;
const animationContent: ReactElement[] = [
  <AnimationContetntContainter key={"animationContetntContainter"}>
    <InfinitLogoScrollTitle>دریافت ماشین باز</InfinitLogoScrollTitle>
    <InfinitLogoScrollIcon>
      <Image src={MashinBuzzLogo} alt="MashinBuzz logo" />
    </InfinitLogoScrollIcon>
  </AnimationContetntContainter>,
];

interface InfinitLogoScrollProps { }

const renderMarqueeElements = () => {
  for (let i = 1; i < 6; i++) {
    animationContent[i] = animationContent[0];
  }

  return animationContent.map((e: ReactElement, i: number) => (
    <div key={"infintScrollContent" + i}>{e}</div>
  ));
};

const InfinitLogoScroll: React.FC<InfinitLogoScrollProps> = () => {
  const infinitLogoScrollContainerRef = useRef<any>();
  const marqueeTween = useRef<TweenTarget>();

  useEffect(() => {
    //set animation for text
    marqueeTween.current = gsap.to(infinitLogoScrollContainerRef.current, {
      // Width of each AnimationContetntContainter component is 71rem above 1024px and 28rem under 1024px
      x: `+=${window.innerWidth > 1024 ? "71rem" : "28rem"}`,
      ease: "none",
      repeat: -1,
      duration: window.innerWidth > 1024 ? 15 : 10,
    });
  }, []);

  return (
    <InfinitLogoScrollWrapper id="infinitLogo">
      <InfinitLogoScrollContainer ref={infinitLogoScrollContainerRef}>
        {renderMarqueeElements()}
      </InfinitLogoScrollContainer>
    </InfinitLogoScrollWrapper>
  );
};

export default InfinitLogoScroll;
