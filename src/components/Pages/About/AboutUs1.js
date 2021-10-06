import React from "react";
import WhoWe from "../../../Assets/images/about.png";
import Mission from "../../../Assets/images/mission.png";
import Vision from "../../../Assets/images/vision.png";
import Values from "../../../Assets/images/value.png";
import Creativity from "../../../Assets/images/creativity.png";
import Meeting from "../../../Assets/images/meeting.png";
import Success from "../../../Assets/images/success.png";
import Client from "../../../Assets/images/client.png";
import s1 from "../../../Assets/images/s1.jpg";
import "./About.css";

const NewAboutUs = () => {
    const Our_Vision =
        "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1700s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    const Our_Mission =
        "   Our mission is to provide a supercilious support to our customer through our service. We are always aware of new trends in the field of security and are committed to applying it in our solution. We always improvise our services by surveying the interest of our customer. Our goal is to attain massive upgrades and improvements being honest to our principle. Qodit has set certain standards and regulations to be followed so that we will always be giving our priorities to the standards and will always work according to the guidelines set by the govt. and other corresponding authority.";

    const Values3 =
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1700s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    
    const style = {
        h3:{
            color:'#fff'
        }
    }
   
    return (
        <div id="new-about">
            <section>
                <div class="element">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-7">
                                <img src={s1} className="img-responsive" alt='s1'/>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <div className="feature-list">
                                    <div className="feature-details">
                                        <h1>ABOUT US</h1>
                                        <p>Qodit.io is a software development and IT outsourcing company based
                                            in India. Qodit.io takes an energetic, collaborative strategy to create
                                            and customize solutions across the digital value chain.We aim to create
                                            a network of businesses that help each other to acquire more customers.
                                            Giving a better idea of making your online presence better, QODIT.io
                                            company helps you with quality service at minimal prices and complimentary
                                            with great satisfaction.</p>
                                        <br />
                                    </div>
                                  

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="who-we">
                                <h1>Who we are</h1>
                                <p>
                                    Qodit is a software development and IT outsourcing
                                    company based in India. Qodit takes an energetic,
                                    collaborative strategy to create and customize solutions
                                    across the digital value chain. We aim to create a network of
                                    businesses that help each other to acquire more customers.
                                    Giving a better idea of making your online presence better,
                                    Qodit company helps you with quality service at minimal
                                    prices and complimentary with great satisfaction.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                src={WhoWe}
                                data-aos={"fade-left"}
                                className="img-fluid who-img"
                                alt='whoWe'
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-sec about-bg">
                <div className="container">
                    <div className="why-choose">
                        <h1>Why Choose Us?</h1>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-3 choose__us">
                            <div className="img_circle">
                                <img src={Client} className="img-fluid" alt="" />
                            </div>
                            <h3>Client Oriented</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text.
                            </p>
                        </div>
                        <div className="col-md-3 choose__us">
                            <div className="img_circle">
                                <img src={Creativity} alt="" className="img-fluid" />
                            </div>
                            <h3>Creativity</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text.
                            </p>
                        </div>
                        <div className="col-md-3 choose__us">
                            <div className="img_circle">
                                <img src={Meeting} alt="" className="img-fluid" />
                            </div>
                            <h3>Meeting Deadlines</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text.
                            </p>
                        </div>
                        <div className="col-md-3 choose__us">
                            <div className="img_circle">
                                <img src={Success} className="img-fluid" alt="" />
                            </div>
                            <h3>A Plan for Success</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="vision-mission-content">
                                <img src={Vision} alt="Vision" className="img-fluid" />
                                <h3 style={style.h3}>Our Vision</h3>
                                <p>
                                        {Our_Vision}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="vision-mission-content">
                                <img src={Mission} alt="Mission" className="img-fluid" />
                                <h3 style={style.h3}>Our Mission</h3>
                                <p>
                                        {Our_Mission}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="vision-mission-content">
                                <img src={Values} alt="Value" className="img-fluid" />
                                <h3 style={style.h3}>Values</h3>
                                <p>
                                        {Values3}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default NewAboutUs;
