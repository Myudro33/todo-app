import React from "react";
import { useContext } from "react";
import { BiCheck } from "react-icons/bi";
import styled from "styled-components";
import { CloseOutline } from "@styled-icons/evaicons-outline/";
import { RiCloseCircleFill, RiCloseCircleLine } from "react-icons/ri";
import "../App.css";
import { UserContext } from "../Context/UserContext";
let themee = "";
const Close = styled(CloseOutline)`
  width: 20px;
  cursor: pointer;
  color: gray;
  &:hover {
    color: black;
  }
`;
const Todo = ({ name, completedd, id, theme }) => {
  themee = theme;
  const { data, setdata } = useContext(UserContext);
  const complete = () => {
    const newData = data.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setdata(newData);
  };
  const removeTodo = () => {
    setdata(data.filter((todo) => todo.name !== name));
  };
  return (
    <div
      draggable="true"
      className="w-full shrink-0 h-16 flex items-center justify-between p-3 border-b-2 border-gray-300"
    >
      <div className="w-2/3 flex">
        <div
          className={`w-7  h-7 rounded-full ${
            completedd && "bg-gradient-to-b from-[#57ddff] to-[#c058f3]"
          } bg-gray-300 hover:bg-gradient-to-b from-[#57ddff] to-[#c058f3] flex justify-center items-center`}
        >
          <div
            onClick={complete}
            className={`w-6 h-6 tododiv ${
              theme ? "bg-[#393a4c]" : "bg-white"
            } ${
              completedd && "bg-gradient-to-b from-[#57ddff] to-[#c058f3]"
            }  rounded-full  flex justify-center items-center`}
          >
            {completedd && <BiCheck className=" text-white" />}
          </div>
        </div>
        <h1
          onClick={complete}
          className={`${
            theme ? "text-white hover:text-[#57ddff]" : ""
          }  ml-4 cursor-pointer text-xl overflow-x-auto ${
            completedd && "line-through text-[#9394a5]"
          }`}
        >
          {name}
        </h1>
      </div>
      <Close onClick={removeTodo} />
    </div>
  );
};

export default Todo;
