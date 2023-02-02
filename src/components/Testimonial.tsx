import React from "react";
import comillas from "../public/images/quick-icon.png"

const Testimonial = () => {
  return (
    <div className="testimonial_section layout_padding">
      <div id="my_carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#my_carousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#my_carousel" data-slide-to="1"></li>
          <li data-target="#my_carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <h1 className="testimonial_taital">Testimonios</h1>
              <p className="testimonial_text">
                Algunos testimonios de pacientes satisfechos
              </p>
              <div className="testimonial_section_2">
                <div className="row">
                  <div className="col-md-6">
                    <div className="testimonial_box">
                      <img
                        src="imagen1.png"
                        alt="Imagen 1"
                        className="testimonial_image"
                      />
                      <div className="jonimo_taital_main">
                        <h4 className="jonimo_text">Luis Perez Yañez</h4>
                        <div className="quick_icon">
                          <img src= {comillas} alt = "comillas"/>
                        </div>
                        <div className="quick_icon_1">
                          <img src={comillas} alt = "comillas"/>
                        </div>
                      </div>
                      <p className="dummy_text">
                        "Mi experiencia en este hospital ha sido excelente.
                        Desde el momento en que llegué, todo el personal ha sido
                        muy amable y servicial. La atención médica que recibí
                        fue de primera clase y me sentí muy bien cuidado durante
                        mi estancia. ¡Recomendaría este hospital a cualquiera!"
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="testimonial_box">
                      <img src="imagen2.jpg" alt="Imagen 2" />
                      <div className="jonimo_taital_main">
                        <h4 className="jonimo_text">Alejandra Ramos Cabrera</h4>
                        <div className="quick_icon">
                          <img src={comillas} alt = "comillas"/>
                        </div>
                        <div className="quick_icon_1">
                          <img src={comillas} alt = "comillas"/>
                        </div>
                      </div>
                      <p className="dummy_text">
                        "Estoy profundamente agradecido con todos los
                        profesionales que trabajan en este hospital. Fui
                        atendido con rapidez y eficacia, y siempre me sentí
                        respetado y valorado. La calidad de los cuidados médicos
                        que recibí fue excelente y estoy muy satisfecho con los
                        resultados."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <h1 className="testimonial_taital">Testimonios</h1>
              <p className="testimonial_text">
                Algunos testimonios de pacientes satisfechos
              </p>
              <div className="testimonial_section_2">
                <div className="row">
                  <div className="col-md-6">
                    <div className="testimonial_box">
                      <div className="jonimo_taital_main">
                        <h4 className="jonimo_text">Benito Juarez Ruiz</h4>
                        <div className="quick_icon">
                          <img src={comillas} alt = "comillas"/>
                        </div>
                        <div className="quick_icon_1">
                          <img src={comillas} alt = "comillas"/>
                        </div>
                      </div>
                      <p className="dummy_text">
                        "El hospital es un lugar impresionante con un personal
                        increíblemente amable y capacitado. Todos los médicos y
                        enfermeros que me atendieron eran profesionales y
                        experimentados, y siempre respondieron a mis
                        preocupaciones y necesidades. ¡Estoy muy agradecido por
                        la atención y los cuidados que recibí aquí!"
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="testimonial_box">
                      <div className="jonimo_taital_main">
                        <h4 className="jonimo_text">Martin Condorí Guzman</h4>
                        <div className="quick_icon">
                          <img src={comillas} alt = "comillas"/>
                        </div>
                        <div className="quick_icon_1">
                          <img src={comillas} alt = "comillas"/>
                        </div>
                      </div>
                      <p className="dummy_text">
                        "Fui tratado en este hospital recientemente y mi
                        experiencia ha sido impresionante. Desde la recepción
                        hasta la atención médica, todo el personal ha sido
                        excepcionalmente amable y servicial. La tecnología y los
                        equipos utilizados son de última generación, y estoy muy
                        agradecido por los excelentes resultados que he
                        obtenido."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <h1 className="testimonial_taital">Testimonios</h1>
              <p className="testimonial_text">
                Algunos testimonios de doctores especializados
              </p>
              <div className="testimonial_section_2">
                <div className="row">
                  <div className="col-md-6">
                    <div className="testimonial_box">
                      <div className="jonimo_taital_main">
                        <h4 className="jonimo_text">Dr. Luis Pevez Ramirez</h4>
                        <div className="quick_icon">
                          <img src={comillas} alt = "comillas"/>
                        </div>
                        <div className="quick_icon_1">
                          <img src={comillas} alt = "comillas"/>
                        </div>
                      </div>
                      <p className="dummy_text">
                        "Como médico, puedo decir con confianza que este
                        hospital es un lugar excepcional para recibir atención
                        médica. La tecnología y los equipos son de última
                        generación, y el personal, desde el personal de
                        enfermería hasta los administradores, es amable y
                        servicial. Estoy muy orgulloso de formar parte de esta
                        institución."
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="testimonial_box">
                      <div className="jonimo_taital_main">
                        <h4 className="jonimo_text">
                          Dra. Maria Rojas Gonzales
                        </h4>
                        <div className="quick_icon">
                          <img src={comillas} alt = "comillas"/>
                        </div>
                        <div className="quick_icon_1">
                          <img src={comillas} alt = "comillas"/>
                        </div>
                      </div>
                      <p className="dummy_text">
                        "Trabajar en este hospital es un verdadero placer. La
                        dirección apoya a los médicos y a los pacientes, y se
                        esfuerza por brindar una atención médica de alta
                        calidad. Me siento muy afortunado de ser parte de esta
                        organización y de tener la oportunidad de ayudar a los
                        pacientes a recuperarse y a mejorar su salud."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
