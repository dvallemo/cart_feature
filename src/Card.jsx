import { useState, useEffect } from "react";
import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const eventHandler = (event) => {
      if (event.code === "Space") {
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    };
    window.addEventListener("keydown", eventHandler);
    // clean up function
    return () => {
      window.removeEventListener("keydown", eventHandler);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      {/* //using children instead of prop drilling */}
      <ButtonContainer>
        <CountButton
          locked={locked}
          type="minus"
          setCount={setCount}
        ></CountButton>
        <CountButton
          locked={locked}
          type="plus"
          setCount={setCount}
        ></CountButton>
      </ButtonContainer>
    </div>
  );
}
