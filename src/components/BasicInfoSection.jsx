import { useState } from "react";
import { TextField } from "./TextField.jsx";

function BasicInfoSection() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNr, setPhoneNr] = useState("");
  const [email, setEmail] = useState("");
  const [editMode, setEditMode] = useState(true);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDobChange(e) {
    setDob(e.target.value);
  }

  function handlePhoneNrChange(e) {
    setPhoneNr(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleEditModeChange() {
    setEditMode(!editMode);
  }

  return (
    <section id="basic-info">
      <h2>General Information</h2>

      <TextField
        editMode={editMode}
        labelText="Name"
        text={name}
        handleChange={handleNameChange}
      />

      <TextField
        editMode={editMode}
        labelText="Date of Birth"
        text={dob}
        handleChange={handleDobChange}
      />

      <TextField
        editMode={editMode}
        labelText="Phone Number"
        text={phoneNr}
        handleChange={handlePhoneNrChange}
      />

      <TextField
        editMode={editMode}
        labelText="E-Mail"
        text={email}
        handleChange={handleEmailChange}
      />

      <button className="edit-save-btn" onClick={handleEditModeChange}>
        {editMode ? "Save" : "Edit"}
      </button>
    </section>
  );
}

export { BasicInfoSection };
