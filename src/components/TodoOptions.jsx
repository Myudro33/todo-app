import React from "react";

const TodoOptions = ({ theme }) => {
  return (
    <div
      className={`${
        theme ? "bg-[#393a4c]" : "bg-white"
      } rounded-b-lg w-full h-14 p-4 text-[#9394a5] flex justify-between font-semibold text-sm`}
    >
      <p>0 tasks left</p>
      <span className="flex w-44 justify-between">
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </span>
      <p>Clear Completed</p>
    </div>
  );
};

export default TodoOptions;
