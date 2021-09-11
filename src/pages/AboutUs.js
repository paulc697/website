import React from "react";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection";
import ServicesSection from "../components/ServicesSection";

//Animations
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
const AboutUs = () => {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />;
      <ServicesSection />;
      <FAQSection />
      <ScrollTop />
    </motion.div>
  );
};
export default AboutUs;
