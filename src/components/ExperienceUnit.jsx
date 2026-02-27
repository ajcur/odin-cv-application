import { useState } from "react";
import { TextField } from "./TextField";

function ExperienceSummary({ editMode, placeholderText, handleDelete }) {
  const [fromYear, setFromYear] = useState("");
  const [toYear, setToYear] = useState("");
  const [experienceName, setExperienceName] = useState("");

  function handleFromYearChange(e) {
    setFromYear(e.target.value);
  }

  function handleToYearChange(e) {
    setToYear(e.target.value);
  }

  function handleExperienceNameChange(e) {
    setExperienceName(e.target.value);
  }

  return (
    <>
      {editMode ? (
        <div className="experience summary edit">
          <div className="from-to">
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
            value={experienceName}
            placeholder={placeholderText}
            onChange={handleExperienceNameChange}
          />
          <button onClick={handleDelete}>x</button>
        </div>
      ) : (
        <div className="experience summary display">
          <span className="from-to">
            {fromYear} – {toYear}:{" "}
          </span>
          <span>{experienceName}</span>
        </div>
      )}
    </>
  );
}

function ExperienceDetails({ editMode, tag }) {
  const [jobDegreeTitle, setJobDegreeTitle] = useState("");
  const [tasks, setTasks] = useState("");

  function handleJobDegreeTitleChange(e) {
    setJobDegreeTitle(e.target.value);
  }

  function handleTasksChange(e) {
    setTasks(e.target.value);
  }

  return (
    <>
      {tag == "work" ? (
        <div className="experience details work">
          <TextField
            editMode={editMode}
            labelText="Job Title"
            text={jobDegreeTitle}
            handleChange={handleJobDegreeTitleChange}
          />
          <TextField
            editMode={editMode}
            labelText="Primary Tasks"
            text={tasks}
            handleChange={handleTasksChange}
          />
        </div>
      ) : (
        <div className="experience details education">
          <TextField
            editMode={editMode}
            labelText="Degree"
            text={jobDegreeTitle}
            handleChange={handleJobDegreeTitleChange}
          />
        </div>
      )}
    </>
  );
}

function ExperienceUnit({ editMode, tag, placeholderText, handleDelete }) {
  return (
    <>
      <ExperienceSummary
        editMode={editMode}
        placeholderText={placeholderText}
        handleDelete={handleDelete}
      />
      <ExperienceDetails editMode={editMode} tag={tag} />
    </>
  );
}

export { ExperienceUnit };
