import React, { useRef, useState } from "react";
import "./todoForm.scss";
import axios from "axios";

const TodoForm = ({ input, setInput, todos }) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // input 값이 없거나 공백일 경우 경고 메시지
    if (input.trim() === "") {
      alert("할일이 없습니다.");
      inputRef.current.focus();
      return;
    }
    // 할일이 10개인 경우
    if (todos.count >= 10) {
      alert("[할 일]은 최대 10개까지 등록할 수 있습니다.");
      return;
    }
    // 10개 이하일 경우는 생성
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
    <div
      className={`todoForm ${
        input.trim() === "" || todos.count >= 10 ? "dimmed" : ""
      }`}
    >
      <input
        type="text"
        placeholder="내용을 입력한 후, 오른쪽에 [할 일 추가]를 클릭해 주세요."
        maxLength="50"
        onChange={handleChange}
        value={input}
        ref={inputRef}
      />
      <button onClick={handleSubmit}>할 일 추가</button>
    </div>
  );
};

export default TodoForm;
