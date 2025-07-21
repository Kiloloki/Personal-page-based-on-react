import styled from "styled-components";

const StyledMain = styled.main`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 3vw;
  border-radius: 2vw;
  color: #ffffff;
    width:80%;

  h2 {
    font-size: calc(20px + 0.5vw);
    margin-top: 0;
  }

  p {
    font-size: calc(14px + 0.3vw);
    line-height: 1.8;
    font-weight: normal;
    margin: 1.5rem 0 0.5rem;
  }

  strong {
    font-weight: bold;
  }

  ul {
    padding-left: 2rem;
    margin-bottom: 2rem;
  }

  li {
    font-size: calc(14px + 0.2vw);
    margin-bottom: 0.8rem;
    line-height: 1.6;
  }

  br {
    display: block;
    margin: 1.5rem 0;
    content: "";
  }
`;

export default function Achievements() {
    return (
        <>
            <title>AFTER SCHOOL | Xiaorui Wang</title>
            <StyledMain>
                <h2>AFTER SCHOOL</h2>

                <p>
                    <strong>
                        Boston University Actuarial Society (BUAS) - Data Department President
                    </strong>
                </p>
                <ul>
                    <li>
                        Serve as the President of the BUAS Data Department, responsible
                        for internal data processing and strategic data analysis for
                        society events.
                    </li>
                    <li>
                        Led the recruitment process, including designing interview
                        questions, conducting technical interviews, and onboarding new
                        members.
                    </li>
                    <li>
                        Organized and coordinated data-driven projects to support society
                        decision-making and improve operational efficiency.
                    </li>
                </ul>

                <p><strong>Laioffer Algorithm Course - Certified</strong></p>
                <ul>
                    <li>
                        Completed the Laioffer Algorithm Course, focusing on
                        problem-solving skills, algorithm design, and coding interview
                        preparation.
                    </li>
                    <li>
                        Earned the certification upon successful completion of the course.
                    </li>
                </ul>

                <p>
                    <strong>Columbia University - Machine Learning Course (Ongoing)</strong>
                </p>
                <ul>
                    <li>
                        Currently enrolled in Columbia University's machine learning
                        course, gaining hands-on experience in model training, validation,
                        and deployment.
                    </li>
                </ul>

                <p>
                    <strong>Vanderbilt University - Generative AI Course (Ongoing)</strong>
                </p>
                <ul>
                    <li>
                        Currently participating in Vanderbilt University's Generative AI
                        course, exploring the fundamentals and applications of large
                        language models and generative AI systems.
                    </li>
                </ul>
            </StyledMain>
        </>
    );
}
