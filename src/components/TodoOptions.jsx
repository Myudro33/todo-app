import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const TodoOptions = ({ theme, options, setOptions }) => {
  const { data, setdata } = useContext(UserContext);
  const todos = data.filter((todo) => todo.completed !== true);
  const clearCompletedTodos = () => {
    setdata(data.filter((todo) => todo.completed !== true));
  };
  return (
    <div
      className={`${
        theme ? "bg-[#393a4c]" : "bg-white"
      } rounded-b-lg w-full h-14 p-4 text-[#9394a5] flex justify-between font-semibold text-sm`}
    >
      <p>{todos.length} tasks left</p>
      <span className="flex w-44 justify-between">
        <p
          className={`hover:text-black duration-100 cursor-pointer ${
            options === "All" ? "text-[#3a7bfd]" : ""
          }`}
          onClick={() => setOptions("All")}
        >
          All
        </p>
        <p
          className={`hover:text-black duration-100 cursor-pointer ${
            options === "Active" ? "text-[#3a7bfd]" : ""
          }`}
          onClick={() => setOptions("Active")}
        >
          Active
        </p>
        <p
          className={`hover:text-black duration-100 cursor-pointer ${
            options === "Completed" ? "text-[#3a7bfd]" : ""
          }`}
          onClick={() => setOptions("Completed")}
        >
          Completed
        </p>
      </span>
      <p
        onClick={clearCompletedTodos}
        className={`cursor-pointer ${
          theme ? "hover:text-white" : "hover:text-black"
        }`}
      >
        Clear Completed
      </p>
    </div>
  );
};

export default TodoOptions;
