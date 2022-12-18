import React from "react";
import { FaStar } from "react-icons/fi";
export const Rating = () => {
  return (
    <div style={{padding:"20"}}>
      <span class="heading">User Rating</span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <p>4.1 average based on 254 reviews.</p>
      {/* <hr style="border:3px solid #f1f1f1"> */}

      <div class="row">
        <div class="side">
          <div>5 star</div>
        </div>
        <div class="middle">
          <div
            style={{
              width: "100%",
              backgroundColor: "#f1f1f1",
              textAlign: "center",
              color: "white",
            }}
            class="bar-container"
          >
            <div
              style={{
                width: "50%",
                height: "5px",
                backgroundColor: "black",
              }}
              class="bar-5"
            ></div>
          </div>
        </div>
        <div class="side right">
          <div>150</div>
        </div>


        
        <div class="side">
          <div>4 star</div>
        </div>
        <div class="middle">
          <div  style={{
              width: "100%",
              backgroundColor: "#f1f1f1",
              textAlign: "center",
              color: "white",
            }}class="bar-container">
            <div style={{
                width: "40%",
                height: "5px",
                backgroundColor: "black",
              }}class="bar-4"></div>
          </div>
        </div>
        <div class="side right">
          <div>63</div>
        </div>
        <div class="side">
          <div>3 star</div>
        </div>
        <div class="middle">
          <div style={{
              width: "100%",
              backgroundColor: "#f1f1f1",
              textAlign: "center",
              color: "white",
            }} class="bar-container">
            <div style={{
                width: "30%",
                height: "5px",
                backgroundColor: "black",
              }}class="bar-3"></div>
          </div>
        </div>
        <div class="side right">
          <div>15</div>
        </div>
        <div class="side">
          <div>2 star</div>
        </div>
        <div class="middle">
          <div style={{
              width: "100%",
              backgroundColor: "#f1f1f1",
              textAlign: "center",
              color: "white",
            }} class="bar-container">
            <div style={{
                width: "20%",
                height: "5px",
                backgroundColor: "black",
              }}class="bar-2"></div>
          </div>
        </div>
        <div class="side right">
          <div>6</div>
        </div>
        <div class="side">
          <div>1 star</div>
        </div>
        <div class="middle">
          <div  style={{
              width: "100%",
              backgroundColor: "#f1f1f1",
              textAlign: "center",
              color: "white",
            }}class="bar-container">
            <div style={{
                width: "10%",
                height: "5px",
                backgroundColor: "black",
              }}class="bar-1"></div>
          </div>
        </div>
        <div class="side right">
          <div>20</div>
        </div>
      </div>
    </div>
  );
};
