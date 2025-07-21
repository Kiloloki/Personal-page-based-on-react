import styled from "styled-components";

const StyledFooter = styled.footer`
    width: 95%;
    margin: 2vw;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 4vh 3vw;
    border-radius: 12vw;
    text-align: center;
    font-size: calc(12px + 0.2vw);
    color: #ffffff;

    a {
        color: #ffffff;
        text-decoration: underline;
    }

    a:hover {
        color: #ccccff;
    }

    @media (max-width: 1200px) {
        font-size: calc(12px + 0.2vw);
        text-align: center;
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                &copy; 2025 Xiaorui Wang |{" "}
                <a href="https://github.com/Kiloloki" target="_blank" rel="noopener noreferrer">
                    Credits
                </a>
            </p>
        </StyledFooter>
    );
}
