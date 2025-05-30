import { TodoCards } from "./TodoCards";

export const TodoContainer = ({ listOfTodos, removeTodo }) => {
  return (
    <div className="mb-4">
      {listOfTodos.map((todo, index) => (
        <TodoCards key={index} onRemove={() => removeTodo(todo.id)}>
          {todo.text}
        </TodoCards>
      ))}
    </div>
  );
};
