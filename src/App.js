import './App.css';
//here in the import line in header we dont use {} bracket but inother import we use so the reason is in the todo function we define it const not default
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {About} from './MyComponents/About'
import { AddTodo } from './MyComponents/AddTodo';
import React, { useState , useEffect } from 'react';
// importing for react router dom 
// for it you should install it 
// commmand -  npm install react-router-dom

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos")=== null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
// here we create a onDelete method
  const onDelete = (todo) =>{
    console.log("I am ondelete of todo", todo);
    /* the way of delete in react will not work
    let index = todos.indexOf(todo);
    todos.splice(index,1);*/
    setTodos(todos.filter((e)=>{
      return e!== todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title , desc)=>{
    console.log("this is title and desc : ", title , desc);
    let sno ;
    if(todos.length=== 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno+ 1;
    }

    
    const myTodo={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]); // ye main samjha
    console.log(myTodo);
  }


// here we created some values for check 
const [todos, setTodos] = useState(initTodo);
   /* {
      sno: 1,
      title: "Go to market",
      desc: "You need to buy some new books"
    },
    {
      sno: 2,
      title: "Go to school",
      desc: "You need to study harder"
    },
    {
      sno: 3,
      title: "do your work",
      desc: "You need to buy some new books"
    } ,
    {
      sno: 4,
      title: "do your work with in the time",
      desc: "study more more as you can"
    } // this todolist will pass in Todos tag*/
    // now this is just like a empty array.
    useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos])
 

  return (
    <>
    {/* 1st component header
    2nd todo list
    3rd footer
    as we define any thing before this is return function we always call it inside this return function's tag
     */}
      <Router>
        <Header title = "Todo-list" searchBar={false}/>

        <Switch>
          <Route exact path="/" render={()=>{
            return( 
            <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/> 
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        
        <Footer/>
      </Router>
    </>
  );
}

export default App;
