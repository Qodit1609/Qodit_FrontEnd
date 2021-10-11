import React from "react";
import "./Sales.css";

const SalesDashboard  = () => {
  
  return (
    <div id="sales">
      <section class="sec-bg">
        <div class="heading">
          <h1 class="">Welcome to Sales Dashboard</h1>
        </div>
        <div class="dropdown">
          <div
            class="dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="true"
          >
            <img
              src="https://demo.dashboardpack.com/admindek-html/files/assets/images/avatar-4.jpg"
              class="img-radius"
              alt="User-Profile-Image"
            />
            <i class="feather icon-chevron-down"></i>
          </div>
          <div class="dropdown-content">
            <ul
              class="show-notification profile-notification dropdown-menu show"
              data-dropdown-in="fadeIn"
              data-dropdown-out="fadeOut"
            >
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a  href="/admin">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec-table">
        <table>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
     
            </tr>
            <tr>
             
            </tr>
            <tr>
             
            </tr>
            <tr>
             
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default SalesDashboard;
