import React from "react";
import styles from "../customstyle.module.css";
import Image from "../images/dp.png";
const SideBar = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#64B687",
        color: "white",
        height: "auto",
        width: "100%",
      }}
    >
      <div style={{ margin: "0.5rem", padding: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontSize: "1rem", alignSelf: "center" }}>
            Software Developer
          </h2>
          <img
            src={Image}
            style={{
              height: "auto",
              width: "80%",
              alignSelf: "center",
              margin: "10%",
            }}
          />
          <p style={{ fontSize: "0.75rem" }}>
            Hi,I am Ankita Basu and I'm a senior software engineer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
