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

  em {
    font-style: italic;
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
`;

export default function Publication() {
    return (
        <>
            <title>Publication | Xiaorui Wang</title>
            <StyledMain>
                <h2>PUBLICATION</h2>

                <p>
                    <strong>
                        Publication: "Characteristics of Oil Peony Under Photovoltaic Panels"
                    </strong>
                </p>
                <ul>
                    <li>
                        Assisted my advisor in planting oil peony seedlings under fixed
                        photovoltaic brackets, within the gaps of single-axis photovoltaic
                        brackets, and on open land to study their growth characteristics.
                    </li>
                    <li>
                        Collected <strong>primary experimental data</strong>, conducted
                        comparative analyses with previous research and literature, and
                        calculated experimental errors for <strong>each dataset</strong>.
                    </li>
                    <li>
                        Utilized <strong>Microsoft Office</strong>, <strong>Python</strong>, and{" "}
                        <strong>MATLAB</strong> for <strong>data processing</strong> and{" "}
                        <strong>visualization</strong>, and employed <strong>LaTeX</strong> for
                        professional document formatting.
                    </li>
                    <li>
                        The final research paper was reviewed and successfully published in{" "}
                        <em>Solar Energy</em> (ISSN 1003-0417 · CN 11-1660/TK).
                    </li>
                </ul>
            </StyledMain>
        </>
    );
}
