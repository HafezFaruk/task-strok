import React from 'react';
import userImage from '../../images/profile-pic1.png'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMessage,
  AiFillRead,
} from "react-icons/ai";


const User = () => {
    return (
      <Box>
        <Box>
          <img className="userImage" src={userImage} alt="" />
          <Typography variant="p" component="h4">
            Md Omar Faruk
          </Typography>
          <Typography variant="p" component="p">
            MERN Stack Web Developer
          </Typography>
          <Typography variant="p" component="p">
            hmomarfaruk1454@gmail.com
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
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
            justifyContent: "space-around",
          }}
        >
          < AiOutlineTwitter />
          < AiFillMessage />
          < AiFillInstagram />
          < AiFillRead />
        </Box>
      </Box>
    );
};

export default User;