import NewTask from "@/components/NewTask";
import Task from "@/components/Task";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Todo App",
};

export default function Home() {
  return (
    <div className="relative">
      <NewTask />
      <Task />
    </div>
  );
}
