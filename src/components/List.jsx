import React from "react";
import '../App.css'
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Todo from "./Todo";

const List = ({ theme }) => {
  const value = useContext(UserContext);
  const {data,setdata} = useContext(UserContext)
  useEffect(() => {
    if (value.value !== "") {
      setdata([...data, { name: value.value, id: uuid(), completed: false }]);
    }
  }, [value.value]);
  return (
    <div
      className={`w-full h-96 rounded-t-lg overflow-scroll box-border ${
        theme ? "bg-[#393a4c]" : "bg-white"
      } flex flex-col`}
    >
      {data.length>0?(
        <>{data.map((todo)=>(
          <Todo key={todo.id} name={todo.name} id={todo.id} completedd={todo.completed} />
        ))}</>
      ):(<h1 className="m-auto text-[#9394a5]  text-3xl">You don't have any task...</h1>)}
    </div>
  );
};

export default List;
