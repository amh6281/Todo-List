import React, { useEffect, useState } from "react";
import "./todoList.scss";
import TodoItem from "../todoItem/TodoItem";
import axios from "axios";

const TodoList = ({ todos }) => {
  const [todoList, setTodoList] = useState([]);

  // App component에서 받은 todos를 TodoList component에서 관리
  useEffect(() => {
    // 생성일 오름차순
    if (todos) {
      const sortedTodos = [...todos].sort(
        (a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime)
      );
      setTodoList(sortedTodos);
    }
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

  // TodoItem 수정 기능 함수
  const handleEdit = async (id, content, checked) => {
    try {
      // 이미 삭제된 할 일인지 확인
      const isDeleted = !todoList.some((item) => item.id === id);
      if (isDeleted) {
        alert("이미 삭제된 [할 일]입니다.");
        return;
      }

      await axios.patch(`http://localhost:8080/api/v1/todos/${id}`, {
        content: content,
        isCompleted: checked,
      });

      const updatedTodos = todoList.map((item) =>
        item.id === id ? { ...item, content, isCompleted: checked } : item
      );
      setTodoList(updatedTodos);
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
          onEdit={handleEdit}
          checked={item.isCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
