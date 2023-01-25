import React from "react";
import "./Footer.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="text-us">Напишите нам</button>
            <br />
            <br />
            <ul className="list-address">
              <li>ул. Малая Дмитровка, д. 16, стр. 6</li>
              <br />
              <br />
              <li>+996 (456) 567-98-89,</li>
              <li>info@life-line.kg</li>
            </ul>
            <div className="icons">
              <ul>
                <li>
                  <a href="https://t.me/Charity0789Bot">
                    <TelegramIcon />
                  </a>
                </li>
                <li>
                  <a href="https://youtu.be/pMH1_foBiKI">
                    <YouTubeIcon />
                  </a>
                </li>
                <li>
                  <a href="https://web.whatsapp.com/">
                    <WhatsAppIcon />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/fond.life.line?igshid=YmMyMTA2M2Y=">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.mail.com/">
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </div>
            <ul className="list-address">
              <li>
                © 2021 «Благотворительный фонд помощи тяжелобольным детям»
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="inp">
              <div className="search">
                <input type="text" placeholder="Поиск по сайту" />
              </div>
              <br />
              <br />
              <br />
              <br />
              <ul className="list-address">
                <li>по медицинской части</li>
                <li>+996 (657) 678-88-90, medicial@life-line.kg</li>
                <br />
                <br />
                <li>о программе фонда и условиях участия в ней</li>
                <li>+996 (456) 567-98-34,info@life-line.kg</li>
                <br />
                <br />
                <br />
                <li>ОГРН 1087799004468</li>
                <li>ИНН 7704274681 КПП 770701001</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
