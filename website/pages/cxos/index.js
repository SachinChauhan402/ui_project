import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

import SlideFirst from "../../Components/PartnerProgram/CXOs/SlideFirst";
import { SlideSecond } from "../../Components/PartnerProgram/CXOs/SlideSecond";
import { SlideThird } from "../../Components/PartnerProgram/CXOs/SlideThird";
import { SlideFourth } from "../../Components/PartnerProgram/CXOs/SlideFourth";
import { SlideFifth } from "../../Components/PartnerProgram/CXOs/SlideFifth";
import SlideSixth from "../../Components/PartnerProgram/CXOs/SlideSixth";
import { SlideSeventh } from "../../Components/PartnerProgram/CXOs/SlideSeventh";
import { SlideEight } from "../../Components/PartnerProgram/CXOs/SlideEight";

const programone = () => {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection style={{ height: "100vh" }}>
          <SlideFirst />
        </FullpageSection>
        <FullpageSection
          style={{ height: "100vh", backgroundColor: "#AE155d" }}
        >
          <SlideSecond />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }}>
          <SlideThird />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }}>
          <SlideFourth />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }}>
          <SlideFifth />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }}>
          <SlideSixth />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }}>
          <SlideSeventh />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }}>
          <SlideEight />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default programone;
