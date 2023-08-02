import React, { useState } from "react";
import "./todoItem.scss";

const TodoItem = () => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={`todoItem ${checked ? "checked" : ""}`}>
      <div className="itemWrapper">
        <input type="checkbox" checked={checked} onChange={handleChecked} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cum
          id sint reprehenderit, quam minima tenetur. Ratione, reiciendis unde
          praesentium minima vitae tempore dolores eius nesciunt asperiores
          quidem a saepe.
        </p>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
