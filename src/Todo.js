import React, { useState, useRef, useEffect } from "react";
const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, item: "watch" },
    { id: 2, item: "coffee" },
  ]);
  const [update, setupdate] = useState(1);
  const [edit, setedit] = useState([]);
  const [id, setid] = useState(0);
  const todoRef = useRef();
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id,data) => {
    todoRef.current.value=data.item;
    console.log(id);
    setupdate(0);
    setid(id);
  };
  const update1 = (e) => {
    e.preventDefault();

    const item = todoRef.current.value;
    for (let i = 0; i < todos.length; i++) {
      if (id === todos[i].id) {
        todos[i].item = item;
      }
    }
    setTodos([...todos]);
    console.log(todos);
  };

  const addTodo = (data) => {
    let id = todos.length + 1;
    setTodos([
      ...todos,
      {
        id,
        item: data,
      },
    ]);
  };
  const handleNewTodo = (e) => {
    e.preventDefault();
    const item = todoRef.current;
    addTodo(item.value);
    item.value = "";
  };
  return (
    <table style={{height:"500px", width:"550px", marginLeft:'500px',marginTop:"30px"}}>
    <div className="container">
     
      <div>
        <div>
          <h2 className="text-center"></h2>
        </div>
      </div>
      <br />
      <br />
      {update ? (
        <form>
          <div className="container">
            <h3>ADD DATA</h3>
            <br />
            <div>
              <input
                type="text"
                autoFocus
                ref={todoRef}
                placeholder="Enter a task"
                className="form-control"
                data-testid="input"
                id="input1"
               
              />
            </div>
          </div>
          <br />
          <div className="container">
            <div>
              <button
                type="submit"
                onClick={handleNewTodo}
                className="btn btn-secondary"
              >
                Add Task
              </button>
            </div>
          </div>
          <br />
        </form>
      ) : (
        <form>
          <div className="container">
            <h3>EDIT DATA</h3>
            <div>
              <input
                type="text"
                autoFocus
                ref={todoRef}
                placeholder="Enter a task"
                className="form-control"
                data-testid="input"
                id="input1"
              />
            </div>
          </div>
          <div className="container">
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
              style={{fontFamily:"sans-serif"}}
                type="submit"
                onClick={update1}
                className="btn btn-secondary" 
                
              >
                Edit Task
              </button>
            </div>
          </div>
        </form>
      )}
      <div className="container">
        {/* <table className="table ">
          <tr className="bg bg-info">
            <th className="col-2">Sr. No </th>
            <th className="col-4">Task Name</th>
            <th className="col-4">Priority</th>
            <th colspan="2">Actions</th>
          </tr>
        </table> */}

        <h3>Lists</h3>
        <br />
        {!todos.length ? (
          <div className="no-task">No task!</div>
        ) : (
          <ul data-testid="todos" >
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <div>
                    <span>{todo.item}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      style={{fontFamily:"sans-serif",color:"white",fontSize:"17px"}}
                      className="btn btn-secondary"
                      data-testid="delete-button"
                      onClick={() => removeTodo(todo.id)}
                    >
                      DELETE
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      style={{fontFamily:"sans-serif",color:"white",fontSize:"17px"}}
                      className="btn btn-secondary update"
                      data-testid="update-button"
                      onClick={() => updateTodo(todo.id,todo)}
                    >
                      UPDATE
                    </button>
                  </div>&nbsp;
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {/* </table> */}
    </div>
    </table>
  );
};
export default Todo;
