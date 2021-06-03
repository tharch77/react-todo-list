import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
		<div>
			<div className="field mb-2">
				<input
					className="is-checkradio is-danger"
					id={todo.id}
					type="checkbox"
					checked={todo.complete}
					onChange={handleTodoClick}
				/>
				<label htmlFor={todo.id} className="is-size-5">
					{todo.name}
				</label>
			</div>
		</div>
	)
}
