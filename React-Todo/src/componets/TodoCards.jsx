export const TodoCards = ({ children, onRemove }) => {
  return (
    <div className="border-2 rounded-xl mb-4 flex place-content-between p-4">
      <p>{children}</p>
      <button
        className="fa-solid fa-x hover:cursor-pointer"
        onClick={onRemove}
      ></button>
    </div>
  );
};
