import React from "react";
import "./Sidebar.css";
import goGlocal from "../resources/goGlocal white logo.png";

export default function Sidebar()
{
    return (
        <div id="sidebar">
          <header>
            {/* <a href="#">GoGlocal</a> */}
            <img src={goGlocal}></img>
          </header>
          <div class="nav">
            <div style={{marginTop: "1rem"}}>
              <a href="#" class="pad-max">
              <i class="fa-regular fa-user"></i>Profile
              </a>
            </div>
            <div style={{marginTop: "1rem"}}>
              <a href="#" class="pad-max">
              <i class="fa-solid fa-users"></i>Sellers
              </a>
            </div>
            <div style={{marginTop: "1rem"}}>
              <a href="#" class="pad-max">
              <i class="fa-solid fa-ticket"></i>Tickets
              </a>
            </div>
            
          </div>

        </div>
    );
}