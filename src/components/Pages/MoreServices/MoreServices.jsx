import React, {useEffect} from "react";
import "./MoreServices.css";
import Webdevelopment from "../../../Assets/Img/temp.png"

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
        <div style={{marginTop:'-10%', position:'absolute',width:'100%'}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#37474F" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,160C672,171,768,213,864,229.3C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#37474F" fill-opacity="1" d="M0,288L24,245.3C48,203,96,117,144,90.7C192,64,240,96,288,122.7C336,149,384,171,432,160C480,149,528,107,576,122.7C624,139,672,213,720,224C768,235,816,181,864,170.7C912,160,960,192,1008,181.3C1056,171,1104,117,1152,96C1200,75,1248,85,1296,112C1344,139,1392,181,1416,202.7L1440,224L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
          </div>
      <div className="service-bg cover-background"  style={{zIndex: 1,
    position:' relative', paddingTop:'5rem'}}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              <h1 className="fw-light">Our Services</h1>
              <p className="lead">
                We provide industry-specific and need-based services, which
                allows us to deliver tailor-made solutions. We serve customers
                ranging from small individual startups to big corporate houses.
              </p>
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
                     <i class="fas fa-code" style={style.icon} ></i>
                         {/* <img src={Webdevelopment} alt="" /> */}
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
                         <img src={Webdevelopment} alt="" />
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div className="web-service">
                         <h2>System Development</h2>
                         <p>Qodit follows the procedure of defining, designing, testing, and implementing a new software application or program. It includes the internal Development of customized systems, the creation of database systems.TheRapidHire works for the enhancement and productivity of the organization for the satisfaction of its clients.</p>
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
                     <div className="web-image">
                         <img src={Webdevelopment} alt="" />
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
                         <img src={Webdevelopment} alt="" />
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
                         <img src={Webdevelopment} alt="" />
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
                         <img src={Webdevelopment} alt="" />
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
                         <img src={Webdevelopment} alt="" />
                     </div>
                 </div>
             </div>
         </div>
      </section>
    </div>
  );
};

export default MoreServices;
