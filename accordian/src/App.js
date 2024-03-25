import { useState } from "react";
import Accordian from "./components/Accordian";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // handlers
  const handleShow = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Accordian
        title="About"
        isActive={activeIndex === 0 && true}
        onShow={() => handleShow(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Accordian>
      <Accordian
        title="Etymology"
        isActive={activeIndex === 1 && true}
        onShow={() => handleShow(1)}
      >
        The name comes from the Kazakh word for "apple" and is often translated
        as "full of apples". In fact, the region surrounding Almaty is thought
        to be the ancestral home of the apple, and the wild is considered a
        likely candidate for the ancestor of the modern domestic apple.
      </Accordian>
    </>
  );
};

export default App;
