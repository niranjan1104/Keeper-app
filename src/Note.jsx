import React from "react";
import deleteicon from "./deleteimage.png"

function Note({ id, title, content, onDelete }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button className="delete-button" onClick={() => onDelete(id)}>
        <img 
          src={deleteicon}
          alt="Delete" 
          style={{ width: "24px", height: "24px" }} 
        />
      </button>
    </div>
  );
}

export default Note;
