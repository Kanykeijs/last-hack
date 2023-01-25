import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import OutlinedCard from "./CardsMain";

const Medicines = () => {
  return (
    <Box className="mm" sx={{ marginBottom: "2500px" }}>
      <div className="med">
        <ul className="aa">
          <span className="ad">Главная</span>
          <p className="ad">/</p>
          <span className="ad">Медицинские программы</span>
        </ul>
        <h1 className="ab">Медицинские программы</h1>
        <ul className="mbtn">
          <a className="ta" href="">
            {" "}
            <span className="sp">Аферез</span>{" "}
          </a>

          <a className="ta" href="">
            {" "}
            <span className="sp">Востоновительное лечение</span>
          </a>

          <a className="ta" href="">
            {" "}
            <span className="sp">Востоновительное лечение при онкологии</span>
          </a>

          <a className="ta" href="">
            {" "}
            <span className="sp">Иммунотерапия</span>
          </a>

          <a className="ta" href="">
            {" "}
            <span className="sp">Лазерная хирургия</span>
          </a>

          <a className="ta" href="">
            {" "}
            <span className="sp">Медицинское оборудование и инструменты</span>
          </a>

          <a className="ta" href="">
            {" "}
            <span className="sp">Проторная терапия</span>
          </a>

          <a className="ta" href="">
            {" "}
            <span className="sp">Реконструкция гигантских дефектов черепа</span>
          </a>

          <a className="ta" href="">
            {" "}
            <span className="sp">Хирургическое лечение</span>
          </a>
        </ul>
      </div>
      <Box>
        <Box sx={{ display: "flex", height: "470px" }}>
          <Box className="zb">
            <Box>
              <h1 className="za">Наши программы</h1>
            </Box>
            <Box className="mng">
              <Typography sx={{ fontSize: "22px" }}>
                Фонд «Линия жизни» оказывает адресную помощь детям до 18 лет,
                жизнь которых находится под угрозой из-за опасных заболеваний.
                Фонд финансирует высокотехнологичные операции, приобретение
                медицинского оборудования, медицинские исследования.
              </Typography>
              <Typography sx={{ paddingTop: "30px", fontSize: "22px" }}>
                Основные программы фонда — высокотехнологичные методы лечения
                детских онкологических заболеваний, лазерная хирургия, лечение
                плечелучевых синостозов, восстановительное лечение,
                молекулярно-генетические обследования, приобретение
                дорогостоящего высокотехнологичного медицинского оборудования
                для российских больниц.
              </Typography>
              <Typography sx={{ paddingTop: "30px", fontSize: "22px" }}>
                Благотворительный фонд «Линия жизни» поддерживает развитие
                высоких технологий, которые, благодаря его работе, становятся
                доступными.
              </Typography>
            </Box>
          </Box>
          <Box
            id="bx"
            sx={{
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              flexWrap: "wrap",
              borderRadius: "10px",
              height: "350px",
              width: "400px",
              marginTop: "90px",
              // border: "3px black",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                paddingLeft: "80px",
                color: "rgb(60, 60, 60);",
                paddingTop: "55px",
              }}
            >
              отправь SMS на номер
            </Typography>
            <Box
              sx={{
                paddingLeft: "100px",
                fontSize: "30px",
                paddingTop: "0",
                marginTop: "0",
              }}
            >
              <h1 className="hh">4640</h1>
            </Box>
            <Box
              sx={{
                color: "rgb(60, 60, 60);",
                paddingTop: "0",
                marginTop: "0",
              }}
            >
              <h1 className="hhhh">с суммой перевода</h1>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  // marginTop: "15px",
                  marginRight: "30px",
                  fontSize: "20px",
                  color: "rgb(60, 60, 60);",
                }}
              >
                например,
              </Typography>
              <h1 className="hhh">300</h1>
            </Box>
          </Box>
        </Box>
      </Box>
      <OutlinedCard />
    </Box>
  );
};

export default Medicines;
