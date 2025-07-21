import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 20vw;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2vw;
    border-radius: 2vw;
    height: fit-content;
    position: sticky;
    top: 2vh;

    @media screen and (max-width: 1000px) {
        width: 95%;
        position: static;
    }
`;

const StyledList = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1vh;

    @media screen and (max-width: 1000px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2vw;
    }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: calc(14px + 0.3vw);
  padding: 2vh 2vh;
  display: block;
  border-radius: 6px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 1000px) {
    padding: 1vh 2vw;
    font-size: calc(12px + 0.5vw);
  }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledList>
                <li><StyledLink to="/">Home</StyledLink></li>
                <li><StyledLink to="/education.html">Education</StyledLink></li>
                <li><StyledLink to="/skills.html">Skills</StyledLink></li>
                <li><StyledLink to="/projects.html">Projects</StyledLink></li>
                <li><StyledLink to="/publication.html">Publication</StyledLink></li>
                <li><StyledLink to="/achievements.html">Achievements</StyledLink></li>
            </StyledList>
        </StyledNav>
    );
}
