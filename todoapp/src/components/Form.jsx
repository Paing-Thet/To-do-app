import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ alldo, setAlldo }) {
  function doList(e) {
    setTodo(e);
  }
  function addList(e) {
    e.preventDefault();
    setAlldo([...alldo, todo]);
    setTodo({ name: "", done: false });
  }
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  return (
    <>
      <form className={styles.todoform} action="" onSubmit={addList}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            value={todo.name}
            onChange={(e) => doList({ name: e.target.value, done: false })}
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
