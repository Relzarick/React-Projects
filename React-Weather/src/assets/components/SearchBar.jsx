import { useState } from "react";

export const SearchBar = ({ handleLocation }) => {
  const [location, setlocation] = useState("");

  return (
    <form
      className="flex justify-end items-center"
      onSubmit={(e) => {
        e.preventDefault();
        handleLocation(location);
        setlocation("");
      }}
    >
      <div className="border-2 rounded-xl px-2 bg-white/30 ">
        <label htmlFor="n" className="fa-regular fa-magnifying-glass"></label>
        <input
          id="n"
          name="location"
          value={location}
          className="focus:outline-0 pl-2"
          onChange={(e) => setlocation(e.target.value)}
        ></input>
      </div>
    </form>
  );
};
