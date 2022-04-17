import React from "react";

function Todo(params: any) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={params.id}
          type="checkbox"
          defaultChecked={params.completed}
        />
        <label className="todo-label" htmlFor={params.id}>
          {params.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{params.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{params.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;
