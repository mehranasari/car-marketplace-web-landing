import React from "react";
import styled from "styled-components";
import { ButtonBase } from "@mui/material";

interface StyledButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  loading?: boolean;
  disableHoverScal?: boolean | undefined;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button = styled(ButtonBase)<{
  disablehoverscal: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 0.625rem 1.25rem;
  background-color: ${(props) => props.theme.primary};
  color: #212121;
  font-family: irs;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);

  :focus {
    outline: none;
  }
  :hover {
    transform: ${(props) =>
      props.disablehoverscal !== "true" && "scale(1.1, 1.18)"};
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton: React.FC<StyledButtonProps> = ({
  type,
  loading,
  disableHoverScal,
  children,
  onClick,
  ...otherProps
}) => {
  return (
    <Button
      type={type ? type : "button"}
      className="buttonContainer"
      disabled={loading}
      disablehoverscal={
        disableHoverScal !== undefined
          ? disableHoverScal.toString()
          : "undefined"
      }
      onClick={onClick}
      {...otherProps}
    >
      {loading === true ? (
        <div>لطفا صبر کنید</div>
      ) : (
        <Text className="button_Text">{children ? children : "ادامه"}</Text>
      )}
    </Button>
  );
};

export default StyledButton;
