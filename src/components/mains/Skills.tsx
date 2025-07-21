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
    margin-bottom: 2rem;
  }

  strong {
    font-weight: bold;
  }

  br {
    line-height: 2;
  }
`;

export default function Skills() {
    return (
        <>
            <title>Skills | Xiaorui Wang</title>
            <StyledMain>
                <h2>TECHNICAL SKILLS</h2>
                <p>
                    <strong>Programming Languages:</strong> <br />
                    Java, JavaScript, Kotlin, Golang, Python, SQL, Swift, MatLab, C, C++
                    <br />
                    <br />
                    <strong>Databases and Cloud:</strong> <br />
                    MySQL, PostgreSQL, AWS Lambda/EC2, Google GCE, Google GAE, Amazon RDS, OpenAI API
                    <br />
                    <br />
                    <strong>Web/Mobile Development:</strong> <br />
                    Spring, Java Servlet, AngularJS, Node.js, jQuery, HTML & CSS, React JS, Redux, Android, Linux
                    <br />
                    <br />
                </p>
            </StyledMain>
        </>
    );
}
