
import React, { useEffect } from "react";
import DayImage from "../public/Images/day.jpg";
import NightImage from "../public/Images/night.jpg";
import styled from "styled-components";
import Image from "next/image";

import ImageComparsionSliderSeprator from "../public/Images/ImageComparsionSliderSeprator.svg";

type Props = {};
function initComparisons() {
  let x, i;
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    compareImages(x[i]);
  }
  function compareImages(img: any) {
    let slider: any;
    let clicked = 0;
    let w: number;
    let h: number;
    w = img.offsetWidth;
    h = img.offsetHeight;
    img.style.width = w / 2 + "px";
    slider = document.getElementsByClassName("img-comp-slider")[0];
    img.parentElement.insertBefore(slider, img);
    slider.style.top = "-2.7rem";
    slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";
    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);
    slider.addEventListener("touchstart", slideReady);
    window.addEventListener("touchend", slideFinish);
    function slideReady(e: any) {
      e.preventDefault();
      clicked = 1;
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      clicked = 0;
    }
    function slideMove(e: any) {
      var pos;
      if (clicked == 0) return false;
      pos = getCursorPos(e);
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      slide(pos);
    }
    function getCursorPos(e: any) {
      var a,
        x = 0;

      a = img.getBoundingClientRect();
      x = e.changedTouches
        ? e.changedTouches[0].pageX - a.left
        : e.pageX - a.left;
      x = x - window.pageXOffset;

      return x;
    }
    function slide(x: any) {
      img.style.width = x + "px";
      slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
    }
  }
}
export const ImageSliderContainer = styled.div`
  width: 34.125rem;
  height: 34.266rem;
  border-radius: 36px;
  direction: ltr;
  @media (max-width: 530px) {
    width: 100%;
  }
  * {
    box-sizing: border-box;
  }

  .img-comp-container {
    position: relative;
    height: 34.266rem;
    border-radius: 36px;
  }

  .img-comp-img {
    position: absolute;
    width: auto;
    height: auto;
    overflow: hidden;
  }

  .img-comp-img img {
    display: block;
    border-radius: 36px;
    width: 34.125rem;
    height: 34.266rem;
    @media (max-width: 530px) {
      width: calc(100vw - 56px);
      height: calc(100vw - 56px);
    }
  }

  .img-comp-slider {
    position: absolute;
    z-index: 9;
    cursor: ew-resize;
    width: 40px;
    height: calc(34.266rem + 40px);
    overflow-y: hidden;
  }
`;

const ImageComparisonSlider = (props: Props) => {
  useEffect(() => {
    initComparisons();
  }, []);
  return (
    <ImageSliderContainer>
      <div className="img-comp-container">
        <div className="img-comp-img">
          <img src={DayImage?.src} />
        </div>
        <div className="img-comp-slider">
          <Image src={ImageComparsionSliderSeprator} alt="venue day image" />
        </div>

        <div className="img-comp-img img-comp-overlay">
          <img src={NightImage?.src} />
        </div>
      </div>
    </ImageSliderContainer>
  );
};

export default ImageComparisonSlider;
