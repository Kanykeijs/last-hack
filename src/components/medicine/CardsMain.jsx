import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const card = (
  <React.Fragment>
    <CardContent>
      <img
        id="cardimg"
        src="https://www.life-line.ru/upload/iblock/e2f/whltwrmgxrm7458ql8aco7w3f64lmlfi.svg"
        alt=""
      />
      <Typography sx={{ fontSize: 23 }} gutterBottom>
        Восстановительное лечение при онкологии
      </Typography>
      <Typography variant="body2" sx={{ fontSize: 15 }}>
        После трансплантации организм тяжелобольного ребенка наиболее уязвим и
        подвержен различным заболеваниям и инфекциями, клетки полученные при
        трансплантации начинают включаться далеко не сразу. Период реабилитации
        начинается после пересадки костного мозга. Поскольку иммунная система
        ребенка еще не работает, его помещают в стерильную полату с система...
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
  </React.Fragment>
);
const carda = (
  <React.Fragment>
    <CardContent>
      <FavoriteBorderIcon id="likn" sx={{ paddingLeft: "35%" }} />
      <Typography
        id="obrs"
        sx={{ fontSize: 18, color: "black", paddingLeft: "30%" }}
        color="text.secondary"
        gutterBottom
      >
        ОБРАТИТЬСЯ
      </Typography>
      <Typography
        id="obrs"
        sx={{ fontSize: 18, color: "black", paddingLeft: "27%" }}
        color="text.secondary"
        gutterBottom
      >
        ЗА ПОМОЩЬЮ
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <div id="carta">
      <Box id="mnd">
        <Box id="mainid">
          <Card id="cardbr" variant="outlined">
            {card}
          </Card>
          <Card id="cardbr" variant="outlined">
            {card}
          </Card>
          <Card id="cardbr" variant="outlined">
            {card}
          </Card>
          <Card id="cardbr" variant="outlined">
            {card}
          </Card>
          <Card id="cardbr" variant="outlined">
            {card}
          </Card>
          <Card id="cardbr" variant="outlined">
            {card}
          </Card>
          <Card id="cardbr" variant="outlined">
            {card}
          </Card>
          <Card id="cardbr" variant="outlined">
            {card}
          </Card>
          <Card id="cardbr" variant="outlined">
            {card}
          </Card>
          <Card id="cardbr2" variant="outlined">
            {carda}
          </Card>
        </Box>
      </Box>
    </div>
  );
}
