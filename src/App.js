import "./App.css";
import { NewToDoList } from "./components/header";
import { TodoList } from "./components/list";

function App() {
  return (
    <>
      <NewToDoList />
      <TodoList />
    </>
  );
}

export default App;
