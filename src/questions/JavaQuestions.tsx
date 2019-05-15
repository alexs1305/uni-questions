import { QuestionType, Question } from "./Question";
import React, { useState, useEffect } from "react";

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
      "What are the similarities between abstract classes and interfaces (2)",
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
      "abstract classes can have implemented methods, interfaces can only have abstracted methods",
      "all of the above"
    ],
    correctAnswers: [4]
  },
  {
    question: "Polymorphism is (2)",
    answers: [
      "a method that multiple objects understand and act on in their own way",
      "a code that implements the same method",
      "a class that inherits from another class",
      "an interface"
    ],
    correctAnswers: [1, 0]
  },
  {
    question: "Something is a component class when",
    answers: [
      "is is used as an instance variable in another class",
      "is exposes static methods",
      "it has instances of reference types",
      "it is a super class"
    ],
    correctAnswers: [0]
  },
  {
    question: "A composite class has",
    answers: [
      "a method",
      "implements many interfaces",
      "a reference type instance variable",
      "extends from a super class"
    ],
    correctAnswers: [2]
  },
  {
    question: "what are characteristics of encapsulation",
    answers: [
      "has both data and methods to act on data",
      "hides data in private variables",
      "exposes public methods to act on data, usually for access control",
      "all of the above"
    ],
    correctAnswers: [3]
  }
];

const next = () => Math.floor(Math.random() * data.length);
const init: QuestionType[] = [];

export const JavaQuestions: React.SFC<Props> = ({ shouldReveal }) => {
  const [questions, setQuestions] = useState(init);

  useEffect(() => {
    if (questions.length > 0) return;
    let newQs: QuestionType[] = [];
    let iterations = 0;
    while (newQs.length < 10 && iterations < 100) {
      iterations++;
      let rnd = next();
      if (newQs.every(q => q !== data[rnd])) newQs.push(data[rnd]);
    }
    setQuestions(newQs);
  });

  return (
    <React.Fragment>
      {questions.map(q => (
        <Question question={q} shouldRevealAnswer={shouldReveal} />
      ))}
    </React.Fragment>
  );
};
