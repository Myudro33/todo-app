import React, { useEffect, useState } from "react";
import { iconMoon, iconSun } from "./assets/svg/svg";
import desktopDark from "./assets/jpg/bg-desktop-dark.jpg";
import desktopLight from "./assets/jpg/bg-desktop-light.jpg";
import Input from "./components/Input";
import List from "./components/List";
import TodoOptions from "./components/TodoOptions";
import { UserContext } from "./Context/UserContext";

const App = () => {
  const [theme, settheme] = useState(false);
  const [value,setValue] = useState('')
  const [data, setdata] = useState([])
  const [options,setOptions] = useState('All')
  useEffect(() => {
    localStorage.setItem('data',JSON.stringify(data))
  },[data])
  return (
    <div
      className={`w-full ${
        theme ? "bg-[#161722]" : "bg-white"
      } h-screen flex flex-col items-center`}
    >
      <img
        className="absolute w-full h-[17rem] object-cover"
        src={theme ? desktopDark : desktopLight}
        alt="bg"
      />
      <div className="relative flex  w-[34rem] justify-between  mt-8">
        <h1 className="text-4xl tracking-[0.5rem] font-semibold text-white">
          TODO
        </h1>
        <button onClick={() => settheme((prev) => !prev)}>
          {theme ? iconMoon : iconSun}
        </button>
      </div>
      <div className="w-[34rem] h-[37rem]  relative mt-10 rounded-lg">
        <UserContext.Provider  value={{value,setValue,data,setdata}}>
          <Input theme={theme} />
          <List options={options} theme={theme} />
        <hr className="w-full" />
        <TodoOptions options={options} setOptions={setOptions} theme={theme} />
        </UserContext.Provider>
        <div className="flex justify-center items-center w-full h-14 text-[#9394a5] text-sm tracking-wider">
          Drag and drop to reorder list
        </div>
      </div>
    </div>
  );
};

export default App;
