import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import SimpleMainComponent from "./SimpleMainComponent";
import MainComponent from "./MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Question } from "./questions/Question";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => {
  const [shouldReveal, setShouldReveal] = useState(false);
  return (
    <div style={styles}>
      questions:
      <Question
        question="Which map is sorted by default"
        answers={["TreeMap", "HashMap"]}
        correctAnswers={[1]}
        shouldRevealAnswer={shouldReveal}
      />
      <button
        onClick={() => {
          setShouldReveal(!shouldReveal);
        }}
      >
        Check
      </button>
    </div>
  );
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
