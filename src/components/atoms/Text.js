import { Typography } from "@mui/material";
import React from "react";

export const Text = ({ variant = "body1", children }) => {
  return (
    <div>
      <Typography variant={variant}>{children}</Typography>
    </div>
  );
};
