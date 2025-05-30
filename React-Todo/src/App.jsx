import { useState } from "react";
import { Footer } from "./componets/Footer";
import { Header } from "./componets/Header";
import { TodoContainer } from "./componets/TodoContainer";
import { UserInput } from "./componets/UserInput";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const onSubmit = (newTodo) => {
    setTodos([...todos, { id: todos.length, text: newTodo }]);
    setInput("");
  };

  const handleRemoval = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="text-gray-600 flex flex-col justify-center items-center h-screen p-4">
      <div className="w-full max-w-md">
        <Header>Your To Do</Header>
        <UserInput
          onInput={(e) => setInput(e.target.value)}
          value={input}
          onSubmit={onSubmit}
        />
        <TodoContainer listOfTodos={todos} removeTodo={handleRemoval} />
        <Footer totalTodos={todos.length} />
      </div>
    </div>
  );
}

export default App;
