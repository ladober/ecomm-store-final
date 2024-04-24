import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid item>
        <h1>This is Header</h1>
      </Grid>
      <Grid
        item
        sx={{
          paddingTop: 20,
          minHeight: "100%",
          width: "100%",
          pb: 10,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
};
