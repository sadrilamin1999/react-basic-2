import { useRef } from "react";

const Dom = () => {
  const myRef = useRef(null);
  console.log(myRef.current);

  const handleChange = () => {
    myRef.current.textContent = "Hello React";
  };
  return (
    <>
      <h2 ref={myRef}>Hello</h2>
      <button onClick={handleChange}>Click to change</button>
    </>
  );
};

export default Dom;
