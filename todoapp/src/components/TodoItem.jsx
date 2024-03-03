import styles from "./todoitem.module.css";
export default function Todoitem({ item, alldo, setAlldo }) {
  function handleDelete(item) {
    alert("Item Deleted" + " " + item.name);
    setAlldo(alldo.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const NewArray = alldo.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setAlldo(NewArray);
  }
  const status = item.done ? styles.completed : "";
  return (
    <>
      <div className={styles.item}>
        <div className={styles.itemName}>
          <input type="checkbox" onClick={() => handleClick(item.name)}></input>
          <span className={status}>{item.name}</span>

          <span>
            <button
              onClick={() => handleDelete(item)}
              className={styles.deleteButton}
            >
              X
            </button>
          </span>
        </div>

        <hr className={styles.line} />
      </div>
    </>
  );
}
