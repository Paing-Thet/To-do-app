import Todoitem from "./TodoItem";
export default function ({ alldo }) {
  return (
    <>
      {alldo.map((item) => (
        <Todoitem key={item} item={item} />
      ))}
    </>
  );
}
