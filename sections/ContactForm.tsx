import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@mui/material/TextField";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

import InfinitLogoScroll from "../components/InfiniteLogoScroll.tsx/InfinitLogoScroll";
import { Row } from "../kit/Row";
import { Col } from "../kit/Column";
import StyledButton from "../kit/Button";
import Select from "../kit/Select";

import ContactFormImg1 from "../public/Images/ContactFormImg1.jpg";
import CarLight from "../public/Images/CarLight.png";
import ContactFormIcon1 from "../Icons/ContactFormIcon1";

export const ContactFormWrapper = styled.section`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 6.875rem 0;
  overflow-x: hidden;
  font-family: irs-m;
  background-color: #000000;
  color: #ffffff;
  @media (max-width: 1440px) {
    padding: 4.875rem 0;
  }
  @media (max-width: 1024px) {
    padding: 3rem 0;
  }
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
  @media (max-width: 420px) {
    padding: 2rem 0;
  }
`;

export const CarImage = styled(Row)`
  position: relative;
  width: 40%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const CarLightImageContainer = styled.div<{ show: boolean }>`
  position: absolute;
  mix-blend-mode: lighten;
  width: 100%;
  height: 100%;
  top: 18%;
  right: -1%;
  display: ${(props) => (props.show ? "bock" : "none")};
`;

export const ContactFormContainer = styled(Col)`
  width: 75%;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
    padding: 0 2rem;
  }
  @media (max-width: 420px) {
    padding: 0 2rem;
  }
