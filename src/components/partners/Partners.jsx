import { Box, Card, CardMedia } from "@mui/material";
import React from "react";

const Partners = () => {
  return (
    <div className="partners">
      <Box>
        <Card sx={{ maxWidth: 1500 }}>
          <CardMedia
            sx={{ height: 600 }}
            image="https://img.freepik.com/premium-photo/business-partners-starting-to-put-together-a-puzzle_160672-23684.jpg?w=2000"
            title="green iguana"
          />
        </Card>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "1000px",
            height: "248px",
            marginTop: "5%",
            padding: "0",
          }}
        >
          <CardMedia
            sx={{ height: 90, width: 200 }}
            image="https://www.shoro.kg/wp-content/themes/shoro/img/logo-new.png"
            title="green iguana"
          />
          <CardMedia
            sx={{ height: 90, width: 200 }}
            image="https://www.megacom.kg/uploads/ckeditor/pictures/1484/content_ru_MegaCom_%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.png"
            title="green iguana"
          />

          <CardMedia
            sx={{ height: 90, width: 200 }}
            image="https://banks.kg/storage/289/rskbank.png"
            title="green iguana"
          />

          <CardMedia
            sx={{ height: 90, width: 200 }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMFKhnDYYcS5euRemPB9-6i6DgcTb6J3pxNujQFTYzciPhv_s7IBcExejzXjPYAuZmK8&usqp=CAU"
            title="green iguana"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "1000px",
            height: "248px",
          }}
        >
          <CardMedia
            sx={{ height: 90, width: 200 }}
            image="https://i.otzovik.com/objects/b/1790000/1785930.png"
            title="green iguana"
          />

          <CardMedia
            sx={{ height: 90, width: 200 }}
            image="https://ab.kg/img/og_logo.png"
            title="green iguana"
          />

          <CardMedia
            sx={{ height: 90, width: 200 }}
            image="https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_UNICEF.svg"
            title="green iguana"
          />

          <CardMedia
            sx={{ height: 90, width: 200 }}
            image="https://img.hhcdn.ru/employer-logo/4029428.jpeg"
            title="green iguana"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
