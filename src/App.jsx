import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-slate-500 text-2xl flex justify-items-center text-title-sm ">
        UVNL CRM
      </h1>
    </>
  );
}

export default App;
