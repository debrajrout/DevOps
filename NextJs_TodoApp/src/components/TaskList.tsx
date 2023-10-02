"use client";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IconContext } from "react-icons";
import { observer } from "mobx-react-lite";

const TaskList: React.FC<{
  title: string;
  desc: string;
  status: string;
  changeStatus: (status: string) => void;
  removeTodo: () => void;
  showModal: () => void;
}> = observer(
  ({ title, desc, status, changeStatus, removeTodo, showModal }) => {
    const [selectedValue, setSelectedValue] = useState<string>(status);

    const handleSelectChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setSelectedValue(event.target.value);
      changeStatus(event.target.value);
    };
    return (
      <li
        className={`my-[1rem] mx-0  shadow-[0_1px_4px_rgba(0,0,0,0.2)] p-[1rem] ${
          status === "To-Do"
            ? "bg-[#f5e5e3]"
            : status === "In-Progress"
            ? "bg-[#f5f1e5]"
            : "bg-[#e6f1db]"
        } relative`}
      >
        <h2 className="font-bold text-[20px]">{title}</h2>
        <p>{desc}</p>
        <p>{status}</p>
        <div>
          <select value={selectedValue} onChange={handleSelectChange}>
            <option value="">Select an option</option>
            <option value="To-Do">To-Do</option>
            <option value="In-Progress">In-Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <button
          onClick={showModal}
          className="mx-auto block font-inherit bg-[#ebb002] border-[#ebb002] text-[#201d0f] px-2 py-1 rounded-md cursor-pointer"
        >
          Edit
        </button>
        <button
          className="absolute right-2 inset-y-1/4 text-[30px]"
          onClick={removeTodo}
        >
          <IconContext.Provider value={{ color: "red" }}>
            <div>
              <MdDelete />
            </div>
          </IconContext.Provider>
        </button>
      </li>
    );
  }
);

export default TaskList;
