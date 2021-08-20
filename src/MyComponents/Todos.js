import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Your's Todos List</h3>
            <hr/>
            {props.todos.length === 0 ? "No Todos to display":
            props.todos.map((todo)=> {
                // here in this return we learn how send extra data or tags : for that we have to use the <></> , between this tag we can create our tags and other code.
                /*return (<>
                    <h3>this is</h3>
                    <TodoItem todo={todo}/></>)*/
                return ( <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
            })}
        </div>
    )
}
