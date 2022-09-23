import React, { useState } from "react";
import bankingfinance from './../images/banking-finance-image.png';
import retail from './../images/retail-image.png';
import telecommunication from './../images/telecommunication-image.png';
import healthcare from './../images/healthcare-image.png';
import automative from './../images/automative-image.png';
import informationtechnology from './../images/information-technology-image.png';
import ecommerce from './../images/e-commerce-image.png';
import saas from './../images/saas-image.png';
import cybersecurity from './../images/cyber-security-image.png';
import Carousel from 'react-bootstrap/Carousel';

const HomeFifthSectionMobile = () => {
  return (
    <div>
        <div class="row mb-5 pt-5">
            <div className="col-md-12 px-5">    
                <h2 className="text-muted"><b>Industries we cater to</b></h2>
            </div>
        </div>
        <div class="row">
        <Carousel indicators={false} variant="dark">
      <Carousel.Item>
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={bankingfinance} alt="designthinking" width="70%" height="70%"/>
                            <h2 class="card-text p-4 ">Banking & Finance</h2>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={retail} alt="designthinking"  width="70%" height="70%" className="rounded-circle"/>
                            <h2 class="card-text p-4 ">Retail</h2>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={telecommunication} alt="designthinking"  width="70%" height="70%"/>
                            <h2 class="card-text p-4 ">Telecommunications</h2>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
          
           
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={healthcare} alt="designthinking"  width="70%" height="70%"/>
                            <h2 class="card-text p-4 ">Healthcare</h2>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={automative} alt="designthinking"  width="70%" height="70%" className="rounded-circle"/>
                            <h2 class="card-text p-4 ">Automotive</h2>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={informationtechnology} alt="designthinking"  width="70%" height="70%"/>
                            <h2 class="card-text p-4 ">Information Technology</h2>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
    
        
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={ecommerce} alt="designthinking"  width="70%" height="70%"/>
                            <h2 class="card-text p-4 ">E-Commerce</h2>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={saas} alt="designthinking" width="70%" height="70%" className="rounded-circle"/>
                            <h2 class="card-text p-4 ">SaaS</h2>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={cybersecurity} alt="designthinking"  width="70%" height="70%"/>
                            <h2 class="card-text p-4 ">Cyber Security</h2>
                    </div>
                </div>
                </Carousel.Item>
                </Carousel>
            </div>
    </div>
    );
};

export default HomeFifthSectionMobile;