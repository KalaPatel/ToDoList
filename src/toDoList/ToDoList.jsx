import "./index.css";
import ToDoCard from "../toDoCard";

const ToDoList = ({ newToDoMock, setNewTodoMock }) => {
  return (
    <div className="todo_wrapper">
      {newToDoMock
        .sort((item1, item2) => (item1.id >= item2.id ? -1 : 1))
        .map((todo) => (
          <ToDoCard
            key={todo.id}
            todoData={todo}
            setNewTodoMock={setNewTodoMock}
          />
        ))}
    </div>
  );
};

export default ToDoList;
