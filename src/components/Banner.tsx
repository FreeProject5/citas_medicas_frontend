import React from "react";

const Banner = () => {
    return (
        <div className="banner_section layout_padding">
                <div className="container-fluid">
                    <section className="slide-wrapper">
                      <div className="container-fluid">
                          <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                                <li data-target="#myCarousel" data-slide-to="4"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <div className="container">
                                      <div className="banner_main">
                                        <h1 className="banner_taital">Medicina interna</h1>
                                        <p className="banner_text">Especialidad médica por antonomasia y gracias a su visión holística del funcionamiento del cuerpo humano es la responsable del estudio, diagnóstico y tratamiento médico de pacientes afectados por diversas patologías.</p>

                                      </div>
                                  </div>
                                </div>
                            <div className="carousel-item">
                                  <div className="container">
                                      <div className="banner_main">
                                        <h1 className="banner_taital">Medicina interna</h1>
                                        <p className="banner_text">Especialidad médica por antonomasia y gracias a su visión holística del funcionamiento del cuerpo humano es la responsable del estudio, diagnóstico y tratamiento médico de pacientes afectados por diversas patologías.</p>

                                      </div>
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <div className="container">
                                      <div className="banner_main">
                                        <h1 className="banner_taital">Medicina interna</h1>
                                        <p className="banner_text">Especialidad médica por antonomasia y gracias a su visión holística del funcionamiento del cuerpo humano es la responsable del estudio, diagnóstico y tratamiento médico de pacientes afectados por diversas patologías.</p>

                                      </div>
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <div className="container">
                                      <div className="banner_main">
                                        <h1 className="banner_taital">Medicina interna</h1>
                                        <p className="banner_text">Especialidad médica por antonomasia y gracias a su visión holística del funcionamiento del cuerpo humano es la responsable del estudio, diagnóstico y tratamiento médico de pacientes afectados por diversas patologías.</p>

                                      </div>
                                  </div>

                                </div>
                            </div>
                          </div>
                        </div>
                    </section>
            </div>
            </div>



    )
}

export default Banner;