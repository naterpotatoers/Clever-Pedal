import React from "react";

function Todo(params: any) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <p className="todo-label">
          {params.date}: {params.longitude}, {params.latitude}
        </p>
      </div>
    </li>
  );
}

export default Todo;
