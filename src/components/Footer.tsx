import React from "react";
import "./Footer.css";
import map from "../public/images/map-icon.png"
import call from "../public/images/call-icon.png"
import mail from "../public/images/mail-icon.png"
import o from "../public/images/o.png"
import github from "../public/images/github-icon.png"

const Footer = () => {
  return (
    <div className="footer_section layout_padding">
      <div className="container">
        <div className="location_main">
          <div className="location_text">
            <img src= {map} />
            <span className="padding_left_10">
              <a href="#">Javier Prado Este 4763 Camacho, La Molina</a>
            </span>
          </div>
          <div className="location_text center">
            <img src= {call} />
            <span className="padding_left_10">
              <a href="#">(01) 217 0000</a>
            </span>
          </div>
          <div className="location_text right">
            <img src= {mail} />
            <span className="padding_left_10">
              <a href="#">contactohospitaldelbienestar@gmail.com</a>
            </span>
          </div>
        </div>
        <div className="footer_section_2">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="footer_taital">Sobre nosotros</h2>
              <p className="footer_text">
                Hospital del Bienestar es un hospital dedicado a brindar
                atención médica de alta calidad a nuestros pacientes. Con más de
                20 años de experiencia, nos esforzamos por ofrecer un ambiente
                seguro, acogedor y eficiente para todos aquellos que confían en
                nosotros para su bienestar.
                <br />
                Nuestro equipo de médicos altamente capacitados y en constante
                formación, junto con nuestro personal amable y profesional,
                trabajan juntos para brindar una atención personalizada a cada
                paciente. Ofrecemos una amplia gama de servicios médicos, desde
                atención primaria hasta especialidades avanzadas, para
                satisfacer las necesidades de nuestra comunidad.
              </p>
            </div>
            <div className="col-lg-4">
              <h2 className="footer_taital">Services Link</h2>
              <p className="footer_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority havThere are many variations of passages of
                Lorem Ipsum available, but the majority hav
              </p>
            </div>
            <div className="col-lg-4">
              <h2 className="footer_taital">Subscribe</h2>
              <input
                type="text"
                className="Enter_text"
                placeholder="Enter Your Email"
                name="Enter Your Email"
              />
              <div className="subscribe_bt">
                <a href="#">Subscribe</a>
              </div>
              <div className="social_icon">
                <ul>
                  <li>
                    <a href="https://github.com/FreeProject5">
                      <img src={github} />
                    </a>
                  </li>
                  <li>
                    <a href="cascada.html">
                      <img src={o} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">Copyright 2023 - Hospital del Bienestar. Todos los derechos reservados.<a href=""></a></p>
         </div>
      </div>
    </div>
    
  );
};

export default Footer;
