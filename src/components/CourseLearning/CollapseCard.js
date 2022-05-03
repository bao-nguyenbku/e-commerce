import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CollapseCard.module.scss";
import Collapse from "react-collapsible-wrapper";
import LessonContent from "./LessonContent";

const CollapseCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpenCard = () => {
    console.log(props.title);
    if (props.title.includes('Quiz')) {
      navigate('/quiz');
    }
    else {
      setIsOpen(!isOpen);
    }
  }
  return (
    <div className={styles.card}>
      <button onClick={() => handleOpenCard()} className={styles.button}>
        {props.title}
      </button>

      <Collapse isOpen={isOpen} className={styles.content}>
        {props.lessons.map((item, index) => (
          <LessonContent key={index} heading={item.heading} link={item.link} />
        ))}
      </Collapse>
    </div>
  );
};

export default CollapseCard;
