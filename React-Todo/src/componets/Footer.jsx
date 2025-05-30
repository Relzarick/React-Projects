import { useMemo } from "react";
import quotes from "../assets/quotes";

export const Footer = ({ totalTodos }) => {
  const generateQuote = useMemo(() => {
    const index = Math.floor(Math.random() * quotes.length);

    return quotes[index];
  }, []);

  return (
    <>
      <h2 className="font-semibold mb-4">Remaning todos: {totalTodos}</h2>
      {generateQuote}
    </>
  );
};
