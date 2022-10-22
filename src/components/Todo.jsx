import React, { useState } from "react";
import { useContext } from "react";
import { BiCheck } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import "../App.css";
import { UserContext } from "../Context/UserContext";

const Todo = ({ name, completedd,id }) => {
const {data,setdata} = useContext(UserContext)
const complete = ()=>{
   const newData = data.map((todo)=>{
    if(todo.id===id){
      return {...todo,completed:true}
    }
    return todo
   })
    setdata(newData)
  }
  console.log(completedd);
  return (
    <div className="w-full shrink-0 h-16 flex items-center justify-between p-3 border-b-2 border-gray-300">
      <div className="w-2/3 flex">
        <div
          className={`w-7 h-7 rounded-full ${
            completedd && "bg-gradient-to-b from-[#57ddff] to-[#c058f3]"
          } bg-gray-300 hover:bg-gradient-to-b from-[#57ddff] to-[#c058f3] flex justify-center items-center`}
        >
          <div
            onClick={complete}
            className={`w-6 h-6 tododiv bg-white ${
              completedd && "bg-gradient-to-b from-[#57ddff] to-[#c058f3]"
            }  rounded-full  flex justify-center items-center`}
          >
            {completedd && <BiCheck className=" text-white" />}
          </div>
        </div>
        <h1 className={`ml-4 text-xl overflow-x-auto ${completedd && "line-through text-[#9394a5]"}`}>
          {name}
        </h1>
      </div>

      <GrFormClose className="w-6 h-6 cursor-pointer " />
    </div>
  );
};

export default Todo;
