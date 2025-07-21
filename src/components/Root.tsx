import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "../components/mains/Home";
import Education from "./mains/Education";
import Skills from "./mains/Skills";
import Projects from "./mains/Projects";
import Publication from "./mains/Publication";
import Achievements from "./mains/Achievements";


import styled from "styled-components";

const Wrapper = styled.div`
  width: 90vw;
  max-width: 1200px;
  margin: 5vh auto;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5vw;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function Root() {
    return (
        <Wrapper>
            <Header />
            <Container>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education.html" element={<Education />} />
                    <Route path="/skills.html" element={<Skills />} />
                    <Route path="/projects.html" element={<Projects />} />
                    <Route path="/publication.html" element={<Publication />} />
                    <Route path="/achievements.html" element={<Achievements />} />
                </Routes>
            </Container>
            <Footer />
        </Wrapper>
    );
}
