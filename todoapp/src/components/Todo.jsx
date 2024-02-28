import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [alldo, setAlldo] = useState([]);
  return (
    <>
      <div>
        <Form alldo={alldo} setAlldo={setAlldo} />
        <TodoList alldo={alldo} />
      </div>
    </>
  );
}
