import { useState } from "react";
import Content from "./Component/Content";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";






function App() {
    
    
  return (
    <div className="h-full w-full flex">
      <div className="h-full w-[100px]">
      <Sidebar></Sidebar>
      </div>
      
      <div className="flex w-full flex-col">
        <div className="h-[48px] justify-center items-center">
          <Navbar></Navbar>
        </div>
        <div className="h-full">
          <Content ></Content>
        </div>
      </div>
    </div>
  );
}

export default App;
