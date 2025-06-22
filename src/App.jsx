import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-5xl font-bold underline">Hello world!</p>
      <p className="text-red-500 bg-blue-500 p-4">Test colors</p>
    </>
  );
}

export default App;
