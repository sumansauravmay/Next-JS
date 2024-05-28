import React from 'react'

const page = async(props) => {
    const {params}=props;
    console.log(params.todoid);

    let data=await fetch(`http://localhost:8080/todo/${params.todoid}`,{
        next:{
          revalidate:0
        }
      });
      data=await data.json();
      console.log(data);



  return (
    <div>
    <h1>ID: {data.id}</h1>
    <p>Title: {data.title}</p>
    <p>Description: {data.description}</p>
    <p>Status: {data.status}</p>
    </div>
  )
}

export default page
