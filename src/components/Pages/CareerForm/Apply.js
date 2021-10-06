import React from "react";
import "./Apply.css";

const ApplyNow = () => {
  return (
    <div id="apply">
      <div className="service-bg cover-background">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              <h1 className="fw-light">Apply Now</h1>
              <p className="lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1700s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section class="apply-sec text-center login-block">
      <div class="container d-flex justify-content-center">
    <div class="form">
        <div class="contact-info">
            <h3 class="title">Apply Now</h3>
            <p class="text-center1"> Apply latest IT-Software Jobs across India via TheRapidHire.com. Explore the latest Software Jobs in Indore and also job openings in your nearby locations. </p>
           
            
        </div>
        <div class="contact-info-form"> <span class="circle one"></span> <span class="circle two"></span>
        <form class="sign-up">
                <h2 class="heading mb-4">Apply Now</h2>
                <div class="form-group fone mt-2">  <input type="name" class="form-control" placeholder="Name"/> </div>
                <div class="form-group fone mt-2"> <input type="email" class="form-control" placeholder="Email Id"/> </div>
                <div class="form-group fone mt-2">  <input type="mobile_no" class="form-control" placeholder="Mobile Number"/></div>
                <div class="form-group fone mt-2">  <textarea name="message" class="form-control" placeholder=" Message"/></div>
                <div class="form-group fone mt-2">  <input type="file" class="form-control" placeholder="upload file"/></div>
                
                
              <input type="checkbox" class="form-check-input ml-0" id="exampleCheck1"/> <label class="form-check-label ml-3" for="exampleCheck1">I agree to Stoke <u>Terms</u> and <u>Privacy Policy</u></label>
            </form> <button type="button" class="btn btn-success mb-5">Apply now</button>
           
        </div>
    </div>
</div>
</section>
    </div>
  );
};

export default ApplyNow;

