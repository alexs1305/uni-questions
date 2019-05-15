import * as React from "react";
import { useState } from "react";

interface Props {
  question: string;
  answers: string[];
  correctAnswers: number[];
  shouldRevealAnswer: boolean;
}

type AnswerState = "correct" | "incorrect" | "nothing";

function check(
  number: number,
  submitted: number[],
  actual: number[]
): AnswerState {
  let state: AnswerState = "nothing";
  if (submitted.some(i => i === number) && actual.some(i => i === number))
    state = "correct";
  if (submitted.some(i => i === number) && actual.every(i => i !== number))
    state = "incorrect";
  if (actual.some(i => i === number) && submitted.every(i => i !== number))
    state = "incorrect";

  return state;
}

export const Question: React.SFC<Props> = ({
  question,
  answers,
  correctAnswers,
  shouldRevealAnswer
}) => {
  const [checkedAnswers, setCheckedAnswers] = useState([]);

  return (
    <div>
      <h3>{question}</h3>
      {answers.map((q, i) => {
        let state = check(i, checkedAnswers, correctAnswers);
        return (
          <li key={i} style={{ display: "inlinebox" }}>
            <span
              style={
                shouldRevealAnswer && state !== "nothing"
                  ? state === "correct"
                    ? {
                        color: "green",
                        fontWeight: "bold"
                      }
                    : { color: "red" }
                  : {}
              }
            >
              {q}
            </span>
            <input
              type="checkbox"
              onClick={() => {
                if (checkedAnswers.some(a => a === i)) {
                  setCheckedAnswers(
                    checkedAnswers.filter(index => index !== i)
                  );
                } else setCheckedAnswers((checkedAnswers || []).concat([i]));
              }}
            />
          </li>
        );
      })}
      <div />
    </div>
  );
};
