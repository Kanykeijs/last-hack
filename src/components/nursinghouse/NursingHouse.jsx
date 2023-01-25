import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./NursingHouse.css";
import CallIcon from "@mui/icons-material/Call";
import getDate from "../../services/getDate";

export default function NursingHouse() {


  useEffect(() => {
    getDate
      .getNarshingHouse()
      .then(res => console.log(res.data))
  }, [])

  return (
    <Card sx={{ maxWidth: 1500 }}>
      <CardMedia
        sx={{ height: 900 }}
        image="https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg?cs=srgb&dl=pexels-pixabay-276551.jpg&fm=jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography
          sx={{ textAlign: "center", marginTop: "5%" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          Дом престарелых
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
          Дом престаре́лых — государственная или частная организация,
          предоставляющая пожилым (престарелым) людям место постоянного
          проживания с оказанием услуг жизнеобеспечения: приготовление еды, уход
          и прочее. В таких домах престарелые освобождаются от необходимости
          готовить себе еду и делать уборку в своем жилище. Престарелые люди
          могут вместе проводить время за разговорами, прогулками и
          развлечениями (просмотром телевизора, настольными или даже
          компьютерными играми). Вместе с тем пребывание в нём характеризуется
          рядом особенностей, которые должны стать предметом научных
          исследований в области геронтологии и гериатрии. Одним из направлений
          повышения адаптации в доме престарелых может быть реабилитация с
          применением комплекса доступных домам престарелых
          кинезотерапевтических, физиотерапевтических и медикаментозных
          мероприятий.
          <br />
          <br />
          <br />
          Дом престарелых имеет многовековую историю, так как нуждающиеся в
          помощи старики существовали на протяжении всей истории[1][2]. В
          настоящее время во многих странах дом престарелых является одной из
          важнейших форм длительного стационарного пребывания пожилых людей. По
          форме собственности все учреждения данного типа разделены на
          государственные и частные. Качество услуг в данных учреждениях сильно
          варьируется: дом для престарелых может быть бесплатным, обеспечиваемым
          государством, или платным, причём как с арендной платой, так и с
          единовременным платежом, дающим права собственности на часть дома.
          Дома престарелых распространены преимущественно в государствах, где
          преобладающим типом семьи является нуклеарная семья и где взрослые
          представители разных поколений живут раздельно. Яркие примеры таких
          стран и государств: США, Северная и Западная Европа, Япония.
          Постепенно эта форма ухода за пожилыми людьми становится
          распространенной и в странах бывшего соцлагеря. В других государствах
          престарелые люди зачастую живут вместе с взрослыми детьми или другими
          близкими родственниками.
        </Typography>
      </CardContent>
      <div className="div-card">
        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://img.freepik.com/premium-photo/long-shot-nurse-helping-old-man-getting-up_23-2148239021.jpg?w=2000"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Дом престарелых
            </Typography>
            <Typography variant="body2" color="text.secondary">
              В пансионате «Тепло родини» в Житомире организуется качественная
              забота за пожилыми и больными людьми, которую осуществляют только
              опытные медицинские работники.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <CallIcon />
            </Button>
            <Button size="small">info@teplo-dim.com.ua</Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="http://www.ogkochetkov.ru/uploads/pics/Dom_prestarelykh.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Дом престарелых
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Весь персонал нашего пансионата готов в любое время оказать
              медицинскую помощь любой сложности.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <CallIcon />
            </Button>
            <Button size="small">info@24.kg</Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJaFTHU9Lxa6jvVpGf0sOFiIdzSFY1M-Aqg&usqp=CAU"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Дом престарелых
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Сиделки, которые работают в нашем пансионате, смогут не только
              помочь вашему родственнику организовать все бытовые дела, но и
              станут для них хорошим другом и собеседником.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <CallIcon />
            </Button>
            <Button size="small">info@teplo-dim.com.ua</Button>
          </CardActions>
        </Card>
      </div>

      <div className="div-card">
        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://технология-бизнеса.рф/upload/iblock/43a/43a4fc56734aebca8edbb7a1f85537f2.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Дом престарелых
            </Typography>
            <Typography variant="body2" color="text.secondary">
              В пансионате «Тепло родини» в Житомире организуется качественная
              забота за пожилыми и больными людьми, которую осуществляют только
              опытные медицинские работники.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <CallIcon />
            </Button>
            <Button size="small">info@teplo-dim.com.ua</Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://domprestarelykh.com/upload/medialibrary/81e/81ecf19a18de6da5550be9a2fb7e3ee3.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Дом престарелых
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Весь персонал нашего пансионата готов в любое время оказать
              медицинскую помощь любой сложности.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <CallIcon />
            </Button>
            <Button size="small">info@24.kg</Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://cdn.forbes.ru/files/story_images/tass_39742261.jpg__1593000491__89084.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Дом престарелых
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Сиделки, которые работают в нашем пансионате, смогут не только
              помочь вашему родственнику организовать все бытовые дела, но и
              станут для них хорошим другом и собеседником.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <CallIcon />
            </Button>
            <Button size="small">info@24.kg</Button>
          </CardActions>
        </Card>
      </div>
      <CardActions>
        <Button sx={{ marginLeft: "200px" }} size="small">
          © Адреса Телефоны Бишкек
        </Button>
        <Button sx={{ paddingLeft: "100px" }} size="small">
          Обратная связь
        </Button>
      </CardActions>
    </Card>
  );
}
