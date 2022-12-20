import React from "react";
import { FaStar } from "react-icons/fi";
export const Rating = () => {
  return (
    <div style={{padding:"20"}}>
      <span className="heading">User Rating</span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <p>4.1 average based on 254 reviews.</p>
      {/* <hr style="border:3px solid #f1f1f1"> */}

      <div className="row">
        <div className="side">
          <div>5 star</div>
        </div>
        <div className="middle">
          <div
            style={{
              width: "100%",
              backgroundColor: "#f1f1f1",
              textAlign: "center",
              color: "white",
            }}
            className="bar-container"
          >
            <div
              style={{
                width: "50%",
                height: "5px",
                backgroundColor: "black",
              }}
              className="bar-5"
            ></div>
          </div>
        </div>
        <div className="side right">
          <div>150</div>
        </div>


        
        <div className="side">
          <div>4 star</div>
        </div>
        <div className="middle">
          <div  style={{
              width: "100%",
              backgroundColor: "#f1f1f1",
              textAlign: "center",
              color: "white",
            }}className="bar-container">
            <div style={{
                width: "40%",
                height: "5px",
                backgroundColor: "black",
              }}className="bar-4"></div>
          </div>
        </div>
        <div className="side right">
          <div>63</div>
        </div>
        <div className="side">
          <div>3 star</div>
        </div>
        <div className="middle">
          <div style={{
              width: "100%",
              backgroundColor: "#f1f1f1",
              textAlign: "center",
              color: "white",
            }} className="bar-container">
            <div style={{
                width: "30%",
                height: "5px",
                backgroundColor: "black",
              }}className="bar-3"></div>
          </div>
        </div>
        <div className="side right">
          <div>15</div>
        </div>
        <div className="side">
          <div>2 star</div>
        </div>
        <div className="middle">
          <div style={{
              width: "100%",
              backgroundColor: "#f1f1f1",
              textAlign: "center",
              color: "white",
            }} className="bar-container">
            <div style={{
                width: "20%",
                height: "5px",
                backgroundColor: "black",
              }}className="bar-2"></div>
          </div>
        </div>
        <div className="side right">
          <div>6</div>
        </div>
        <div className="side">
          <div>1 star</div>
        </div>
        <div className="middle">
          <div  style={{
              width: "100%",
              backgroundColor: "#f1f1f1",
              textAlign: "center",
              color: "white",
            }}className="bar-container">
            <div style={{
                width: "10%",
                height: "5px",
                backgroundColor: "black",
              }}className="bar-1"></div>
          </div>
        </div>
        <div className="side right">
          <div>20</div>
        </div>
      </div>
    </div>
  );
};
