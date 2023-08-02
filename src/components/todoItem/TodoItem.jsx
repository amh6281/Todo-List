import React, { useState } from "react";
import "./todoItem.scss";
import axios from "axios";

const TodoItem = ({ content, id, onDelete }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked((prev) => !prev);
  };

  const handleDelete = async () => {
    onDelete(id);
  };

  return (
    <div className={`todoItem ${checked ? "checked" : ""}`}>
      <div className="itemWrapper">
        <input type="checkbox" checked={checked} onChange={handleChecked} />
        <p>{content}</p>
        <button>수정</button>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
