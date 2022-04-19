import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Gallery = () => {
    const itemData = [
      {
        img: "https://i.ibb.co/BKRbB4k/img1.jpg",
        title: "Breakfast",
      },
      {
        img: "https://i.ibb.co/FWWVNK2/img2.jpg",
        title: "Burger",
      },
      {
        img: "https://i.ibb.co/5G13CbW/img3.webp",
        title: "Camera",
      },
      {
        img: "https://i.ibb.co/vD6Z9jJ/img4.jpg",
        title: "Coffee",
      },
      {
        img: "https://i.ibb.co/9p1vxkV/img5.jpg",
        title: "Hats",
      },
      {
        img: "https://i.ibb.co/pz6t9qL/img7.jpg",
        title: "Honey",
      },
      
     
    ];
  return (
    <div>
      <ImageList  cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Gallery;
