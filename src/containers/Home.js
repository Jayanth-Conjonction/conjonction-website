import React from "react";
import withRoot from "../components/design/withRoot";
import Banner from "../home/Banner.js";
import Citation from "../home/Citation";
import Features from "../home/Features";
import FeatureWithSteps from "../home/FeaturesWithSteps";
import Footer from "../home/Footer";
import Pricing from "../home/Pricing";
import Team from "../home/Team";

function Index(props) {
  return (
    // <AnimationRevealPage>
    <>
      <Banner id="banner" />
      <Features id="features" />
      <Citation id="citation" />
      <FeatureWithSteps id="featuressteps" />
      <Pricing id="pricing" />
      <Team id="team" />
      <Footer id="footer" />

      {/* // </AnimationRevealPage> */}
    </>
  );
}

export default withRoot(Index);
