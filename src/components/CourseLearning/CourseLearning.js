import React from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

import CourseCollapse from "./CourseCollapse";

import styles from "./CourseLearning.module.scss";

import Quiz from "react-quiz-component";
const quiz = {
  quizTitle: "Kiểm tra cuối chương 1",
  quizSynopsis: "s",
  nrOfQuestions: "3",
  questions: [
    {
      question:
        "How can you access the state of a component from inside of a member function?",
      questionType: "text",
      // questionPic: "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
    {
      question: "ReactJS is developed by _____?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Google Engineers", "Facebook Engineers"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
    {
      question: "ReactJS is an MVC based framework?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["True", "False"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "10",
    },
  ],
};

const CourseLearning = () => {
  const { learningLink } = useSelector((state) => state.course);

  return (
    <React.Fragment>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <ReactPlayer
            width="100%"
            height="100%"
            url={learningLink}
            controls={true}
          />
        </div>
        <div className={styles.div2}>
          <CourseCollapse />
        </div>
      </div>

      <div className={styles.quiz}>
        <Quiz quiz={quiz} />
      </div>
    </React.Fragment>
  );
};

export default CourseLearning;
