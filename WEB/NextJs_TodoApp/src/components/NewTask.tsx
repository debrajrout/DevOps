"use client";
import { store } from "@/store/TaskStore";
import React, { useRef, useState } from "react";
import Input from "./Input";

const NewTask = () => {
  const titleInput = useRef<HTMLInputElement>(null);
  const descInput = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<boolean>(false);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredTitle = titleInput.current!.value;
    const enteredDesc = descInput.current!.value;

    if (enteredTitle.trim().length === 0) {
      setError(true);
      return;
    }

    store.addTodo(enteredTitle, enteredDesc, "To-do");
    setError(false);
  };
  return (
    <form onSubmit={submitHandler} className="w-[40rem] my-[2rem] mx-auto">
      <Input
        inputId="title"
        labelFor="title"
        labelClass="font-bold mb-2 block"
        labelText="Title"
        ref={titleInput}
        inputClass="w-full text-lg py-2 px-4 rounded-md bg-gray-100 border-b-2 border-gray-700"
      />
      {error && (
        <p className="font-bold mb-2 block text-red-500">Title is required</p>
      )}
      <Input
        inputId="desc"
        labelFor="desc"
        labelClass="font-bold mb-2 block"
        labelText="Todo description"
        ref={descInput}
        inputClass="w-full text-lg py-2 px-4 rounded-md bg-gray-100 border-b-2 border-gray-700"
      />
      <button
        type="submit"
        className="font-inherit bg-yellow-500 border border-yellow-500 text-gray-800 py-2 px-6 rounded-md cursor-pointer hover:bg-[#ebc002] active:bg-[#ebc002]"
      >
        Add Todo
      </button>
    </form>
  );
};

export default NewTask;
