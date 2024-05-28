import Image from "next/image";
import TodoList from "./components/TodoList";

export default async function Home() {
  let data=await fetch('http://localhost:8080/todo',{
    next:{
      revalidate:0
    }
  });
  data=await data.json();
  console.log(data);

  return (
    <main className="">
       <p className='font-bold text-center'>All Todo Items</p>
    {
      data.map((el)=>(
        <TodoList key={el.id} data={el}/>
      ))
    }
    </main>
  );
}
