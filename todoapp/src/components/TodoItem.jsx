import styles from "./todoitem.module.css";
export default function Todoitem({ item }) {
  return (
    <>
      <div className={styles.item}>
        <div className={styles.itemName}>{item}</div>
        <span>
          <button>X</button>
        </span>
        <hr className={styles.line} />
      </div>
    </>
  );
}
