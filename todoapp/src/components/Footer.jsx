import styles from "./footer.module.css";
export default function Footer({ completedItem, onListItem }) {
  return (
    <>
      <div className={styles.footer}>
        <span className={styles.item}>Task completed : {completedItem}</span>
        <span className={styles.item}>Total : {onListItem}</span>
      </div>
    </>
  );
}
