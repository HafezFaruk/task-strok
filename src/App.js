
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import About from './components/About/About.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Pohoto from './components/Pohoto/Pohoto.jsx';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar.jsx';
import User from './components/User/User.jsx';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import GroupsPage from './components/GroupsPage/GroupsPage.jsx';


const App = () => {
   const Item = styled(Paper)(({ theme }) => ({
     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
     ...theme.typography.body2,
     padding: theme.spacing(1),
     textAlign: "center",
     color: theme.palette.text.secondary,
   }));
  return (
    <>
      <Box className="bg-banner"></Box>
      <Grid container spacing={2}>
        <Grid sx={{ marginTop: "-4rem"}} item xs={12} xl={4} md={4}>
          <Item sx={{ background: "transparent" }}>
            <User />
          </Item>
        </Grid>
        <Grid item xs={12} xl={8} md={8}>
          <BrowserRouter>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Routes>
              <Route path="/pohoto" index element={<Pohoto />} />
              <Route path="/" element={<Gallery />} />
              <Route path="/group" element={<GroupsPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Grid>
    </>
  );
};

export default App;