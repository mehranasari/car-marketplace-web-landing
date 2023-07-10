import React, { useEffect } from "react";
import styled from "styled-components";
import { Row } from "../kit/Row";

import AddaptiveServiceIcon1 from "../Icons/AddaptiveServiceIcon1";

export const AddaptiveServiceWrapper = styled.section`
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
    padding: 3rem 5.75rem;
    margin-top: 2rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
  @media (max-width: 420px) {
    padding: 2rem;
  }
`;

export const AddaptiveServiceTitle = styled(Row)`
  /* max-width: 41.875rem; */
  position: relative;
  font-size: 2rem;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media (max-width: 420px) {
    font-size: 2rem;
    text-align: center;
  }
  svg {
    position: absolute;
    bottom: -0.7rem;
    right: 14.6rem;
    @media (max-width: 768px) {
      width: 8rem;
      right: 11rem;
    }
    @media (max-width: 420px) {
      width: 9rem;
      top: 2.2rem;
      right: unset;
      left: 1.5rem;
    }
  }
`;

export const AddaptiveServiceDesc = styled(Row)`
  max-width: 41.875rem;
  position: relative;
  font-size: 1.125rem;
  font-weight: 400;
  margin-top: 1.75rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 420px) {
    font-size: 1.15rem;
  }
`;

interface AddaptiveServiceProps {}

const AddaptiveService: React.FC<AddaptiveServiceProps> = () => {
  return (
    <AddaptiveServiceWrapper className="addaptiveService">
      <AddaptiveServiceTitle>
        دیجیتالی نمودن نمایشگاه شما بدون هزینه ایجاد و نگهداری سایت
        <AddaptiveServiceIcon1 />
      </AddaptiveServiceTitle>
      <AddaptiveServiceDesc>
        با توجه به قابلیت‌های نمایشگاه شما، سرویس‌های ماشین‌باز قابلیت شخصی‌سازی
        دارند و می‌توانید برای موارد موردنیاز خود آن‌ها را تغییر دهید، از ارائه
        خدمات متفاوت گرفته تا برندینگ مخصوص به شما
      </AddaptiveServiceDesc>
    </AddaptiveServiceWrapper>
  );
};

export default AddaptiveService;
