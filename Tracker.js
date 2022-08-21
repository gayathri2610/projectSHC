import React from "react";
import Navigationbar from "./Navigationbar";
const Tracker = () => {
  return (
    <div>
      <div>
        <Navigationbar />
      </div>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "#072227" }}
      >
        <div
          className="d-flex justify-content-center align-items-left vh-10"
          style={{
            height: "65%",
            width: "30%",
            background: "#35858B",
            borderRadius: "50%",
            alignItems: "left",
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center vh-60"
            style={{
              height: "90%",
              width: "80%",
              background: "#FFFFFF",
              borderRadius: "50%",
              alignItems: "left",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Tracker;
