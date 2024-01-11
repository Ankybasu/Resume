import React from "react";
import styled from "styled-components";

const Bio = () => {
  const H2 = styled.h2({
    fontSize: "1.0rem",
  });
  return (
    <>
      <div>
        <H2>Software Developer</H2>
        <div>
          <p style={{ fontSize: "0.75rem" }}>
            A professional web developer with 2.5 years of IT experience in
            Cloud Migration Project using HTML5, CSS3, JavaScript, Angular6+,
            Unified framework.
          </p>
        </div>
      </div>
    </>
  );
};

export default Bio;
