import React, {useEffect} from "react";
import "./MoreServices.css";
import { BackgroundSVG } from "../BackgroundSVG";
import cloud from './image/cloud.png'
import dataEngineer from './image/data-engineering.png'
import mvp from './image/mvp.png'
import newProductDevelopment from './image/new-product-development.png'
import systemDevelopment from './image/system-development.png'
import webDesigner from './image/web-designer.png'
import webDevelopment from './image/web-development.png'

const MoreServices = () => {

    const style = {
        icon:{
            fontSize:'4rem',
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div id="service">
     <BackgroundSVG/>
      <div className="service-bg cover-background"  style={{zIndex: 1,
    position:' relative', paddingTop:'5rem'}}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="fw-light">Our Services</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="sec-service">
         <div className="container">
             <div className="row">
                 <div className="col-md-6">
                     <div className="web-content">
                         <h2>Web Development</h2>
                         <p>An interactive web application readily amplifies user engagement. Our user-centred web app is feature-rich, intuitive, and performs exceedingly well. We craft your web destination with a clear view of the business goal and ensure that it supports the user-journey.</p>
                     </ div>
                 </div>
                 <div className="col-md-6">
                     <div className="web-image">
                         <img  data-aos="fade-right" data-aos-duration="1500" src={webDevelopment} alt="" />
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
                         <img data-aos="fade-left" data-aos-duration="1500" src={systemDevelopment} alt="" />
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div className="web-service">
                         <h2>System Development</h2>
                         <p>Qodit follows the procedure of defining, designing, testing, and implementing a new software application or program. It includes the internal Development of customized systems, the creation of database systems.Qodit works for the enhancement and productivity of the organization for the satisfaction of its clients.</p>
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
                         <h2>NEW PRODUCT DEVELOPMENT</h2>
                         <p>We believe in bringing new product to the marketplace by implementing innovative businesses thrive by understanding our marketeers wants, making smart product improvements, and developing new products that meet and exceed their customer’s expectations</p>
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div  className="web-image">
                         <img data-aos="fade-left" data-aos-duration="1500" src={newProductDevelopment} alt="" />
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
                         <img data-aos="fade-right" data-aos-duration="1500" src={mvp} alt="" />
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div className="web-service">
                         <h2>MINIMUM VARIABLE PRODUCT (MVP)</h2>
                         <p>Our team follows MVP development technique in which it introduces a new product in the market with basic features, but enough to get the attention of the Consumers. We launch the final product after sufficient feedback from our product’s initial clients.</p>
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
                         <h2>DATA ENGINEERING</h2>
                         <p>We focus on practical applications of data collection , analysis and organizing data by also keeping an eye out for trends or inconsistencies that will impact business goals. We build data pipelines that source and transform the data into the structures needed for analysis. We use tools like SQL and Python to make data ready for data scientists.</p>
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div className="web-image">
                         <img data-aos="fade-left" data-aos-duration="1500" src={dataEngineer} alt="" />
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
                         <img data-aos="fade-right" data-aos-duration="1500" src={cloud} alt="" />
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div className="web-service">
                         <h2>CLOUD SERVICES</h2>
                         <p>Our cloud services provide the options of availing remote services via cloud computing servers. Services included are computing resources, data resources and communication resources. Furthermore, IaaS, PaaS and SaaS platforms are also available for services.</p>
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
                         <h2>WEB DESIGNER</h2>
                         <p>We are looking for a web designer who will be responsible for creating great websites for our clients. Primary duties include conceptualizing and implementing creative ideas for client websites, as well as creating visual elements that are in line with our clients' branding. You will be working closely with our web development team to ensure proper and hassle-free implementation.</p>
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div className="web-image">
                         <img data-aos="fade-left
                     " data-aos-duration="1500"  src={webDesigner} alt="" />
                     </div>
                 </div>
             </div>
         </div>
      </section>
    </div>
  );
};

export default MoreServices;
