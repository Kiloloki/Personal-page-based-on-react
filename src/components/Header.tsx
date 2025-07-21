import styled from "styled-components";

const StyledHeader = styled.header`
    width: 95%;
    margin: 2vw 0;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 4vh 3vw;
    border-radius: 2vw;
    color: #ffffff;


    h1 {
        font-family: "monospace", monospace;
        font-size: calc(24px + 0.5vw);
        margin: 0;
    }

    p {
        font-size: calc(14px + 0.3vw);
        margin: 5vw 0 0 0;
    }

    @media (max-width: 1200px) {
        text-align: center;
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Xiaorui (Bella) Wang</h1>
            <p>Computer Science Student | Web & Mobile Developer</p>
        </StyledHeader>
    );
}
