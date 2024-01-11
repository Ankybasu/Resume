import { useEffect, useState } from "react";
import Alert from "./Alert";
import Button from "./Button";
import ListGroup from "./ListGroup";
import Message from "./Message";
import Book from "./Book";
import Book1 from "./Book1";
import SideBar from "./components/SideBar";
import styles from "./customstyle.module.css";
import styled from "styled-components";
import Experience from "./components/Experience";
import Bio from "./components/Bio";
import Skill from "./components/Skill";

let api = "https://hn.algolia.com/api/v1/search?query=html";

function App() {
  const [hits, setHit] = useState([]);
  const getData = async (url: any) => {
    try {
      await fetch(url).then(async (res) => {
        const data = await res.json();
        setHit(data.hits);
        console.log("hi1", data.hits);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData(api);
  }, []);
  console.log("hits", hits);
  const listNames = ["hi"];
  const check = listNames.length === 0 ? <p>not found</p> : null;
  const checkLength = () => {
    return listNames.length === 0 && <p>not found</p>;
  };

  const handleClick = (item: string) => {
    console.log(item);
  };
  const data = [
    {
      title: "1PRE, App Modernization, Wells Fargo account",
      designation: "Senior Software Developer",
      timeDate: "Dec 2023",
      description:
        "This is a migration project where we need to migrate the existing .net application to the angular technologies. Also, it was a complete rewrite application from the angular point of view. The application had multiple modules with inter-dependability which we have achieved by typescript coding.",
      bullets: [
        { str: "Functionality upgradation to angular technology" },
        { str: "Developing the design and layout of the application" },
        { str: "Following the Agile methodologies for development. " },
      ],
    },
    ,
    {
      title: "PYMTS, App Modernization, Wells Fargo account",
      designation: "Software Developer",
      timeDate: "May 2022",
      description:
        "This is a migration project where we need to migrate the existing .net application to the angular technologies. Also, it was a complete rewrite application from the angular point of view. The application had multiple modules with inter-dependability which we have achieved by typescript coding.",
      bullets: [
        { str: "Functionality upgradation to angular technology" },
        { str: "Developing the design and layout of the application" },
        { str: "Following the Agile methodologies for development. " },
      ],
    },
  ];

  const [alertVisibility, setAlertVisibility] = useState(false);
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
      <div className={styles.mainContent}>
        <SideBar></SideBar>

        <div className="col-lg-9" style={{ margin: "40px", padding: "40px" }}>
          <Bio></Bio>
          <div style={{ display: "flex", padding: "4px", margin: "4px" }}>
            <div>
              <H1>Work Experiences</H1>
              {data.map((each: any) => {
                return (
                  <Experience
                    title={each.title}
                    description={each.description}
                    time={each.timeDate}
                    designation={each.designation}
                  ></Experience>
                );
              })}
            </div>
            <Skill></Skill>
          </div>
        </div>
      </div>
      {/* <Book1 child={hits}></Book1> */}
      {/* {hits.map((item: any, index: any) => {
        return <Book title={item.title} author={item.author}></Book>;
      })} */}
      {/* {alertVisibility && <Alert children="hello"></Alert>}
      <Button
        color="primary"
        onClick={() => {
          return setAlertVisibility(!alertVisibility);
        }}
      >
        Primary
      </Button>
      <ListGroup
        items={cityNames}
        headings="Cities"
        onSelected={handleClick}
      ></ListGroup>
      <ListGroup
        items={friends}
        headings="Friends"
        onSelected={handleClick}
      ></ListGroup> */}
    </>
  );
  // const temp='Ankita';
  // if(temp){
  //   return <div>Hello {temp}</div>
  // }
  // else{
  // return <div><Message></Message></div>;
  // }
}
export default App;
