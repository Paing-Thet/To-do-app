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
        <input value={todo} onChange={(e) => doList(e)} type="text" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
