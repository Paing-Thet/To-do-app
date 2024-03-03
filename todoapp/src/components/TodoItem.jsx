import styles from "./todoitem.module.css";
export default function Todoitem({ item, alldo, setAlldo }) {
  function handleDelete(item) {
    alert("Item Deleted" + " " + item);
    setAlldo(alldo.filter((todo) => todo !== item));
  }
  return (
    <>
      <div className={styles.item}>
        <div className={styles.itemName}>
          {item}{" "}
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
