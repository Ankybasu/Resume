import React from "react";
interface Props {
  title: string;
  description: string;
  time: string;
  designation: string;
}
const Experience = ({ title, description, time, designation }: Props) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <div style={{ fontWeight: "bolder" }}>
          <h2 style={{ fontSize: "1.0rem" }}>{title}</h2>
        </div>
        <div style={{ fontWeight: "bold" }}>
          <h1 style={{ fontSize: "0.75rem" }}>{designation}</h1>
        </div>
        <div>
          <p style={{ fontSize: "0.75rem" }}>{description}</p>
        </div>
      </div>
      <div style={{ whiteSpace: "nowrap" }}>
        <i>{time}</i>
      </div>
    </div>
  );
};

export default Experience;
