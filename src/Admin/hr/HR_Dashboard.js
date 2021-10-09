import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Hr.css";

export const HrDashboard = () => {
  return (
    <div id="hr">
      <section className="sec-bg">
        <div className="heading">
          <h1 className="">Welcome to Hr Dashboard</h1>
        </div>
      </section>
      {/* <section className="sec-table">
          <div className="container">
            <table class="table">
              <thead>
                <tr class="table-dark">
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section> */}
    </div>
  );
};
