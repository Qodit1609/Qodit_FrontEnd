import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = (props) => {
  const style ={
    li:{
      color: '#37474F',
      fontSize:'1.5rem'
    },
    contactUsInLine: {
      display:'inline-block',color:'#37474F',fontWeight: 400, fontSize:'1.5rem'
    }
  }
  return (
    <div>
    <div style={{position:'absolute',width:'100%'}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fff" fill-opacity="1" d="M0,128L60,128C120,128,240,128,360,144C480,160,600,192,720,192C840,192,960,160,1080,144C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
      </div>
    <MDBFooter color="#37474F" className="font-small footerMainDiv  pt-4 mt-4" >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol  md="9" className="text-left">
            <h2 style={{color:'black'}} className="title  footerTitle">Quick links</h2>
            <MDBCol color="black"  md="3" className=" background">
            <ul >
              <li className="list-unstyled Footerbg footerAnch" >
                <a style={style.li} href="#!"><p className='text-dark'>Web Development</p></a>
              </li>
              <li className="list-unstyled">
                <a style={style.li} href="#!"><p className='text-dark'>Software System Architect</p></a>
              </li>
              <li className="list-unstyled">
                <a style={style.li} href="#!"><p className='text-dark'>Cloud Services</p></a>
              </li>
              <li className="list-unstyled">
                <a style={style.li} href="#!"><p className='text-dark'>Intelligence System Design</p></a>
              </li>
              <li className="list-unstyled">
                <a style={style.li} href="#!"><p className='text-dark'>Data Engineering</p></a>
              </li>
              <li className="list-unstyled">
                <a style={style.li} href="#!"><p className='text-dark'>Database Administration and Design</p></a>
              </li>
            </ul>
          </MDBCol>
            <MDBCol md="3" className="">
            <ul>
              <li className="list-unstyled">
                <a style={style.li} href="#!"><p className='text-dark'> UI/UX Design</p></a>
              </li>
            
              <li className="list-unstyled">
                <a style={style.li} href="#!"><p className='text-dark'>Site Reliability Engineer</p></a>
              </li>
              <li className="list-unstyled">
                <a style={style.li} href="#!"><p className='text-dark'>End to End solutions</p></a>
              </li>
              <li className="list-unstyled">
                <a style={style.li} href="#!"><p className='text-dark'>Software Testing</p></a>
              </li>
            </ul>
          </MDBCol>
                </MDBCol>
          <MDBCol md="3" className="text-left"  >
            <div id='fotterContactus'>
            <h2 className="title text-dark "  style={{color:'black'}}>Contact US</h2>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.google.com/maps/search/+1200,+Sheridan,+WY+82801,+USA/@44.7974184,-106.9662109,14z/data=!3m1!4b1"><h4 style={style.contactUsInLine}><i className="fas fa-map-marker-alt"></i>{" "}{props.data ? props.data.addressUsa : 'loading'}</h4></a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.google.com/maps/place/TheRapidHire+Private+Limited/@22.7405008,75.9009652,17z/data=!3m1!4b1!4m5!3m4!1s0x3962e32b2894590f:0x4e73ebc1261cc50!8m2!3d22.7404959!4d75.9031539"><h4 style={style.contactUsInLine}><i className="fas fa-map-marker-alt"></i>{" "}{props.data ? props.data.addressInd : 'loading'}</h4></a>
              </li>
              <li className="list-unstyled">
                <a href="mailto:info@qodit.io">   <h4 style={style.contactUsInLine}> <i className="fas fa-envelope"></i>{" "}{props.data ? props.data.email : 'loading'}</h4></a>
              </li>
              <li className="list-unstyled">
                <a href={`tel:${props.data ? props.data.phone : " "}`}> <h4 style={style.contactUsInLine}><i className='fa fa-phone'></i>{" "}{props.data ? props.data.phone : 'loading'}{" "}</h4></a>{"  "}<a href={`tel:${props.data ? props.data.phone : " "}`}><h4 style={style.contactUsInLine}><i className='fa fa-phone'></i>{props.data ? props.data.phoneInd : 'loading'}</h4></a>
              </li>
            </ul>
            </div>
          </MDBCol>
        </MDBRow>
      <div className="text-center footerCopyWrite py-3">
        <MDBContainer fluid >
        <div id='footer ' >
        <div className='container text-center'>
          <p style={{color:'black' , fontSize:'12px'}}>
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
    </div>
  );
}

export default FooterPage;