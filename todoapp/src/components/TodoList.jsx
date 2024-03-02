import Todoitem from "./TodoItem";
import styles from "./todolist.module.css";
export default function ({ alldo }) {
  return (
    <>
      <div className={styles.list}>
        {alldo.map((item) => (
          <Todoitem key={item} item={item} />
        ))}
      </div>
    </>
  );
}
