import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./Children.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Илья Кулабухов",
    imgPath:
      "https://tv8.md/resources/2022/12/05/70d17b56-ecc1-4263-a745-0a9b3f7af94b_1634287992lordok1.jpg",
    // description: "Протонная терапия",
  },
  {
    label: "Ильдар Шамсутдинов",
    imgPath:
      "https://kolobok.ua/i/11/69/80/2/1169802/image_main/437dfeac5d8d08e7a4cd7cfee40f36cc-quality_70Xresize_crop_1Xallow_enlarge_0Xw_698Xh_465.jpg",
    // description: "Оперативное лечение",
  },
  {
    label: "Дарья Рыжова",
    imgPath:
      "https://health.fakty.com.ua/wp-content/uploads/sites/2/2022/02/15/onkologyya-e1644911149623-620x349.jpg",
    // description: "Оперативное лечение",
  },
  {
    label: "Виталий Тоболь",
    imgPath:
      "https://exo-ykt.ru/upload/iblock/aa0/aa03f5cf317a16acf68cab55a5f991de.jpg",
    // description: "Восстановительное лечение",
  },
  {
    label: "Жанет Гиреева",
    imgPath:
      "https://n1s1.hsmedia.ru/84/36/54/843654311e79d7f7941355f7a886fe2d/728x485_1_04072f738dc35f11bb22a7878e48debe@2121x1414_0xac120003_3235339081632917713.jpeg",
    // description: "Протонная терапия",
  },
  {
    label: "Варвара Мигунова",
    imgPath:
      "https://thumbs.dreamstime.com/b/%D0%B4%D0%B5%D1%82%D0%B8-%D0%B1%D0%BE-%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BC%D0%B5-%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B5-56598241.jpg",
  },
  {
    label: "Дарья Обухова",
    imgPath:
      "https://south-ossetia.info/wp-content/uploads/2019/11/%D0%94%D0%A6%D0%9F-760x490.jpg",
  },
  {
    label: "Максим Маленький",
    imgPath:
      "https://img.freepik.com/premium-photo/patient-children-sleeping-on-patient-bed_38810-7741.jpg",
  },
];

