import styled from "styled-components";

const StyledMain = styled.main`
    flex: 1;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 3vw;
    border-radius: 2vw;
    color: #ffffff;
    width:80%

    h2 {
        font-size: calc(20px + 0.5vw);
        margin-top: 0;
    }

    p {
        font-size: calc(14px + 0.3vw);
        line-height: 1.6;
    }

    img {
        max-width: 80%;
        height: auto;
        border-radius: 8px;
        margin: 2vh 0;
        display: block;
    }

    strong {
        font-weight: bold;
    }
`;

export default function Home() {
    return (
        <>
            <title>Home | Xiaorui Wang</title>
            <StyledMain>
                <h2>About Me</h2>
                <img src="/public/xr.jpg" alt="Xiaorui WANG Profile Picture" />
                <p>
                    Results-driven junior Computer Science student from Boston University.
                    Experienced in web and mobile development, with a proven ability to
                    design, develop, and optimize scalable applications. Proficient in
                    languages like <strong>Java, Python, Golang, Kotlin, and JavaScript</strong>, and
                    skilled in using frameworks such as <strong>Spring, React, and Angular</strong>.
                    Employed Spring Framework's core technologies. Strong analytical and
                    problem-solving abilities demonstrated across cloud architectures,
                    microservices, and security projects. Seeking internship position to
                    contribute to development initiatives while advancing as a software
                    developer.
                </p>
            </StyledMain>
        </>
    );
}
