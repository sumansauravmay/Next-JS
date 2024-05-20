import React from 'react'

const page = async(props) => {
    const {params}=props;
    console.log({params});

let data= await fetch('https://fakestoreapi.com/products');
data= await data.json();


  return (
    <div>
      Admin Page {params.userID}
      {data.map((el)=>(
        <div>{el.title}</div>
      ))}
    </div>
  )
}

export default page
