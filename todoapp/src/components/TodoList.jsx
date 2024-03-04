import Todoitem from "./TodoItem";
import styles from "./todolist.module.css";
export default function ({ alldo, setAlldo }) {
  const sortedAlldo = alldo
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <>
      <div className={styles.list}>
        {sortedAlldo.map((item) => (
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
