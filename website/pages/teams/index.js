import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

import SlideOne from "../../Components/PartnerProgram/PartnerTeams/SlideOne";
import SlideTwo from "../../Components/PartnerProgram/PartnerTeams/SlideTwo";
import SlideThree from "../../Components/PartnerProgram/PartnerTeams/SlideThree";
import SlideFour from "../../Components/PartnerProgram/PartnerTeams/SlideFour";
import SlideFive from "../../Components/PartnerProgram/PartnerTeams/SlideFive";
import SlideSix from "../../Components/PartnerProgram/PartnerTeams/SlideSix";
import SlideSeven from "../../Components/PartnerProgram/PartnerTeams/SlideSeven";
import SlideEighth from "../../Components/PartnerProgram/PartnerTeams/SlideEighth";
import SlideNine from "../../Components/PartnerProgram/PartnerTeams/SlideNine";

const teams = () => {
  return (
    <div>
      <Fullpage>
        <FullPageSections>
          <FullpageSection style={{ height: "100vh" }}>
            <SlideOne />
          </FullpageSection>
          <FullpageSection
            style={{ height: "100vh", backgroundColor: "#0572BD" }}
          >
            <SlideTwo />
          </FullpageSection>
          <FullpageSection style={{ height: "100vh" }}>
            <SlideThree />
          </FullpageSection>
          <FullpageSection style={{ height: "100vh" }}>
            <SlideFour />
          </FullpageSection>
          <FullpageSection style={{ height: "100vh" }}>
            <SlideFive />
          </FullpageSection>
          <FullpageSection style={{ height: "100vh" }}>
            <SlideSix />
          </FullpageSection>
          <FullpageSection style={{ height: "100vh" }}>
            <SlideSeven />
          </FullpageSection>
          <FullpageSection style={{ height: "100vh" }}>
            <SlideEighth />
          </FullpageSection>

          <FullpageSection style={{ height: "100vh" }}>
            <SlideNine />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
};

export default teams;
