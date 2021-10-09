import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const SalesDashboard = () => {
  return (
    <div id="sales">
      <section className="sec-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-center">
              <div className="heading">
                <h1 className="float-right">Welcome Sales Dashboard</h1>
              </div>
            </div>
            <div className="col-md-4">
              <li class="dropdown user user-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <img
                    src="dist/img/user2-160x160.jpg"
                    class="user-image"
                    alt="User Image"
                  />
                  <span class="hidden-xs">Admin</span>
                </a>
                <ul class="dropdown-menu">
                  <li class="user-header">
                    <img
                      src="dist/img/user2-160x160.jpg"
                      class="img-circle"
                      alt="User Image"
                    />
                  </li>

                  <li class="user-footer">
                    <div class="pull-left">
                      <a href="#" class="btn btn-default btn-flat">
                        Profile
                      </a>
                    </div>
                    <div class="pull-right">
                      <a href="#" class="btn btn-default btn-flat">
                        Sign out
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-table">
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
      </section>
    </div>
  );
};
