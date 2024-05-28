'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const TodoList = (props) => {
    let {data}=props;

    const router=useRouter();
const handleClick=()=>{
fetch(`http://localhost:8080/todo/${data.id}`,{
    method:"DELETE"
}).finally(()=>router.refresh())
}


  return (
    <div>
        <hr/>
      <p>id: {data.id}</p>
      <p> title: {data.title}</p>
      <p>description:{data.description}</p>
      <p>status:{data.status}</p> 
      <button className='bg-black text-white p-2' onClick={handleClick}>Delete</button>
<Link href={`/${data.id}`}>
<button className='bg-pink-500 text-white p-2'>Details</button>
</Link>
      

      <hr/>
    </div>
  )
}

export default TodoList
