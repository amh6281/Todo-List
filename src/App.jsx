import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import "./global.scss";
import axios from "axios";

function App() {
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
  }, []);

  return (
    <div className="container">
      <Header />
      <TodoForm />
      <TodoList todos={todos.value} />
    </div>
  );
}

export default App;
