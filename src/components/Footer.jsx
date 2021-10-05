import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = (props) => {
  return (
    <MDBFooter color="white" className="font-small footerMainDiv  pt-4 mt-4" >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol  md="6" className="text-left">
            <h2 style={{color:'black'}} className="title  footerTitle">Quick links</h2>
            {/* <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p> */}
            <MDBCol color="black"  md="3" className=" background">
            {/* <h5 className="title"></h5> */}
            <ul >
              <li className="list-unstyled Footerbg footerAnch">
                <a href="#!"><p className='text-dark'>Web Development</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p className='text-dark'>Software System Architect</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p className='text-dark'>Cloud Services</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p className='text-dark'>Intelligence System Design</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p className='text-dark'>Data Engineering</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p className='text-dark'>Database Administration and Design</p></a>
              </li>
            </ul>
          </MDBCol>
            <MDBCol md="3" className="">
            {/* <h5 className="title">{"  "}</h5> */}
            <ul>
              <li className="list-unstyled">
                <a href="#!"><p className='text-dark'> UI/UX Design</p></a>
              </li>
            
              <li className="list-unstyled">
                <a href="#!"><p className='text-dark'>Site Reliability Engineer</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p className='text-dark'>End to End solutions</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p className='text-dark'>Software Testing</p></a>
              </li>
            </ul>
          </MDBCol>
                </MDBCol>
          <MDBCol md="6" className="text-right"  >
            <div id='fotterContactus' style={{color:'black'}}>
            <h2 className="title text-dark " >Contact US</h2>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.google.com/maps/search/+1200,+Sheridan,+WY+82801,+USA/@44.7974184,-106.9662109,14z/data=!3m1!4b1"><h4 style={{display:'inline-block',color:'black' }}><i className="fas fa-map-marker-alt"></i>{" "}{props.data ? props.data.addressUsa : 'loading'}</h4></a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.google.com/maps/place/TheRapidHire+Private+Limited/@22.7405008,75.9009652,17z/data=!3m1!4b1!4m5!3m4!1s0x3962e32b2894590f:0x4e73ebc1261cc50!8m2!3d22.7404959!4d75.9031539"><h4 style={{display:'inline-block',color:'black' }}><i className="fas fa-map-marker-alt"></i>{" "}{props.data ? props.data.addressInd : 'loading'}</h4></a>
              </li>
              <li className="list-unstyled">
                <a href="mailto:info@qodit.io">   <h4 style={{display:'inline-block',color:'black' }}> <i className="fas fa-envelope"></i>{" "}{props.data ? props.data.email : 'loading'}</h4></a>
              </li>
              <li className="list-unstyled">
                <a href={`tel:${props.data ? props.data.phone : " "}`}> <h4 style={{display:'inline-block',color:'black' }}><i className='fa fa-phone'></i>{" "}{props.data ? props.data.phone : 'loading'}{" "}</h4></a><a href={`tel:${props.data ? props.data.phone : " "}`}><h4 style={{display:'inline-block',color:'black',marginRight:'10px' }}><i className='fa fa-phone'></i>{props.data ? props.data.phoneInd : 'loading'}</h4></a>
              </li>
            </ul>
            </div>
          </MDBCol>
        </MDBRow>
      <div className="text-center py-3">
        <MDBContainer fluid>
        <div id='footer '>
        <div className='container text-center'>
          <p style={{color:'black'}}>
          Copyright © 2021 Qodit All Rights Reserved.
                  <br />
                  Web Designed by Qodit {' '}
            <a href='#' rel='nofollow' style={{color:'grey'}}>
            Privacy Policies and Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
        </MDBContainer>
      </div>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;