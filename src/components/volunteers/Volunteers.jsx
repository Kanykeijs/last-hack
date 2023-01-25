import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import "./Volunteers.css";

const Volunteers = () => {
  return (
    <div>
      <Box>
        <Card sx={{ maxWidth: 1500 }}>
          <CardMedia
            sx={{ height: 700 }}
            image="https://img.freepik.com/free-vector/social-team-helping-charity-and-sharing-hope_74855-6660.jpg?w=2000&t=st=1674499339~exp=1674499939~hmac=feffab0f7a172fbff5c8049e736accaf9f8c912e5a79e672282f3a1324e80cc8"
            title="green iguana"
          />
        </Card>
      </Box>
      <Typography
        sx={{
          textAlign: "left",
          marginTop: "5%",
          fontSize: "40px",
          marginLeft: "5%",
        }}
        gutterBottom
        variant="h5"
        component="div"
      >
        Добрые дела рядом с вами
      </Typography>
      <br />
      <br />
      <br />
      <Typography
        sx={{
          textAlign: "left",
          marginTop: "5%",
          fontSize: "40px",
          marginLeft: "5%",
        }}
        gutterBottom
        variant="h5"
        component="div"
      >
        О платформе
      </Typography>

      <div className="div-dobro">
        <div>
          <img
            src="https://dobro.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvolunteer-bg.100dd837.png&w=3840&q=75"
            alt=""
            width={600}
            height={500}
          />
          <h3 className="div-text">
            4 432 776 <br /> Волонтеров
          </h3>
        </div>
        <div className="div-dobro-imgages">
          <h3 className="div-text-two">
            343 206 <br /> Добрых дел
          </h3>
          <img
            src="https://dobro.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevents-bg.bb5d9eca.png&w=3840&q=75"
            alt=""
            width={500}
            height={200}
          />
          {/* <h3 className="div-text-two">
            4 432 776 <br /> Волонтеров
          </h3> */}

          <img
            src="https://dobro.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forganizations-bg.b155b15f.png&w=3840&q=75"
            alt=""
            width={500}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
