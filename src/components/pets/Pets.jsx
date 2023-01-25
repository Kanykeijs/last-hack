import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Pets.css";
import { Box, Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Pets = () => {
  // test
  return (
    <Card sx={{ maxWidth: 1500 }}>
      <Box>
        <Card sx={{ maxWidth: 1500, marginBottom: "5%" }}>
          <CardMedia
            sx={{ height: 600 }}
            image="https://storge.pic2.me/c/1360x800/831/5a3a32ae88f7f.jpg"
            title="green iguana"
          />
        </Card>
      </Box>
      <div className="div-pets">
        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://less-homeless.com/wp-content/uploads/2020/04/cropped-Header-big-min-1.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Гордей
            </Typography>
            <Typography variant="body2" color="text.secondary">
              возраст: 3 года
              <br />
              пол: Мужской
              <br />
              окрас: рыжий
              <br />
              размер: средний
              <br />
              <br />
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="watch" size="small">
              Посмотреть
            </Button>
            <Button size="small"></Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://rayfund.ru/wp-content/uploads/2022/12/Masha-250x250.jpeg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Щенки
            </Typography>
            <Typography variant="body2" color="text.secondary">
              возраст: 6 месяцев
              <br />
              пол: Женский
              <br />
              окрас: рыжий
              <br />
              размер: средний
              <br />
              Можно в семью с: собаками, кошками, детьми
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="watch" size="small">
              Посмотреть
            </Button>
            <Button size="small"></Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://rayfund.ru/wp-content/uploads/2022/11/DSC05722-250x250.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Лента
            </Typography>
            <Typography variant="body2" color="text.secondary">
              возраст: 2 года
              <br />
              пол: Женский
              <br />
              окрас: трехцветный
              <br />
              размер: средний
              <br />
              Можно в семью с: собаками, детьми
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="watch" size="small">
              Посмотреть
            </Button>
            <Button size="small"></Button>
          </CardActions>
        </Card>
      </div>

      <div className="div-pets">
        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://rayfund.ru/wp-content/uploads/2022/12/IMG_4435-1-e1671196710123-250x250.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Фрей
            </Typography>
            <Typography variant="body2" color="text.secondary">
              возраст: 2 месяца
              <br />
              пол: Мужской
              <br />
              окрас: черный с белым
              <br />
              размер: маленький
              <br />
              <br />
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="watch" size="small">
              Посмотреть
            </Button>
            <Button size="small"></Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://rayfund.ru/wp-content/uploads/2022/12/IMG_20221201_145131_323-250x250.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Мурчелло
            </Typography>
            <Typography variant="body2" color="text.secondary">
              возраст: 3,5 месяца
              <br />
              пол: Мужской
              <br />
              окрас: серый
              <br />
              размер: средний
              <br />
              <br />
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="watch" size="small">
              Посмотреть
            </Button>
            <Button size="small"></Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://rayfund.ru/wp-content/uploads/2022/12/IMG_20221201_145117_150-250x250.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ришар
            </Typography>
            <Typography variant="body2" color="text.secondary">
              возраст: 3,5 месяца
              <br />
              пол: Мужской
              <br />
              окрас: рыжий
              <br />
              размер: средний
              <br />
              <br />
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="watch" size="small">
              Посмотреть
            </Button>
            <Button size="small"></Button>
          </CardActions>
        </Card>
      </div>

      <div className="div-pets">
        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://rayfund.ru/wp-content/uploads/2022/12/IMG_20221201_145101_833-250x250.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Челентано
            </Typography>
            <Typography variant="body2" color="text.secondary">
              возраст: 3,5 месяца
              <br />
              пол: Мужской
              <br />
              окрас: табби
              <br />
              размер: средний
              <br />
              <br />
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="watch" size="small">
              Посмотреть
            </Button>
            <Button size="small"></Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://rayfund.ru/wp-content/uploads/2022/12/IMG_20221201_145006_304-250x250.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Мяоника
            </Typography>
            <Typography variant="body2" color="text.secondary">
              возраст: 3,5 месяца
              <br />
              пол: Женский
              <br />
              окрас: серый
              <br />
              размер: средний
              <br />
              <br />
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="watch" size="small">
              Посмотреть
            </Button>
            <Button size="small"></Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://rayfund.ru/wp-content/uploads/2022/11/image-08-11-22-08-11-1-250x250.jpeg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Кнопа
            </Typography>
            <Typography variant="body2" color="text.secondary">
              возраст: 2 года
              <br />
              пол: Женский
              <br />
              окрас: трехцветный
              <br />
              размер: средний
              <br />
              Можно в семью с: собаками, детьми
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="watch" sx={{ color: "black" }} size="small">
              Посмотреть
            </Button>
            <Button size="small"></Button>
          </CardActions>
        </Card>
      </div>
      <Stack spacing={2}>
        <Pagination
          count={10}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </Card>
  );
};

export default Pets;
