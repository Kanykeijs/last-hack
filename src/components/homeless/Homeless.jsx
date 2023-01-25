import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import getData from '../../services/getDate'

export default function Homeless() {

  const [homeLess, setHomeLess] = useState([])

  console.log(homeLess);

  useEffect(() => {
    getData
      .getHomeLess()
      .then(res => homeLess(res.data.results))
  }, [])

  return (
    <Card sx={{ maxWidth: 1500 }}>
      <Box>
        <Card sx={{ maxWidth: 1500 }}>
          <CardMedia
            sx={{ height: 600 }}
            image="https://catherineasquithgallery.com/uploads/posts/2021-02/1614439773_20-p-temnii-fon-dlya-saita-20.jpg"
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
      <div className="div-card">
        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://i.pinimg.com/736x/ac/56/e8/ac56e84471d656ed6fbc2457c3f3276f--one-bedroom-tiny-homes.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Сбор на модульное здания приюта
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2 208 500 рублей <br /> Собрано 215 000 рублей
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
            image="https://as1.ftcdn.net/v2/jpg/04/78/55/62/1000_F_478556212_ljQrPOkJ1uEqHaQt3nhThe2j4O37z2rd.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Сбор на хозблок с насосом и водоочисткой
            </Typography>
            <Typography variant="body2" color="text.secondary">
              300 000 рублей <br /> Собрано 21 000 рублей
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
