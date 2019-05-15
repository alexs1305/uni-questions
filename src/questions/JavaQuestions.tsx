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
  },
  {
    question:
      "What are the similarities between abstract classes and interfaces",
    answers: [
      "They both allow private variables",
      "they both define abstract methods",
      "they both are used by defining the 'inherits' keyword",
      "they both allow final variables",
      "neither allow for instance methods"
    ],
    correctAnswers: [1, 3]
  },
  {
    question: "What are the differences of abstract classes and interfaces",
    answers: [
      "abstract classes allow for instance methods",
      "interfaces allow for only final variables and these are public",
      "interfaces are 'implments' whereas abstract are 'extends'",
      "abstract classes can have implemented methods, interfaces can only have abstracted methods"
    ],
    correctAnswers: [0, 1, 2, 3]
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
