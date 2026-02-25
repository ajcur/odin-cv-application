import { useState } from "react";
import { TextField } from "./TextField.jsx";

let schools = [];

function School({ editMode, deleteMethod }) {
  const [fromYear, setFromYear] = useState("");
  const [toYear, setToYear] = useState("");
  const [schoolName, setSchoolName] = useState("");

  function handleFromYearChange(e) {
    setFromYear(e.target.value);
  }

  function handleToYearChange(e) {
    setToYear(e.target.value);
  }

  function handleSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }

  let allEmpty = fromYear == "" && toYear == "" && schoolName == "";

  return (
    <>
      {editMode ? (
        <div className="school edit">
          <div className="from-to edit">
            <input
              value={fromYear}
              placeholder="Start (Year)"
              onChange={handleFromYearChange}
            />{" "}
            –{" "}
            <input
              value={toYear}
              placeholder="End (Year)"
              onChange={handleToYearChange}
            />
            :{" "}
          </div>
          <input
            value={schoolName}
            placeholder="School Name"
            onChange={handleSchoolNameChange}
          />
          <button className="delete-school" onClick={deleteMethod}>
            X
          </button>
        </div>
      ) : allEmpty ? null : (
        <div className="school display">
          <span className="from-to">
            {fromYear} – {toYear}:{" "}
          </span>
          <span>{schoolName}</span>
        </div>
      )}
    </>
  );
}

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
        <School
          key={id}
          editMode={editMode}
          deleteMethod={() => handleDeleteSchool(id)}
        />
      ))}

      <button className="edit-save-btn" onClick={handleEditModeChange}>
        {editMode ? "Save" : "Edit"}
      </button>
    </section>
  );
}

export { EducationSection };
