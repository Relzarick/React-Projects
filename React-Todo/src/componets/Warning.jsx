export const Warning = ({ onClose }) => {
  return (
    <div className="absolute bg-white flex justify-between p-8 w-full max-w-md rounded-lg">
      <div>
        <h2 className="font-bold">Warning</h2>
        <p>Please enter a task before adding.</p>
      </div>
      <button
        className="fa-solid fa-x hover:cursor-pointer"
        onClick={onClose}
      ></button>
    </div>
  );
};
