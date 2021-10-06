import React from "react";
import AllTime from "./img/all-time.png"
import Research from "./img/resarch-development.png"
import Team from "./img/team.png"
import Technology from "./img/technology.png"
import {BackgroundSVG} from '../BackgroundSVG'

const NewFeature = () => {
  return (
    <div id="service">
        <BackgroundSVG/>
        <div className="service-bg cover-background"  style={{zIndex: 1,
    position:' relative', paddingTop:'5rem'}}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              <h1 className="fw-light">Features</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="sec-service">
         <div className="container">
             <div className="row">
                 <div className="col-md-6">
                     <div className="web-content">
                         <h2>Availability all the Time</h2>
                         <p>Qodit furnishes a complete answer for you with inventive methodology and high trustworthiness,We let you stay ahead in this computerized promoting world through changed administrations forthcoming on the lookout and which are as of now settled too. With an extraordinary energy for what we work on, we permit fervor to remain with us to produce powerful answers for our clients.</p>
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div className="web-image">
                         <img src={AllTime} alt="" />
                     </div>
                 </div>
             </div>
         </div>
      </section>
      <section className="sec-service web-bg">
         <div className="container">
             <div className="row">
                 <div className="col-md-6">
                     <div className="service-image">
                         <img src={Technology} alt="" />
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div className="web-service">
                         <h2>Diverse Technology</h2>
                         <p>Our team helps you to increase control over your small business with software designed to grow with you. Streamline all processes, gain greater insight into your business, and make decisions based on real-time information to drive profitable growth.We have faith in making long haul relationships with our customers making a superior association each time we connect.</p>
                     </div>
                 </div>
             </div>
         </div>
      </section>
      <section className="sec-service">
         <div className="container">
             <div className="row">
                 <div className="col-md-6">
                     <div className="web-content">
                         <h2>Research and development</h2>
                         <p>We employ best practice processes and development methodologies as a foundation for rapid building of cutting-edge technology solutions in a structured and methodical way.We keep elevated expectations to contend in the high speed worldwide market and give refined programming answers for our customers.</p>
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div className="web-image">
                         <img src={Research} alt="" />
                     </div>
                 </div>
             </div>
         </div>
      </section>
      <section className="sec-service web-bg">
         <div className="container">
             <div className="row">
                 <div className="col-md-6">
                     <div className="service-image">
                         <img src={Team} alt="" />
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div className="web-service">
                         <h2>Experienced Team</h2>
                         <p>We have been giving multidimensional IT organizations to our clients including electronic exhibiting and online webpage arranging solutions.we Offer monetarily wise and quick solutions for our clients, we work with a right attitude and thusly execute fittingly. It's not by and large you, it's us.</p>
                     </div>
                 </div>
             </div>
         </div>
      </section> 
    </div>
  );
};

export default NewFeature;
