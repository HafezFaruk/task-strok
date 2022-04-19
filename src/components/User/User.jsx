import React from 'react';
import userImage from '../../images/profile-pic1.png'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  AiOutlineTwitter,
  
  AiFillDribbbleCircle,
} from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { FaPinterest, FaCircle } from "react-icons/fa";


const User = () => {
    return (
      <Box>
        <Box>
          <Box>
            <img className="userImage" src={userImage} alt="" />
            <Box sx={{ color: "#FFD700", margin: "-1.5rem -4rem 0rem 0rem" }}>
              <FaCircle />
            </Box>
          </Box>
          <Typography sx={{marginTop: "0.8rem"}} variant="h6" component="h6">
            Md Omar Faruk
          </Typography>
          <Typography sx={{ margin: "0.4rem 0" }} variant="p" component="p">
            MERN Stack Web Developer
          </Typography>
          <Typography variant="p" component="p">
            hmomarfaruk1454@gmail.com
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            margin: "2rem 0",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography variant="p" component="p">
              39922
            </Typography>
            <Typography variant="p" component="p">
              followers
            </Typography>
          </Box>
          <Box>
            <Typography variant="p" component="p">
              5267
            </Typography>
            <Typography variant="p" component="p">
              following
            </Typography>
          </Box>
          <Box>
            <Typography variant="p" component="p">
              4563768
            </Typography>
            <Typography variant="p" component="p">
              Affrction
            </Typography>
          </Box>
        </Box>
        <Typography variant="p" component="p">
          I am interested in working with any company that thinks my skills will
          be helpful to them. If you are looking for someone like me, please let
          me know. Or you can just call me 'Hi'.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem 0",
            fontSize: "2rem",
          }}
        >
          <Box sx={{ color: "#1DA1F2" }}>
            <AiOutlineTwitter />
          </Box>
          <Box sx={{ margin: "0 10px", color: "#B22222" }}>
            <FaPinterest />
          </Box>
          <Box sx={{ marginRight: "10px", color: "#4267B2" }}>
            <SiFacebook />
          </Box>
          <Box sx={{ color: "#ea4c89" }}>
            <AiFillDribbbleCircle />
          </Box>
        </Box>
      </Box>
    );
};

export default User;