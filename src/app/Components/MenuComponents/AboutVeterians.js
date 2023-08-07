import React from "react";
import Slider from "react-slick";
import VeterianBioCard from "../SubsidiaryComponents/VeterianBioCard";

const AboutVeterians = () => {
  const veterianInfoList = [
    { Name: "Sampath", specialization: "Dogs" },
    { Name: "Vino", specialization: "cattle" },
    { Name: "Jhon", specialization: "Dogs" },
  ];
  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="col-lg-7 grid-margin stretch-card mx-auto">
        <div className="card ">
          <div className="card-body">
            <h4 className="card-title">Veterians Bio</h4>
            <Slider {...settings1}>
              {veterianInfoList.map((veterianInfo) => {
                return (
                 <VeterianBioCard veterianInfo={veterianInfo} />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutVeterians;