`;

export const ContactFormTitle = styled.p`
  position: relative;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 420px) {
    font-size: 1.5rem;
  }

  span {
    color: #1839e8;
  }

  svg {
    position: absolute;
    top: 2.3rem;
    right: 7.6rem;
    @media (max-width: 768px) {
      width: 6rem;
      top: 1.4rem;
      right: 5rem;
    }
    @media (max-width: 420px) {
      width: 10rem;
      top: 2.2rem;
      right: 6rem;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const TextField = styled(Input)`
  width: 32%;
  margin: 10px 0;

  &.fullWidth {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled(Row)`
  width: 100%;
  justify-content: center;
  margin-top: 3rem;
  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
  @media (max-width: 420px) {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .buttonContainer {
    border-radius: 3.75rem;
    color: #ffffff;
    padding: 1rem 1.5rem;
    background-color: #1839e8;
  }
`;

const timeConatctOptions = [
  {
    label: "تماس تلفنی صبح از ساعت 9 تا 12",
    value: "AM9_AM12",
  },
  {
    label: "تماس تلفنی ظهر از ساعت 12 تا 15",
    value: "AM12_PM3",
  },
  {
    label: "تماس تلفنی عصر از ساعت 15 تا 18",
    value: "PM3_PM6",
  },
  {
    label: "تماس تلفنی شب از ساعت 18 تا 21",
    value: "PM6_PM9",
  },
  {
    label: "تماس تلفنی در سریع ترین زمان ممکن",
    value: "AS_SOON_AS_POSSIBLE",
  },
  {
    label: "گفت و گو در واتساپ",
    value: "WHATSAPP_CHAT",
  },
];

interface ContactFormProps { }

interface ContactFormViewModel {
  fullName: string;
  contactNumber: string;
  businessType: string;
  selectedTimeForContact: string;
}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [state, setState] = useState<{
    showCarLight: boolean;
    count: number;
    setInterval: boolean;
  }>({
    showCarLight: false,
    count: 0,
    setInterval: false,
  });
  gsap.registerPlugin(ScrollTrigger);

  const [formData, setFormData] = useState<ContactFormViewModel>({
    fullName: "",
    contactNumber: "",
    selectedTimeForContact: "",
    businessType: "",
  });

  const refCount = useRef<number>(0);
  useEffect(() => {
    // Changig background color
    ScrollTrigger.create({
      trigger: "section.contactForm",
      start: "top 60%",
      end: "bottom 80%",

      onEnter: () => {
        setState((pre) => ({ ...pre, setInterval: true }));
      },
      onEnterBack: () => {
        setState((pre) => ({ ...pre, setInterval: true }));
      },
      onLeave: () => {
        refCount.current = 0;
        setState((pre) => ({ ...pre, setInterval: false }));
      },
      onLeaveBack: () => {
        setState((pre) => ({ ...pre, setInterval: false }));
        refCount.current = 0;
      },
    });
  }, []);
  useEffect(() => {
    if (state?.setInterval && refCount.current === 0) {
      const myInterval = setInterval(() => {
        refCount.current < 4 &&
          setState((pre) => ({
            ...pre,
            showCarLight: !pre?.showCarLight,
            count: pre?.count + 1,
          }));
        refCount.current = refCount.current + 1;

        if (refCount.current === 4) {
          // myInterval=null
          clearInterval(myInterval);
        }
      }, 300);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.setInterval, refCount.current]);

  const formHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/venueOwner/landing/contactRequestFromVenueOwner`,
        formData
      )
      .then((response) => {
        if (response?.status === 200) {
          setFormData({
            fullName: "",
            contactNumber: "",
            selectedTimeForContact: "",
            businessType: "",
          });
          toast.success("درخواست شما با موفقیت ثبت شد.");
        }
      })
      .catch((error) => {
        let errors = error?.response?.data?.errors;
        if (errors?.length > 0) {
          errors?.forEach(
            (item: {
              location: string;
              msg: string;
              param: string;
              value: string;
            }) => {
              toast.error(item.msg);
            }
          );
        } else {
          toast.error(
            `متاسفانه درخواست شما با موفقیت ثبت نشد! دوباره تلاش کنید.`
          );
        }
      });
  };

  return (
    <ContactFormWrapper className="contactForm" id="contactForm">
      <CarImage>
        <Image
          src={ContactFormImg1}
          alt="Picture of car"
          // layout="fill"
          objectFit="contain"
        />
        <CarLightImageContainer show={state?.showCarLight}>
          <Image
            src={CarLight}
            alt="Picture of car"
            layout="fill"
            objectFit="contain"
          />
        </CarLightImageContainer>
      </CarImage>
      <InfinitLogoScroll />
      <ContactFormContainer>
        <ContactFormTitle>
          آیا شما صاحب نمایشگاه هستید؟ فرم زیر را کامل کنید تا تیم فروش ما در
          <span> زمان انتخابی </span>
          با شما تماس بگیرند.
          <ContactFormIcon1 />
        </ContactFormTitle>
        <Form onSubmit={(e) => formHandler(e)}>
          <TextField
            id="fullName"
            label=" نام و نام خانوادگی مدیریت"
            required
            focused={formData?.fullName ? true : undefined}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e?.target?.value });
            }}
            value={formData?.fullName}
          />

          <TextField
            id="contactNumber"
            label="شماره تلفن همراه"
            required
            focused={formData?.contactNumber ? true : undefined}
            onChange={(e) => {
              setFormData({ ...formData, contactNumber: e?.target?.value });
            }}
            value={formData?.contactNumber}
          />
          <Select
            id="selectedTimeForContact"
            label="زمان انتخابی جهت تماس کارشناسان ما با شما"
            required
            focused={formData?.selectedTimeForContact ? true : undefined}
            onChange={(e) => {
              setFormData({
                ...formData,
                selectedTimeForContact: e?.target?.value,
              });
            }}
            options={timeConatctOptions}
            value={formData?.selectedTimeForContact}
          />

          <ButtonContainer>
            <StyledButton type="submit">ارسال جهت ارتباط با ما</StyledButton>
          </ButtonContainer>
        </Form>
      </ContactFormContainer>
    </ContactFormWrapper>
  );
};

export default ContactForm;
