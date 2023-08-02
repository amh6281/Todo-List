import React from "react";
import "./todoList.scss";
import TodoItem from "../todoItem/TodoItem";

const TodoList = () => {
  return (
    <div className="todoList">
      {/* <span>등록된 [할 일]이 없습니다.</span> */}
      <TodoItem />
    </div>
  );
};

export default TodoList;
