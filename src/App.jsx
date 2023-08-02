import Header from "./components/header/Header";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import "./global.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
