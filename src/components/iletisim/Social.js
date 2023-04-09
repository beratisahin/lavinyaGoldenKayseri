import "./Iletisim.css";
import React from "react";
import useDocumentTitle from "../../useDocumentTitle.js";
import Title from "../title/Title";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HomeIcon from "@material-ui/icons/Home";
import i1 from "./1.webp";
import i2 from "./2.webp";
import i3 from "./3.webp";
import i4 from "./4.webp";
import i5 from "./5.webp";
import i6 from "./6.webp";

function Iletisim() {
  useDocumentTitle("Kayseri Lavinya Golden Güzellik Merkezi ");
  return (
    <div className="row">
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a
          href="https://goo.gl/maps/28cXY86TdkmFAYDS7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={i1} className="contactIcons" title="Adres"></img>
        </a>
        <p className="contactText">
          <span style={{color:"red"}}><b>Adres:</b></span><br/>
          Gevhernesibe Mah. İmtaş Park, Tekin Sk. D:Kat:2 No:2, 38010 <br/> <b>Kocasinan / Kayseri</b>
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a
          href="tel: +905012586638"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={i2} className="contactIcons" title="Rezervasyon"></img>
        </a>
        <p className="contactText">
        <span style={{color:"red"}}><b>Rezervasyon:</b></span><br/>
          <b>0501 258 66 38</b>
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <img src={i3} className="contactIcons" title="Çalışma Saatleri"></img>
        <p className="contactText">
         <span style={{color:"red"}}><b>Çalışma Saatleri:</b></span><br/>
          Her Gün: 09:00 – 19:00
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
      <a href="https://wa.me/+905012586638" target="_blank">
          <img src={i4} className="contactIcons" title="WhatsApp"></img>
        </a>
        <p className="contactText">
        <span style={{color:"red"}}><b>WhatsApp:</b></span><br/>
          <b>0501 258 66 38</b>
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a href="https://www.instagram.com/lavinyagoldenkayseri/" target="_blank">
          <img src={i5} className="contactIcons" title="Instagram"></img>
        </a>
        <p className="contactText">
        <span style={{color:"red"}}><b>Instagram:</b></span><br/>
          @lavinyagoldenkayseri
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a
          href="https://www.facebook.com/profile.php?id=100091519687594s"
          target="_blank"
        >
          <img src={i6} className="contactIcons" title="Facebook "></img>
        </a>
        <p className="contactText">
        <span style={{color:"red"}}><b>Facebook:</b></span><br/>
          @lavinyagoldenkayseri
        </p>
      </div>
    </div>
  );
}

export default Iletisim;
