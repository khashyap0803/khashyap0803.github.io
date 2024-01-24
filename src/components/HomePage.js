import ImageCarousel from "./Carousel";
// import CoreTeam from "./CoreTeam";
import NavBar from "./NavBar";
import SocietyCards from "./SocietyCards";
import Footer from "./Footer";
import Events from "./Events";
import TeamCarousel from "./TeamCarousel";
import { useState } from "react";
// import { useNavigation } from "react-router-dom";
// import Spinner from "./Spinner";
export default function HomePage() {
  //   const [showWelcome, setShowWelcome] = useState(true);

  //   useEffect(() => {
  //     // Set a timer to hide the welcome message after a certain duration
  //     const timer = setTimeout(() => {
  //       setShowWelcome(false);
  //     }, 500); // Adjust the duration as needed

  //     return () => clearTimeout(timer); // Clear the timer on component unmount
  //   }, []);
  const [slideIndex, setSlideIndex] = useState(0);
  // const navigation = useNavigation();
  // const isLoading = navigation.state === "loading";

  return (
    <div className="app-container">
      {/* {showWelcome ? (
        <div className="welcome-message">
          <h1 className="welcome-heading">Welcome to IEEE CBIT</h1>
        </div>
      ) : ( */}
      <>
        <NavBar itemId="societies" itemName="Socities" teamType="CoreTeam" />
        <div className="section" id="home">
          <ImageCarousel className="ImageCarousel" />
        </div>
        <p
          className="section-description section-divider"
          // style={{ padding: "10px", fontFamily: "Helvetica, sans-serif" }}
          style={{
            padding: "10px",
            fontFamily: "Helvetica, sans-serif",
            textAlign: "justify", // Center text on all screens
            fontSize: "18px", // Default font size for larger screens
          }}
          id="about"
        >
          <h1 style={{ textAlign: "center" }}>IEEE CBIT</h1>
          Computer Society Computer Society logoOpens in a new window
          www.computer.org Computer Society logo The Computer Society (CS) is
          the world's largest professional organization dedicated to advancing
          technology for the benefit of humanity. It has over 100,000 members in
          180 countries around the world. The CS provides resources and
          opportunities for professionals in the computing field, including
          conferences, publications, and educational programs. It also advocates
          for the responsible use of technology and promotes diversity and
          inclusion in the computing field. Sure. Here are small descriptions of
          the following societies which are part of the IEEE club: Computer
          Society Computer Society logoOpens in a new window www.computer.org
          Computer Society logo The Computer Society (CS) is the world's largest
          professional organization dedicated to advancing technology for the
          benefit of humanity. It has over 100,000 members in 180 countries
          around the world. The CS provides resources and opportunities for
          professionals in the computing field, including conferences,
          publications, and educational programs. It also advocates for the
          responsible use of technology and promotes diversity and inclusion in
          the computing field.
        </p>
        <div className="section" id="societies">
          <h2 className="section-heading">Societies</h2>
          <SocietyCards />
          <hr className="section-divider" />
        </div>
        {/* <div className="section" id="coreteam">
          <h2 className="section-heading">Core</h2>
          <TeamCarousel />
          <hr className="section-divider" />
        </div> */}
        <div className="section" id="coreteam">
          <h2 className="section-heading">
            {slideIndex < 4 ? "Core Team" : "Executive Board"}
          </h2>
          <TeamCarousel onSlideChange={setSlideIndex} />
          <hr className="section-divider" />
        </div>

        <div className="section" id="events">
          <h2 className="section-heading">Events</h2>
          <Events />
          <hr className="section-divider" />
        </div>

        <Footer />
      </>
      {/* )} */}
    </div>
  );
}
