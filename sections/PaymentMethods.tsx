import React, { ReactElement, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { Row } from "../kit/Row";
import Image from "next/image";

import PaymentMethodsInfintScroll from '../components/paymentMethods/PaymentMethodsInfintScroll'

import PaymentMethodsShining from "../public/Images/PaymentMethodsShining.svg"
import PaymentMethodsSvg1 from "../public/Images/PaymentMethodsSvg1.svg"

export const PaymentMethodsWrapper = styled.section`
  width: 100%;
  height:fit-content;
  margin:10rem 0;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  position: relative;
  font-family: irs-m;
  overflow-x: hidden;
  text-align:center;
  @media (max-width:1024px){
        padding-top: 15rem;
        margin: 0 0 8rem 0;
    }

`
export const PaymentMethodsText = styled.div`
  padding: 0 10rem 3rem 10rem;
    position: relative;
    @media (max-width:1024px){
        padding: 3rem 1rem 3rem 1rem;
    }
`
export const PaymentMethodsTitle = styled.h2`
font-size:2rem;
font-weight: 500;
position:relative;
    
`
export const PaymentMethodsTitleSvg = styled.div`
position:absolute;
right:15rem;
bottom:-3rem;
@media (max-width:400px){
        right:6rem;
        bottom: 0;
    }
    @media only screen and (min-width:400px) and (max-width:700px){
        right: calc(50% - 135px);

    }
`

export const PaymentMethodsDesciption = styled.p`
   font-size : 1.1rem ;
`
export const PaymentMethodsImage = styled.div`
    position:absolute;
    top: 2rem;
    right: -5rem;
    @media (max-width:1024px){
        right: calc(50% - 110px);
        top: -8rem;

    }

`




const PaymentMethods = () => {
    return (
        <PaymentMethodsWrapper>
            <PaymentMethodsText>
                <PaymentMethodsTitle>
                    پرداخت با هر روشی که شما بخواهید
                    <PaymentMethodsTitleSvg>
                        <Image
                            src={PaymentMethodsShining}
                            alt="svg of title"
                        />
                    </PaymentMethodsTitleSvg>
                </PaymentMethodsTitle>
                <PaymentMethodsDesciption>
                    ما روش‌های مختلفی را برای دریافت مبالغ مشتریان داریم، این به شما بستگی داره که کدام را برای خود فعال کنید
                </PaymentMethodsDesciption>
                <PaymentMethodsImage>
                    <Image
                        src={PaymentMethodsSvg1}
                        alt="svg of title"
                    />
                </PaymentMethodsImage>
            </PaymentMethodsText>
          <PaymentMethodsInfintScroll/>
        </PaymentMethodsWrapper>

    )
}
export default PaymentMethods;