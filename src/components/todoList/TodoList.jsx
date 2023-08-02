import React, { useEffect, useState } from "react";
import "./todoList.scss";
import TodoItem from "../todoItem/TodoItem";
import axios from "axios";

const TodoList = ({ todos }) => {
  const [todoList, setTodoList] = useState([]);

  // App component에서 받은 todos를 TodoList component에서 관리
  useEffect(() => {
    setTodoList(todos);
  }, [todos]);

  // TodoItem 삭제 기능 함수
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/todos/${id}`);
      setTodoList((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="todoList">
      {todoList?.length === 0 && <span>등록된 [할 일]이 없습니다.</span>}
      {todoList?.map((item) => (
        <TodoItem
          key={item.id}
          content={item.content}
          id={item.id}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
