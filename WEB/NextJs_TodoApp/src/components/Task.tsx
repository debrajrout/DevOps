"use client";
import { store } from "@/store/TaskStore";
import { observer } from "mobx-react-lite";
import React, { Fragment, useEffect, useState } from "react";
import TaskList from "./TaskList";
import Modal from "./Modal";

const Task = observer(() => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);
  const [todos, setTodos] = useState(store.todos);

  useEffect(() => {
    const updateTodos = () => {
      setTodos(store.todos);
    };

    store.loaadTodos();
  }, []);

  const showModalHandler = (id: string) => {
    setSelectedTodoId(id);
    setShowModal((prevState) => !prevState);
  };

  const closeModalHandler = () => {
    setSelectedTodoId(null);
    setShowModal(false);
  };

  const handleToggle = (id: string, newStatus: string) => {
    store.toggleStatus(id, newStatus);
  };

  const todoRemoveHandler = (id: string) => {
    store.removeTodoById(id);
  };

  const todoEditHandler = (id: string, title: string, desc: string) => {
    store.editTodoById(id, title, desc);
    closeModalHandler();
  };

  return (
    <Fragment>
      {showModal && (
        <div
          className="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 flex items-center justify-center"
          onClick={closeModalHandler}
        >
          <Modal todoId={selectedTodoId} getEditDetails={todoEditHandler} />
        </div>
      )}
      <ul className="list-none my-[2rem] mx-auto p-0 w-[40rem]">
        {todos.map((todo, i) => (
          <TaskList
            key={i}
            changeStatus={(newStatus) => handleToggle(todo.id, newStatus)}
            title={todo.title}
            desc={todo.desc}
            status={todo.status}
            removeTodo={() => todoRemoveHandler(todo.id)}
            showModal={() => showModalHandler(todo.id)}
          />
        ))}
      </ul>
    </Fragment>
  );
});

export default Task;
