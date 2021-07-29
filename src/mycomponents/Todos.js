import React from 'react'

export const Todos = (props) => {
    let mysStyle ={
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className = "container" style= {mysStyle}>
            <h3 className ="my-3">Todos List</h3>
            {props.todos.length===0? "No todos to display":
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return(<TodoItem todo={todo} key={todo.sno} onDelete = {props.onDelete}/>
                    )
            })}
            
        </div>
    )
}
