import React, { useState } from "react";
import hw1 from './../images/hw1.PNG';
import hw2 from './../images/hw2.PNG';
import hw3 from './../images/hw3.PNG';
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";
const HomeSixthSectionMobile = () => {
    return (
        <div className="mb-5">
            <div class="row mb-5 pt-5">
                <div className="col-md-12 px-5 pb-5">    
                    <h1 className="text-muted"><b>How It Works</b></h1>
                </div>
                <Carousel indicators={false} variant="dark" prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon prev" />} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon next" />}>
      <Carousel.Item>
                    <div class="col-md-4 p-4 cardshdwoes mb-4">
                    <div className="">
                            <h4 class="card-text p-4 ">Skill gap Analysis</h4>
                            <img src={hw1} alt="designthinking" width="80%" height="150px"/>
                            <h5 class="card-text p-4" style={{fontSize:'1.20rem'}}>A Skill gap analysis will conducted to find out more gaps in learning.</h5>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="col-md-4 p-4 cardshdwoes mb-4">
                    <div className="">
                            <h4 class="card-text p-4 ">Customized Solution</h4>
                            <img src={hw2} alt="designthinking" width="65%" height="150px" />
                            <h5 class="card-text p-4" style={{fontSize:'1.20rem'}}>Customized program suited to the gap identified in the step1.</h5>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="col-md-4 p-4 cardshdwoes ">
                    <div className="">
                            <h4 class="card-text p-4 ">Tailormade Delivery</h4>
                            <img src={hw3} alt="designthinking" width="80%" height="150px"/>
                            <h5 class="card-text p-4" style={{fontSize:'1.20rem'}}>Tailormade delivery of the program as per the timing, formats and industry-specific needs.</h5>
                </div>
                </div>
                </Carousel.Item>
                </Carousel>
            </div>
        </div>
      );
    };
    
    export default HomeSixthSectionMobile;