import React from "react";
import "../App.css";
import { v4 as uuid } from "uuid";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Todo from "./Todo";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const List = ({ theme, options }) => {
  const value = useContext(UserContext);
  const { data, setdata } = useContext(UserContext);
  const [activeTodos, setactiveTodos] = useState([]);
  const [completedTodos, setcompletedTodos] = useState([]);
  const [todos, setUpdatedTodos] = useState(data);
  useEffect(() => {
    if (value.value !== "") {
      setdata([...data, { name: value.value, id: uuid(), completed: false }]);
    }
  }, [value.value]);
  useEffect(() => {
    setcompletedTodos(data.filter((todo) => todo.completed !== false));
    setactiveTodos(data.filter((todo) => todo.completed !== true));
    setUpdatedTodos(data);
  }, [data]);
  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem("data"));
    setdata(newData);
  }, []);
  const handleOnDragEnd = (result) => {
    if(!result.destination) return
    const items = Array.from(todos);
    const [reorderedTodos] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedTodos);
    setUpdatedTodos(items)
  };

  return (
    <div
      className={`w-full h-96 rounded-t-lg overflow-scroll box-border ${
        theme ? "bg-[#393a4c]" : "bg-white"
      } flex flex-col`}
    >
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <div
              className="todos"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {options === "All" &&
                todos.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Todo
                          theme={theme}
                          key={todo.id}
                          name={todo.name}
                          id={todo.id}
                          completedd={todo.completed}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {/* {data.length < 1 && options === "All" && (
          <h1 className="m-auto text-[#9394a5]  text-3xl">
            You don't have any task...
          </h1>
        )}
        {options === "Active" &&
          activeTodos.map((todo) => (
            <Todo
              theme={theme}
              key={todo.id}
              name={todo.name}
              id={todo.id}
              completedd={todo.completed}
            />
          ))}
        {activeTodos.length < 1 && options === "Active" && (
          <h1 className="m-auto text-[#9394a5]  text-3xl">
            You don't have any task...
          </h1>
        )}
        {options === "Completed" &&
          completedTodos.map((todo) => (
            <Todo
              theme={theme}
              key={todo.id}
              name={todo.name}
              id={todo.id}
              completedd={todo.completed}
            />
          ))}
        {completedTodos.length < 1 && options === "Completed" && (
          <h1 className="m-auto text-[#9394a5]  text-3xl">
            You don't have any task...
          </h1>
        )} */}
    </div>
  );
};

export default List;
