import React, { useState } from "react";
import { useContext } from "react";
import { BiCheck } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import "../App.css";
import { UserContext } from "../Context/UserContext";

const Todo = ({ name, completed,id }) => {
const {data,setdata} = useContext(UserContext)
const complete = ()=>{
  for(const todo of data){
    if(todo.id===id){
      
    }
  }
}
console.log(data);
  return (
    <div className="w-full shrink-0 h-16 flex items-center justify-between p-3 border-b-2 border-gray-300">
      <div className="w-2/3 flex">
        <div
          className={`w-7 h-7 rounded-full ${
            completed && "bg-gradient-to-b from-[#57ddff] to-[#c058f3]"
          } bg-gray-300 hover:bg-gradient-to-b from-[#57ddff] to-[#c058f3] flex justify-center items-center`}
        >
          <div
            onClick={complete}
            className={`w-6 h-6 tododiv bg-white ${
              completed && "bg-gradient-to-b from-[#57ddff] to-[#c058f3]"
            }  rounded-full  flex justify-center items-center`}
          >
            {completed && <BiCheck className=" text-white" />}
          </div>
        </div>
        <h1 className={`ml-4 text-xl overflow-x-auto ${completed && "line-through text-[#9394a5]"}`}>
          {name}
        </h1>
      </div>

      <GrFormClose className="w-6 h-6 cursor-pointer " />
    </div>
  );
};

export default Todo;
