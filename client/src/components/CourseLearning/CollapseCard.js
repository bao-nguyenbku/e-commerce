import { useState } from "react";
import styles from "./CollapseCard.module.scss";
import Collapse from "react-collapsible-wrapper";
import LessonContent from "./LessonContent";

const CollapseCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.card}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
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
