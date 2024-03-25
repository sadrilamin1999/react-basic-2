import { useRef } from "react";

const Counter = () => {
  let countRef = useRef(0);

  console.log("Rendering .. ");

  const handleIncrement = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  };
  return (
    <>
      {/* <h2>{countRef.current}</h2> */}
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default Counter;
