import { useState } from "react";
import { Warning } from "./Warning";

export const UserInput = ({ onInput, value, onSubmit }) => {
  const [submitEmpty, setSubmitEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      setSubmitEmpty(true);
    } else {
      const parsedValue =
        value.length > 40
          ? value.split("").splice(0, 37).join("") + "..."
          : value;

      onSubmit(parsedValue);
    }
  };

  return (
    <>
      {submitEmpty && (
        <div className="bg-white brightness-40 fixed inset-0"></div>
      )}
      {submitEmpty && <Warning onClose={() => setSubmitEmpty(false)} />}

      <form className="mb-4 flex" onSubmit={handleSubmit}>
        <input
          placeholder="Add new task"
          className="border-b-2 focus:outline-none w-[90%]"
          onChange={onInput}
          value={value}
        ></input>
        <button
          type="submit"
          className="fa-solid fa-square-plus fa-3x ml-4 hover:cursor-pointer"
        ></button>
      </form>
    </>
  );
};
