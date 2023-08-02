import React, { useState } from "react";
import "./todoForm.scss";
import axios from "axios";

const TodoForm = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/todos", {
        content: input,
        isCompleted: false,
      });
      res.status === 200 && setInput("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="todoForm">
      <input
        type="text"
        placeholder="내용을 입력한 후, 오른쪽에 [할 일 추가]를 클릭해 주세요."
        maxLength="50"
        onChange={handleChange}
        value={input}
      />
      <button onClick={handleSubmit}>할 일 추가</button>
    </div>
  );
};

export default TodoForm;
