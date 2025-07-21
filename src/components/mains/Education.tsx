import styled from "styled-components";

const StyledMain = styled.main`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 3vw;
  border-radius: 2vw;
    width:80%;
  color: #ffffff;

  h2 {
    font-size: calc(20px + 0.5vw);
    margin-top: 0;
  }

  p {
    font-size: calc(14px + 0.3vw);
    line-height: 1.6;
    //margin-bottom: 2rem;
  }

  strong {
    font-weight: bold;
  }

  br {
    line-height: 2;
  }
`;

export default function Education() {
    return (
        <>
            <title>Education | Xiaorui Wang</title>
            <StyledMain>
                <h2>Education</h2>
                <p>
                    Boston University - Boston, MA <br />
                    <strong>Expected Graduation: May 2026</strong> <br />
                    <strong>Major:</strong> Physics and Computer Science <br />
                </p>
                <p>
                    Relevant Coursework: <br />
                    - Data Structures and Algorithms <br />
                    - Computer Systems <br />
                    - Software Engineering <br />
                    - Database Systems <br />
                    - Web Development <br />
                    - Introduction to Artificial Intelligence <br />
                    - Machine Learning <br />
                </p>
            </StyledMain>
        </>
    );
}
