import React, { ReactElement, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { Row } from "../../kit/Row";
import Image from "next/image";

import OnlinePay from "../../public/Images/OnlinePay.svg";
import Wallet from "../../public/Images/Wallet.svg";
import Bill from "../../public/Images/Bill.svg";
import CreditCard from "../../public/Images/CreditCard.svg";
import Cash from "../../public/Images/Cash.svg";


import TweenTarget = gsap.TweenTarget;

export const PaymentMethodsInfintScrollWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  font-family: irs-m;
`;

export const PaymentMethodsInfintScrollContainer = styled(Row)`
  align-items: center;
  width: max-content;
`;
export const PaymentMethodsInfintScrollTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  padding-right: 2rem;
  @media (max-width: 1024px) {
    font-size: 1.5rem;
    padding-right: 1rem;

  }
`;
export const PaymentMethodsInfintScrollIcon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  /* margin: 0 1rem; */
  @media (max-width: 1024px) {
    width: 3rem;
  }
`;
export const AnimationContetntContainter = styled(Row)`
  width: 20rem;
  align-items: center;
  @media (max-width: 1024px) {
    width: 15rem;

  }
`;

const PaymentMethodsInfintScrollItems = [
  {
    id: 1,
    title: "درگاه آنلاین",
    icon: OnlinePay,
  },
  {
    id: 2,
    title: "پول نقدی",
    icon: Cash,
  },
  {
    id: 3,
    title: "کارت بانکی",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "صورتحساب",
    icon: Bill,
  },
  {
    id: 5,
    title: "کیف دیجیتال",
    icon: Wallet,
  },

]

const animationContent = PaymentMethodsInfintScrollItems.map(option =>
  <AnimationContetntContainter key={"option" + option?.id}>
    <PaymentMethodsInfintScrollIcon>
      <Image src={option?.icon} alt="option logo" />
    </PaymentMethodsInfintScrollIcon>
    <PaymentMethodsInfintScrollTitle>{option?.title}</PaymentMethodsInfintScrollTitle>
  </AnimationContetntContainter>)

interface PaymentMethodsInfintScroll { }

const renderMarqueeElements = () => {
  for (let i = 5; i < 16; i++) {
    animationContent[i] = animationContent[i % 5];
  }

  return animationContent.map((e: ReactElement, i: number) => (
    <div key={"PaymentMethodsInfintScrollContent" + i}>{e}</div>
  ));
};

const PaymentMethodsInfintScroll: React.FC<PaymentMethodsInfintScroll> = () => {
  const PaymentMethodsInfintScrollContainerRef = useRef<any>();
  const marqueeTween = useRef<TweenTarget>();

  useEffect(() => {
    //set animation for text
    marqueeTween.current = gsap.to(PaymentMethodsInfintScrollContainerRef.current, {
      x: `+=${window.innerWidth > 1024 ? "100rem" : "75rem"}`,
      ease: "none",
      repeat: -1,
      duration: 30,
    });
  }, []);

  return (
    <PaymentMethodsInfintScrollWrapper>
      <PaymentMethodsInfintScrollContainer ref={PaymentMethodsInfintScrollContainerRef}>
        {renderMarqueeElements()}
      </PaymentMethodsInfintScrollContainer>
    </PaymentMethodsInfintScrollWrapper>
  );
};

export default PaymentMethodsInfintScroll;
