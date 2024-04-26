import React from "react";
import { Select, MenuItem, styled } from "@mui/material";

const StyledSelect = styled(Select)(() => ({
  border: "none",
  backgroundColor: "#f2f2f2",
  boxShadow: "rgba(0,0,0,0.10) 0px 2px 1px",
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
}));
export const Sort = ({ value, changeSort }) => {
  return (
    <StyledSelect
      value={value || "price,desc"}
      onChange={(e) => {
        changeSort("sort", e.target.value);
      }}
    >
      <MenuItem value="price,desc">ფასი: კლებადობით</MenuItem>
      <MenuItem value="price,asc">ფასი: ზრდადობით</MenuItem>
      <MenuItem value="name,desc">სახელი: კლებადობით</MenuItem>
      <MenuItem value="name,asc">სახელი: ზრდადობით</MenuItem>
    </StyledSelect>
  );
};
