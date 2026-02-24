import { useState } from "react";
import "../styles/App.css";
import { BasicInfoSection } from "./BasicInfoSection.jsx";
import { EducationSection } from "./EducationSection.jsx";

function App() {
  return (
    <>
      <BasicInfoSection />
      <EducationSection />
    </>
  );
}

export default App;
