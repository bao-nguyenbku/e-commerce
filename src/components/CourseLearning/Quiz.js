// import React from 'react'
import Qu from "react-quiz-component";
import styles from "./Quiz.module.scss";

const quiz = {
  quizTitle: "Kiểm tra cuối chương 1",
  quizSynopsis: "",
  nrOfQuestions: "6",
  questions: [
    {
      question: "Chuỗi aaaaabaaa được chấp nhận bởi automata trên bài giảng.",
      questionType: "text",
      // questionPic: "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: ["True", "False"],
      correctAnswer: "1",
      messageForCorrectAnswer:
        "Correct. Từ q0 sau khi đọc chuỗi trên thì automata ở trạng thái q1 (kết thúc) nên chuỗi nhập được chấp nhận",
      messageForIncorrectAnswer: "Incorrect.",
      explanation:
        "Từ q0 sau khi đọc chuỗi trên thì automata ở trạng thái q1 (kết thúc) nên chuỗi nhập được chấp nhận",
      point: "20",
    },
    {
      question: "Chuỗi aaaaabb được chấp nhận bởi automata trên bài giảng.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["True", "False"],
      correctAnswer: "2",
      messageForCorrectAnswer:
        "Correct. Hai chữ bb sẽ làm cho automata ở trạng thái q0, nên chuỗi nhập không được chấp nhận",
      messageForIncorrectAnswer: "Incorrect.",
      explanation:
        "Hai chữ bb sẽ làm cho automata ở trạng thái q0, nên chuỗi nhập không được chấp nhận",
      point: "20",
    },
    {
      question:
        "Chọn True nếu văn phạm bị nhập nhằng và False nếu văn phạm không bị nhập nhằng.\n\n\n S → S A | A\n\n\n A → A  a | b ",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["True", "False"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct.",
      messageForIncorrectAnswer: "Incorrect.",
      explanation: "",
      point: "20",
    },
    {
      question:
        "Chọn True nếu văn phạm bị nhập nhằng và False nếu văn phạm không bị nhập nhằng.\n\n\n S → S A | A\n\n\n A → A  a | a ",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["True", "False"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct.",
      messageForIncorrectAnswer: "Incorrect.",
      explanation: "",
      point: "20",
    },
    {
      question:
        "Chọn True nếu văn phạm bị nhập nhằng và False nếu văn phạm không bị nhập nhằng.\n\n\n S → c S S | b ",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["True", "False"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct.",
      messageForIncorrectAnswer: "Incorrect.",
      explanation: "",
      point: "20",
    },
    {
      question:
        "Chọn True nếu văn phạm bị nhập nhằng và False nếu văn phạm không bị nhập nhằng.\n\n\n S → S c S | b ",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["True", "False"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct.",
      messageForIncorrectAnswer: "Incorrect.",
      explanation: "",
      point: "20",
    },
  ],
};

const Quiz = () => {
  return (
    <div className={styles.container}>
      <Qu quiz={quiz} className={styles.quiz} />
    </div>
  );
};

export default Quiz;
