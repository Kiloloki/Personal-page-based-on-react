import styled from "styled-components";
import Calculator from "./Calculator";

const StyledMain = styled.main`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 3vw;
  border-radius: 2vw;
  color: #ffffff;
    width:80%;

  h2 {
    font-size: calc(20px + 0.5vw);
    margin-top: 2rem;
  }

  p {
    font-size: calc(14px + 0.3vw);
    margin: 1.5rem 0 0.5rem;
    line-height: 1.8;
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
`;

export default function Projects() {
    return (
        <>
            <title>Projects | Xiaorui Wang</title>
            <StyledMain>
                <h2>PROJECT EXPERIENCES</h2>

                {/* Project 1 */}
                <p>
                    <strong
                    >Geo-Enhanced Stay Rental Platform: Single-Page Application with
                        React and Spring Boot</strong
                    >
                </p>
                <ul>
                    <li>
                        Designed and built a single page web application using React.
                        Bootstrap the development with mature component library
                        <strong>AntD</strong>.
                    </li>
                    <li>
                        Implemented the backend services based on
                        <strong>Spring Boot</strong> to support stay upload, delete,
                        search and reserve functionality.
                    </li>
                    <li>
                        Used <strong>MySQL</strong> to store user-generated data, e.g.
                        stay information and reservation history, and utilized
                        <strong>Google Cloud Storage</strong> to store media files for the
                        uploaded stays.
                    </li>
                    <li>
                        Created geo index by <strong>Elasticsearch</strong> to support
                        geo-based stay search based on user's selected locations.
                    </li>
                    <li>
                        Implemented token-based server side user authentication based on
                        the
                        <strong>Spring Security</strong> framework.
                    </li>
                    <li>
                        Deployed the backend service to
                        <strong>Google App Engine</strong> for better scalability and
                        reliability.
                    </li>
                </ul>
                <br />

                {/* Project 2 */}
                <p>
                    <strong
                    >TwitchPicks: A Personalized Twitch Resources Recommendation
                        Engine</strong
                    >
                </p>
                <ul>
                    <li>
                        Designed and built a full-stack <strong>Spring</strong> web
                        application that allows users to search and receive personalized
                        Twitch resource recommendations.
                    </li>
                    <li>
                        Implemented RESTful APIs and Retrieved real Twitch resources via
                        the Twitch API and stored data efficiently in
                        <strong>MySQL</strong>.
                    </li>
                    <li>
                        Explored and implemented multiple
                        <strong>recommendation algorithms</strong>, enhancing the accuracy
                        of content-based recommendations.
                    </li>
                    <li>
                        Extracted game information from Twitch resources, optimizing the
                        recommendation system's relevance and
                        <strong>increasing user interaction</strong>.
                    </li>
                    <li>
                        Deployed the service on <strong>AWS EC2</strong>, enhancing
                        application stability and
                        <strong>achieving a 99.9% uptime</strong>.
                    </li>
                </ul>
                <br />

                {/* Project 3 */}
                <p>
                    <strong
                    >AI-Enhanced Social Networking Platform with Advanced Search and
                        Content Creation</strong
                    >
                </p>
                <ul>
                    <li>
                        Designed and implemented a social network web application using
                        <strong>React JS</strong>, enhancing user interface responsiveness
                        and aesthetics.
                    </li>
                    <li>
                        Integrated <strong>OpenAI's Dall-E 3</strong> to assist users in
                        creating and updating visually rich posts, enhancing user
                        engagement and content creativity.
                    </li>
                    <li>
                        Improved the authentication process by implementing a token-based
                        registration/login/logout flow using
                        <strong>React Router v4</strong> and server-side user
                        authentication with <strong>JWT</strong>, strengthening security
                        and user experience.
                    </li>
                    <li>
                        Launched a scalable web service using <strong>Go</strong>,
                        handling user posts efficiently, and deployed it to
                        <strong>Google Cloud (Google App Engine)</strong> to ensure high
                        availability and performance.
                    </li>
                    <li>
                        Utilized <strong>ElasticSearch</strong>, deployed on
                        <strong>Google Compute Engine (GCE)</strong>, to provide advanced
                        search functionalities, allowing users to effortlessly search for
                        recent posts and retrieve personal post histories.
                    </li>
                </ul>
                <br />


                {/* Project 4 */}
                <p>
                    <strong
                    >Melodify: High-Performance Spotify Favorites App in
                        Kotlin</strong
                    >
                </p>
                <ul>
                    <li>
                        Designed a <strong>Kotlin</strong>-based Spotify favorite app
                        utilizing <strong>Android Jetpack Library</strong> and
                        <strong>Hilt Dependency Injection</strong>, which streamlined app
                        performance and maintenance.
                    </li>
                    <li>
                        Implemented BottomBar & App Navigation using
                        <strong>Jetpack Navigation</strong> component, improving user
                        navigation efficiency.
                    </li>
                    <li>
                        Created a mock <strong>RESTFUL Api</strong> using
                        <strong>json-server</strong> and utilized
                        <strong>Retrofit</strong> to manage API requests.
                    </li>
                    <li>
                        Built the feed/album/favorite UI in
                        <strong>Jetpack Compose</strong> following
                        <strong>MVVM</strong> architecture, enhancing UI responsiveness
                        and user interaction.
                    </li>
                    <li>
                        Enabled local cache ability for favorite features using
                        <strong>Room Database</strong>.
                    </li>
                    <li>
                        Integrated <strong>Google Exoplayer</strong> for global music
                        playback, improving playback stability and user satisfaction.
                    </li>
                </ul>
                <br />


                {/* Project 5 */}
                <p><strong>AI-Powered Background Removal Web App</strong></p>
                <ul>
                    <li>
                        Designed and built a background removal web application using
                        <strong>Django</strong> Templates and
                        <strong>Material Design Lite (MDL)</strong> for UI styling.
                    </li>
                    <li>
                        Implemented image cropping and draggable selection area using
                        <strong>croppr.js</strong>, providing users with an intuitive
                        cropping experience.
                    </li>
                    <li>
                        Developed backend REST APIs using
                        <strong>Django REST Framework</strong> and integrated
                        <strong>U^2-Net</strong> deep learning model for high-accuracy
                        background removal.
                    </li>
                    <li>
                        Supported full image and cropped image processing, with storage of
                        image history and tag management in
                        <strong>SQLite</strong> database.
                    </li>
                    <li>
                        Enabled full <strong>CRUD</strong> support for managing images and
                        tags, and provided image search and filtering functionalities
                        based on user-defined tags.
                    </li>
                    <li>
                        Potential developments include batch image processing, user
                        profiles, personal image galleries, full frontend-backend
                        decoupling using React, and personalized content recommendation
                        based on user profiles.
                    </li>
                </ul>

                <h3>Simple Calculator Demo</h3>
                <Calculator /> {/* Calculator components */}

            </StyledMain>
        </>
    );
}
