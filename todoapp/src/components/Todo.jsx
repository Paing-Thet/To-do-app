import { useState } from "react";
import Todoitem from "./TodoItem";

export default function Todo() {
  function doList(e) {
    setTodo(e.target.value);
  }
  function addList(e) {
    e.preventDefault();
    setAlldo([...alldo, todo]);
    setTodo("");
  }
  const [todo, setTodo] = useState("");
  const [alldo, setAlldo] = useState([]);
  return (
    <>
      <div>
        <form action="" onSubmit={addList}>
          <input value={todo} onChange={(e) => doList(e)} type="text" />
          <button type="submit">Add</button>
        </form>
        {alldo.map((item) => (
          <Todoitem key={item} item={item} />
        ))}
      </div>
    </>
  );
}
