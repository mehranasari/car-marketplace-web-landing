import * as React from "react";
import { TextField, MenuItem } from "@mui/material";
import styled from "styled-components";

const CustomSelect = styled(TextField)`
  width: 32%;
  margin: 10px 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CustomMenuItem = styled(MenuItem)({
  fontFamily: "irs-m",
});

interface SelectProps {
  id: string;
  onChange: (event: any) => any;
  value?: string | number | readonly string[] | undefined;
  options: {
    label: string;
    value: string | number | readonly string[] | undefined;
  }[];
  label: string;
  required?: boolean;
  focused?: boolean;
}
const Select: React.FC<SelectProps> = (props) => {
  const { onChange, value, options, label, focused, id } = props;
  return (
    <>
      <CustomSelect
        id={id}
        select
        value={value}
        label={label}
        focused={focused}
        onChange={onChange}
      >
        {options?.map((option, index) => (
          <CustomMenuItem key={"customMenuItem" + index} value={option?.value}>
            {option?.label}
          </CustomMenuItem>
        ))}
      </CustomSelect>
    </>
  );
};
export default Select;