function Children() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box>
        <Card>
          <CardMedia
            className="img-deti"
            sx={{ height: 600 }}
            image="https://www.viltiessala.lt/wp-content/uploads/2019/04/viltuke.jpg"
            title="green iguana"
          />
        </Card>
      </Box>
      <Box
        className="maincorus"
        sx={{
          maxWidth: "100%",
          // flexGrow: 1,
          borderRadius: "20px",
          backgroundColor: "white",
        }}
      >
        <Box
          square
          elevation={0}
          sx={{
            padding: "0",
            // display: "flex",
            // alignItems: "center",
            marginTop: "5%",
            marginLeft: "2%",
            height: 50,
            pl: 2,
            fontSize: "50px",
            //bgcolor: "background.default",
            color: "rgb(0, 195, 255)",
          }}
        >
          {images[activeStep].label}
        </Box>

        <Box
          sx={{
            height: 255,
            maxWidth: 400,
            width: "100%",
            p: 2,
            fontSize: "30px",
            color: "black",
            marginTop: "15%",
            marginLeft: "2%",
          }}
        >
          {images[activeStep].description}
        </Box>

        <AutoPlaySwipeableViews
          className="corusimg"
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "400px",
                    display: "block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    width: "100%",
                    float: "right",
                    marginRight: "5%",
                    marginTop: "10%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>

      <MobileStepper
        id="crs"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            sx={{ color: "red", width: "20px", height: "20px" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            sx={{ color: "red" }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
      <div>
        <h1 className="h1-one">Нужна помощь</h1>
      </div>
      <div className="div-card">
        <Card className="card" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              0 лет
            </Typography>
            <Typography variant="h5" component="div">
              Варвара Мигунова
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <p className="nujno">Нужно 231 345 сом</p>
            </Typography>
            <Button>
              <LocalHospitalIcon />
              Вид помощи
            </Button>
            <Typography variant="body2">
              Восстановительное лечение
              <br />
              <Button>
                <VaccinesIcon />
                Диагноз
              </Button>
              <br />
              Незавершенный остеогенез
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"></Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              14 лет
            </Typography>
            <Typography variant="h5" component="div">
              Ульяна О.
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <p className="nujno">Нужно 131 290 сом</p>
            </Typography>
            <Button>
              <LocalHospitalIcon />
              Вид помощи
            </Button>
            <Typography variant="body2">
              Восстановительное лечение
              <br />
              <Button>
                <VaccinesIcon />
                Диагноз
              </Button>
              <br />
              Незавершенный остеогенез
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"></Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              7 лет
            </Typography>
            <Typography variant="h5" component="div">
              Оксана Каррехт
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <p className="nujno">Нужно 1 000 000 с</p>
            </Typography>
            <Button>
              <LocalHospitalIcon />
              Вид помощи
            </Button>
            <Typography variant="body2">
              Аферез
              <br />
              <Button>
                <VaccinesIcon />
                Диагноз
              </Button>
              <br />
              Эмбриональная рабдомиосаркома среднего уха слева
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"></Button>
          </CardActions>
        </Card>
      </div>

      <div className="div-card">
        <Card className="card" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              10 лет
            </Typography>
            <Typography variant="h5" component="div">
              Владимир Николаев
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <p className="nujno">Нужно 250 000 сом</p>
            </Typography>
            <Button>
              <LocalHospitalIcon />
              Вид помощи
            </Button>
            <Typography variant="body2">
              Восстановительное лечение
              <br />
              <Button>
                <VaccinesIcon />
                Диагноз
              </Button>
              <br />
              ДЦП, спастическая диплегия
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"></Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              14 лет
            </Typography>
            <Typography variant="h5" component="div">
              Нина Чередова
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <p className="nujno">Нужно 131 290 сом</p>
            </Typography>
            <Button>
              <LocalHospitalIcon />
              Вид помощи
            </Button>
            <Typography variant="body2">
              Восстановительное лечение
              <br />
              <Button>
                <VaccinesIcon />
                Диагноз
              </Button>
              <br />
              Незавершенный остеогенез
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"></Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              18 лет
            </Typography>
            <Typography variant="h5" component="div">
              Никита Шевченко
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <p className="nujno">Нужно 131 290 с</p>
            </Typography>
            <Button>
              <LocalHospitalIcon />
              Вид помощи
            </Button>
            <Typography variant="body2">
              Аферез
              <br />
              <Button>
                <VaccinesIcon />
                Диагноз
              </Button>
              <br />
              Эмбриональная рабдомиосаркома среднего уха слева
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"></Button>
          </CardActions>
        </Card>
      </div>

      <div>
        <h1 className="h1-help">Вы уже помогли</h1>
      </div>

      <div className="div-card">
        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://sodeistvie-detyam.ru/local/templates/fond/uploads/3cOdnqCP.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Новая жизнь
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <StarBorderIcon />
            </Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://sodeistvie-detyam.ru/local/templates/.default/uploads/17WS63mA.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Новые победы!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <StarBorderIcon />
            </Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://movementup.ru/wp-content/uploads/child-with-cerebral-palsy-physiotherapy-children-therapy-center_56854-3581.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Смотрим в будущее с надеждой!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <StarBorderIcon />
            </Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div className="div-card">
        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://chance.su/uploads/posts/2021-10/1633394983_boldetam-min.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Еще одна победа над раком
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://chance.su/uploads/posts/2020-04/1586042458_i-min.jpeg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Со счастливой улыбкой на лице
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://otkazniki.ru/upload/medialibrary/1cd/1cd1bf6630bb0a599050c2f4ea6a60ea.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Доброе утро для Лизы
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default Children;
