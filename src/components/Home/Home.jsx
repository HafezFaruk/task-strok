import React from "react";

import User from "../User/User.jsx";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar.jsx";

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <div className="bg-banner"></div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <User />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
            
              <ResponsiveAppBar />
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
