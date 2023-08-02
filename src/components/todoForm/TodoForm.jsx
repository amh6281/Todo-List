import React from "react";
import "./todoForm.scss";

const TodoForm = () => {
  return (
    <div className="todoForm">
      <input
        type="text"
        placeholder="내용을 입력한 후, 오른쪽에 [할 일 추가]를 클릭해 주세요."
        maxLength="50"
      />
      <button>할 일 추가</button>
    </div>
  );
};

export default TodoForm;
