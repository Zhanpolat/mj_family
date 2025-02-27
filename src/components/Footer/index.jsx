import React from 'react'
import style from './Footer.module.scss'
import logo from "../../assets/HeadImg/x.png";
import PhoneIcon from "@mui/icons-material/Phone"
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram"
import MapComponent from "../MapComponent";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className={style.foot}>
            <img src={logo} alt="logo" />
            <ul>
              <li>
                <PhoneIcon />
                +99891 304 22 11
              </li>
              <li>
                <TelegramIcon />
                @mj_family_nukus
              </li>
              <li>
                <InstagramIcon />
                mj_family_nukus
              </li>
            </ul>
            <MapComponent />
          </div>
          <hr />
          <p>@2025 Mj family</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer