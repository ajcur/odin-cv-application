import { useState } from "react";
import { ExperienceUnit } from "./ExperienceUnit";

function ExperienceSection({ tag, title, addBtnText, placeholderText }) {
  const [editMode, setEditMode] = useState(true);
  const [childIds, setChildIds] = useState([]);

  function handleEditModeChange() {
    setEditMode(!editMode);
  }

  function handleAddChild() {
    let newId = crypto.randomUUID();
    setChildIds(childIds.concat(newId));
  }

  function handleDeleteChild(idToDelete) {
    setChildIds(childIds.filter((id) => id !== idToDelete));
  }

  return (
    <section className={`experience ${tag}`}>
      {editMode ? (
        <div className={`${tag} title edit`}>
          <h2>{title}</h2>
          <button className="add-btn" onClick={handleAddChild}>
            {addBtnText}
          </button>
        </div>
      ) : (
        <h2>{title}</h2>
      )}
      {childIds.map((id) => (
        <ExperienceUnit
          key={id}
          editMode={editMode}
          tag={tag}
          placeholderText={placeholderText}
          handleDelete={() => handleDeleteChild(id)}
        />
      ))}

      <button className="edit-save-btn" onClick={handleEditModeChange}>
        {editMode ? "Save" : "Edit"}
      </button>
    </section>
  );
}

export { ExperienceSection };
