import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HomeIcon from "@mui/icons-material/Home";
import YardIcon from "@mui/icons-material/Yard";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import MosqueIcon from "@mui/icons-material/Mosque";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";

export default function Homeless() {
  return (
    <Card sx={{ maxWidth: 1500 }}>
      <Box>
        <Card sx={{ maxWidth: 1500 }}>
          <CardMedia
            sx={{ height: 600 }}
            image="https://vsluh.ru/upload/resize_cache/iblock/076/500_500_0/n039iduikizryaz734puhxfn5d3x791r.jpg"
            title="green iguana"
          />
        </Card>
      </Box>
      <CardContent>
        <Typography
          sx={{ textAlign: "center", marginTop: "5%" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          Приюты для бездомных
        </Typography>
        <Typography
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "50em",
            marginTop: "5%",
            fontSize: "20px",
          }}
          variant="body2"
          color="text.secondary"
        >
          Бездомные — лица, не имеющие постоянного жилья. Бездомность — одна из
          глобальных проблем человечества, заключающаяся в отсутствии
          возможности обеспечения жильём большого количества жителей планеты и
          порождаемая различными причинами глобального, регионального и местного
          значения, как субъективного, так и объективного характера. Бездомность
          может иметь характер хронический или ситуационный; бездомность может
          быть добровольной либо вынужденной.
          <br />
          <br />
          <br />В древности, когда людей в сравнении с современностью было
          немного, проблема строительства собственного жилища не стояла
          настолько остро, как в наши дни. Сейчас в городах и посёлках нет
          «ничьей» земли, на которой можно осуществить постройку без нарушения
          чьих-либо имущественных прав[источник не указан 2004 дня]. Нехватка
          финансовых средств на покупку либо аренду пристанища, а также законы,
          запрещающие свободное заселение и использование пустующих земель, —
          одни из основных причин бездомности. Бездомность возникает главным
          образом по финансовым причинам и является следствием неспособности
          обеспечить себя собственным жилищем. Она может быть добровольной или
          принудительной, постоянной (называется хронической) или временной.
          Число бездомных в мире, по оценке на 2005 год, составляло около 100
          миллионов человек[2]. Основным местом их проживания являются улицы
          городов. Своё имущество, как правило, бездомные носят с собой.
          Некоторые из них спят под мостами в картонных коробках или палатках и
          обогреваются у костров, разведённых в мусорных баках. Другие
          предпочитают парки и скамейки, но нередки случаи, когда они спят и на
          тротуарах, зимой многие из них стараются обосноваться поближе к
          городским теплотрассам. Они зачастую одеты в лохмотья и грязные вещи,
          найденные в бытовом мусоре, иногда в несколько пар, надетых друг на
          друга.
        </Typography>
      </CardContent>

      <CardMedia
        sx={{ height: 900 }}
        image="https://img.freepik.com/free-vector/outdoor-scene-with-homeless-people_1308-102439.jpg?w=2000"
        title="green iguana"
      />
      <Typography
        sx={{ textAlign: "center", marginTop: "5%", fontSize: "40px" }}
        gutterBottom
        variant="h5"
        component="div"
      >
        некоторые факты о нас
      </Typography>

      <div className="div-card">
        <Card className="card" sx={{ minWidth: 275 }}>
          <HandshakeIcon sx={{ fontSize: "200px", color: "#64b5f6" }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            <Typography
              sx={{ fontWeight: 400, textAlign: "center" }}
              variant="body2"
              color="text.secondary"
            >
              помогаем людям,
              <br /> оставшимся без крыши над головой
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <HomeIcon sx={{ fontSize: "200px", color: "#64b5f6" }} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              представляем жилье и питание
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <YardIcon sx={{ fontSize: "200px", color: "#64b5f6" }} />
          <CardContent>
            <Typography
              sx={{ fontWeight: 400, textAlign: "center" }}
              variant="body2"
              color="text.secondary"
            >
              главное требование: <br /> трудиться в меру своих сил и ни грамма
              алкоголя
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>

      <div className="div-card">
        <Card className="card" sx={{ minWidth: 275 }}>
          <AssignmentIndIcon sx={{ fontSize: "200px", color: "#64b5f6" }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            <Typography
              sx={{ fontWeight: 400, textAlign: "center" }}
              variant="body2"
              color="text.secondary"
            >
              Помогаем восстановить документы
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <MosqueIcon sx={{ fontSize: "200px", color: "#64b5f6" }} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Духовные беседы
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <EmojiNatureIcon sx={{ fontSize: "200px", color: "#64b5f6" }} />
          <CardContent>
            <Typography
              sx={{ fontWeight: 400, textAlign: "center" }}
              variant="body2"
              color="text.secondary"
            >
              Содержим собственных коров, свиней, кур
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>

      <Typography
        sx={{ textAlign: "center", marginTop: "5%", fontSize: "40px" }}
        gutterBottom
        variant="h5"
        component="div"
      >
        Что именно мы делаем?
      </Typography>

      <Typography
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "50em",
          marginTop: "5%",
          fontSize: "20px",
        }}
        variant="body2"
        color="text.secondary"
      >
        Наш приют помогает восстановить документы, начать вести трезвую жизнь,
        возобновить навыки к постоянному труду, помогаем восстановить
        родственные связи. Мы хотим дать людям не только рыбу, но и удочку,
        чтобы поймать рыбу. Приют расположен в Подмосковье 90-километрах от
        Москвы по Ярославскому шоссе. Точный адрес: Владимирская обл.,
        Александровский р-н, дер. Корелы. Площадь земельного участка 4 га. В
        нашем приюте могут жить одновременно до 16-ти человек.
      </Typography>

      <div className="div-card">
        <>
          <Card className="card" sx={{ minWidth: 275 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://s.yimg.com/ny/api/res/1.2/9nWlinytPhekivQ8OBXVpg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/http://41.media.tumblr.com/97d431a16cfabefd551e9960417d13ab/tumblr_inline_nvwrf8bQLT1tchuoh_1280.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Сбор на модульное здания приюта
              </Typography>
              <Typography variant="body2" color="text.secondary">
                450 000 рублей Сбор закрыт
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
          <Card className="card" sx={{ minWidth: 275 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://s.yimg.com/ny/api/res/1.2/9nWlinytPhekivQ8OBXVpg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/http://41.media.tumblr.com/97d431a16cfabefd551e9960417d13ab/tumblr_inline_nvwrf8bQLT1tchuoh_1280.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Сбор на модульное здания приюта
              </Typography>
              <Typography variant="body2" color="text.secondary">
                450 000 рублей Сбор закрыт
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
          <Card className="card" sx={{ minWidth: 275 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://s.yimg.com/ny/api/res/1.2/9nWlinytPhekivQ8OBXVpg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/http://41.media.tumblr.com/97d431a16cfabefd551e9960417d13ab/tumblr_inline_nvwrf8bQLT1tchuoh_1280.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Сбор на модульное здания приюта
              </Typography>
              <Typography variant="body2" color="text.secondary">
                450 000 рублей Сбор закрыт
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
        </>
      </div>
      <CardActions>
        <Button sx={{ marginLeft: "150px" }} size="small">
          © Адреса Телефоны Бишкек
        </Button>
        <Button sx={{ paddingLeft: "100px" }} size="small">
          Обратная связь
        </Button>
      </CardActions>
    </Card>
  );
}
