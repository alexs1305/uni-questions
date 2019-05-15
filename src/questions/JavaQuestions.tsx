import { QuestionType, Question } from "./Question";
import React from "react";

interface Props {
  shouldReveal: boolean;
}

const data: QuestionType[] = [
  {
    question: "Which map is sorted by default",
    answers: ["TreeMap", "HashMap"],
    correctAnswers: [0]
  }
];

export const JavaQuestions: React.SFC<Props> = ({ shouldReveal }) => {
  return (
    <React.Fragment>
      {data.map(q => (
        <Question question={q} shouldRevealAnswer={shouldReveal} />
      ))}
    </React.Fragment>
  );
};
