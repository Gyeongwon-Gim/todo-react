// TODO:나머지 요소 컴포넌트 만들기
import React, { useState } from "react";

export default function Form(props) {  
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }  

  function handleChange(e) {
    setName(e.target.value);
  }
  
  return(
      <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
          placeholder="What needs to be done?"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    );
}

