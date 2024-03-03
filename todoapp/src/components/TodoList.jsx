import Todoitem from "./TodoItem";
import styles from "./todolist.module.css";
export default function ({ alldo, setAlldo }) {
  return (
    <>
      <div className={styles.list}>
        {alldo.map((item) => (
          <Todoitem
            key={item.name}
            item={item}
            alldo={alldo}
            setAlldo={setAlldo}
          />
        ))}
      </div>
    </>
  );
}
