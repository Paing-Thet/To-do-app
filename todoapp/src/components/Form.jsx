import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ alldo, setAlldo }) {
  function doList(e) {
    setTodo(e.target.value);
  }
  function addList(e) {
    e.preventDefault();
    setAlldo([...alldo, todo]);
    setTodo("");
  }
  const [todo, setTodo] = useState("");

  return (
    <>
      <form className={styles.todoform} action="" onSubmit={addList}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            value={todo}
            onChange={(e) => doList(e)}
            type="text"
            placeholder="Enter to do item ..."
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
