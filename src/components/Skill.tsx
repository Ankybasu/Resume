import React from "react";
import { FaAngular } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import styles from "../customstyle.module.css";
import styled from "styled-components";
const Skill = () => {
  const H1 = styled.h1({
    fontSize: "1.15rem",
    textTransform: "uppercase",
    letterSpacing: "0.15rem",
    color: "#64B687",
    "&:before": {
      content: '"|"',
      color: "green",
      position: "relative",
      paddingRight: "5px",
      width: "10px",
    },
  });
  const H2 = styled.h2({
    fontSize: "1.0rem",
  });
  const H3 = styled.h3({
    fontSize: "0.75rem",
  });
  return (
    <>
      <div className={styles.skills}>
        <H1>SKILLS</H1>
        <aside
          style={{
            borderLeft: "1px solid",
            padding: "0.5rem",
            margin: "0.5rem",
          }}
        >
          <H2 style={{ textTransform: "uppercase" }}>Technical</H2>
          <div className="child">
            <H3>Angular</H3>
            <FaAngular style={{ color: "#CA3327" }}></FaAngular>
          </div>
          <div className="child">
            <H3>React</H3>
            <FaReact style={{ color: "#64B687" }}></FaReact>
          </div>
          <div className="child">
            <H3>JavaScript</H3>
            <IoLogoJavascript style={{ color: "yellow" }} />
          </div>

          <div className="child">
            <H3>SpringBoot</H3>
            <SiSpringboot style={{ color: "#64B687" }} />
          </div>
          <div>
            <H3>AWS</H3>
            <FaAws />
          </div>
        </aside>
      </div>
    </>
  );
};

export default Skill;
