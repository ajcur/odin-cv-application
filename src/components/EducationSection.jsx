import { useState } from "react";
import { TimeframeTextField } from "./TimeframeTextField.jsx";
import { TextField } from "./TextField.jsx";

function EducationSection() {
  const [editMode, setEditMode] = useState(true);
  const [schoolIds, setSchoolIds] = useState([]);

  function handleEditModeChange() {
    setEditMode(!editMode);
  }

  function handleAddSchool() {
    let newId = crypto.randomUUID();
    setSchoolIds(schoolIds.concat(newId));
  }

  function handleDeleteSchool(deleteId) {
    setSchoolIds(schoolIds.filter((id) => id !== deleteId));
  }

  return (
    <section id="education-info">
      {editMode ? (
        <div className="education-title edit">
          <h2>Education</h2>
          <button className="add-btn" onClick={handleAddSchool}>
            Add School
          </button>
        </div>
      ) : (
        <h2>Education</h2>
      )}
      {schoolIds.map((id) => (
        <TimeframeTextField
          key={id}
          editMode={editMode}
          deleteMethod={() => handleDeleteSchool(id)}
          type="school"
        />
      ))}

      <button className="edit-save-btn" onClick={handleEditModeChange}>
        {editMode ? "Save" : "Edit"}
      </button>
    </section>
  );
}

export { EducationSection };
