import React from "react";
import { TodoList } from "../component/TodoList";

const fetchData = async () => {
  return await fetch("http://localhost:8000/todo", {
    next: {
      revalidate: 0,
    },
  });
};

const Todo = async () => {
  let data = await fetchData();
  data = await data.json();
  console.log(data);

  return (
    <div>
      this is todo Page.
      {data.map((el) => (
        <TodoList key={el.id} ele={el} />
      ))}
    </div>
  );
};

export default Todo;
