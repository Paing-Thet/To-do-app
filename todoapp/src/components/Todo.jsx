import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [alldo, setAlldo] = useState([]);
  const onListItem = alldo.length;
  const completedItem = alldo.filter((todo) => todo.done).length;
  return (
    <>
      <div>
        <Form alldo={alldo} setAlldo={setAlldo} />
        {/* <TodoList alldo={alldo} setAlldo={setAlldo} /> */}
        {alldo.length > 0 && <TodoList alldo={alldo} setAlldo={setAlldo} />}
        <Footer completedItem={completedItem} onListItem={onListItem} />
      </div>
    </>
  );
}
