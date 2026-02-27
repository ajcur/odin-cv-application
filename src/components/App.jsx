import { useState } from "react";
import "../styles/App.css";
import { BasicInfoSection } from "./BasicInfoSection.jsx";
import { ExperienceSection } from "./ExperienceSection.jsx";

function App() {
  return (
    <>
      <BasicInfoSection />
      <ExperienceSection
        tag="education"
        title="Education"
        addBtnText="Add School"
        placeholderText="School Name"
      />
      <ExperienceSection
        tag="work"
        title="Work Experience"
        addBtnText="Add Work Experience"
        placeholderText="Company Name"
      />
    </>
  );
}

export default App;
