// import React, { useState, useRef, useEffect } from 'react'
import React, { useState, useEffect } from "react";
// import uuidv4 from "uuid/v4";

import * as $$ from "./shortJS.js";

import TodoList from "./TodoList";

const { v4: uuidv4 } = require("uuid");

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  // const todoNameRef = useRef()
  const [name, setName] = useState("");
  // <input ref={todoNameRef} />  todoNameRef.current.value
  // React.createRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(newTodos);
  }

  // function toggleTodo(id) {
  // 	const newTodos = [...todos]
  // 	const todo = newTodos.find((todo) => todo.id === id)
  // 	todo.complete = !todo.complete
  // 	setTodos(newTodos)
  // }

  function handleAddTodo(e) {
    // const name = todoNameRef.current.value
    if (name === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    // todoNameRef.current.value = null
    setName("");
    $$.Id("complete").focus();
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <section className="section">
      <div className="container outer" style={{ width: "500px" }}>
        <h1 className="title notification">Todo リスト</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <div className="field has-addons my-4">
          <div className="control is-expanded">
            <input
              type="text"
              className="input"
              id="complete"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Todo"
            />
          </div>
          <div className="control">
            <button
              type="button"
              className="button is-primary"
              onClick={handleAddTodo}
            >
              Todo追加
            </button>
          </div>
        </div>

        <div>
          　未完了の数:　{todos.filter((todo) => !todo.complete).length} 件
        </div>
        <div>
          　完了の件数:　{todos.filter((todo) => todo.complete).length} 件
        </div>

        <button
          className="button btn-block mt-5 is-danger"
          onClick={handleClearTodos}
        >
          完了Todo の削除
        </button>
      </div>
    </section>
  );
}

export default App;
