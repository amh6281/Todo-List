import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import "./global.scss";
import axios from "axios";

function App() {
  // TodoForm 컴포넌트에서 추가 시 input이 ""가 되고, 변경된 input으로 인해 fetchTodos 호출
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/v1/todos?offset=0&limit=50"
        );
        setTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTodos();
  }, [input]);
  console.log(todos);

  return (
    <div className="container">
      <Header />
      <TodoForm input={input} setInput={setInput} todos={todos} />
      <TodoList todos={todos.value} />
    </div>
  );
}

export default App;
