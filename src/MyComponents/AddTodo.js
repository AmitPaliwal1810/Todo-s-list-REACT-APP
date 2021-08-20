import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault(); // this function helps us to not reload the form.
        if(!title || !desc){
            alert("Title and Decription can't be blank");
        }else{
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");}
    }
  return (
    <div>
        <div className="container">
            <h3 className="my-4">Add a TODO</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlfor="exampleInputEmail1">Title</label>
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlfor="exampleInputPassword1">Description</label>
          <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-success">Add Todo</button>
      </form>
      </div>
    </div>
  );
};
