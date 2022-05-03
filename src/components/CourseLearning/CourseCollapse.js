import data from "../../api/courseExample.js";
import styles from "./CourseCollapse.module.scss";
import CollapseCard from "./CollapseCard.js";

const CourseCollapse = () => {
  // console.log(data);

  return (
    <div className={styles.container}>
      {data["chap"].map((item, index) => (
        <CollapseCard key={index} title={item.title} lessons={item.lessons} />
      ))}
      <CollapseCard key={data['chap'].length} title='Quiz chương 1 & 2' lessons={['Quiz']}/>
    </div>
  );
};

export default CourseCollapse;
