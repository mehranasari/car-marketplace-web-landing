import React, { useState, useEffect } from 'react';
import { SpeedDial as MuiSpeadDial } from '@mui/material';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import TelegramIcon from '../Icons/TelegramIcon';
import WhatsappColorfulIcon from '../Icons/WhatsappColorfulIcon';
import ChatIcon from '../Icons/ChatIcon';
import styled from "styled-components";


const CustomSpeadDial = styled(MuiSpeadDial)(
  ({ theme }) => `
  left: calc(100% - 110px);
  bottom: 2.5rem;
  @media (max-width:750px){
    left: calc(100% - 5.3rem);
  bottom: 1.5rem;
  }
   .MuiSpeedDial-fab{
    width: 5rem;
    height: 5rem;
 
  },
`)

export default function SpeedDial() {
  const [open, setOpen] = useState(false);
  const [showSpeadDial, setShowSpeadDial] = useState(true)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleActionClick = (url: string) => {
    window.open(url, '_blank')
    handleClose()
  }


  useEffect(() => {
    const body = document.body
    const bodyHeigh = Math.max(body.scrollHeight, body.offsetHeight)
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > bodyHeigh - 1000) {
        setShowSpeadDial(false);
      }
      else {
        setShowSpeadDial(true);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {
      });
    }
  })

  return (
    <>
      {showSpeadDial && <CustomSpeadDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'fixed' }}
        icon={<ChatIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        <SpeedDialAction
          tooltipPlacement={"right"}
          icon={<TelegramIcon />}
          tooltipTitle={"چت با تلگرام"}
          tooltipOpen
          onClick={() => handleActionClick("https://t.me/mashinbuzzapp")}

        />
        <SpeedDialAction
          tooltipPlacement={"right"}
          icon={<WhatsappColorfulIcon />}
          tooltipTitle={"چت با واتساپ"}
          tooltipOpen
          onClick={() => handleActionClick("https://wa.me/989926070508")}
        />

      </CustomSpeadDial>}
    </>
  );
}
