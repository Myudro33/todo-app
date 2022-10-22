import React from "react";
import {useContext,useState } from "react";
import "../App.css";
import { UserContext } from "../Context/UserContext";
import useKey from "@rooks/use-key";

const Input = ({ theme }) => {
  const [todoText, settodoText] = useState("");
  const [placeHolder, setplaceHolder] = useState(false);
  const {value,setValue} = useContext(UserContext)
  const sendTodoText = () => {
    if (todoText !== "" && todoText.length > 5) {
      setValue(todoText)
      settodoText('')
      setplaceHolder(false)
    }
    if (todoText.length < 5) {
      settodoText("");
      setplaceHolder(true);
    }
  };
  useKey(["Enter"], sendTodoText);
  return (
    <div
      className={`w-full h-16 ${
        theme ? "bg-[#393a4c]" : "bg-white"
      } rounded-lg my-4 p-4 flex justify-between items-center`}
    >
      <input
        className={`placeholder:text-xl ${
          placeHolder ? "placeholder:text-red-600" : "text-white"
        } text-xl outline-none w-4/5 bg-transparent ${
          theme ? "text-white" : "text-black"
        }`}
        placeholder={`${
          placeHolder
            ? "Name must be at least 5 characters"
            : "Create a new todo..."
        }`}
        type="text"
        onChange={(e) => settodoText(e.target.value)}
        value={todoText}
      />
      <button onClick={sendTodoText} className="text-[#57ddff]">
        Save
      </button>
    </div>
  );
};

export default Input;
