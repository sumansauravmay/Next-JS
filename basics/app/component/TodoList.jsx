import React from 'react'

export const TodoList = (props) => {
    const {ele}=props;
  return (
    <div>
      Title:{ele.title}
      <br/>
      Description: {ele.description}
      <br/>
      Status:{ele.status}
    </div>
  )
}


