import React, { useEffect, useState } from "react";
import { LinearProgress as LinearProgressMui } from "@mui/material";
import styled from "styled-components";

const LinearProgress_ = styled(LinearProgressMui)`
  background-color: rgba(255, 255, 255, 0.3);
  height: 0.15rem;
  & .MuiLinearProgress-bar {
    transition: transform 1s ease-out;
    background-color: #ffffff;
  }
  &[aria-valuenow="0"] {
    & .MuiLinearProgress-bar {
      transition: none;
    }
  }
`;

const LinearProgressWrapper = styled.div`
  margin: 2rem 0;
`;

interface LinearProgressProps {
  time: number;
}

const LinearProgress: React.FC<LinearProgressProps> = ({ time }) => {
  let percentCount: number = 25 / time;
  const [progress, setProgress] = useState<number>(0);


  React.useEffect(() => {
    percentCount = time !== 0 ? 25 / time : 0;
    setProgress(0);
  }, [time]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress + percentCount > 100 ? 100 : prevProgress + percentCount
      );
    }, 250);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <LinearProgressWrapper>
      <LinearProgress_ variant="determinate" value={progress} />
    </LinearProgressWrapper>
  );
};

export default LinearProgress;
