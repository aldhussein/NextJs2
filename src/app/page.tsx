import Image from "next/image";
import TodoForm from "./_components/todo/TodoForm";
import Todos from "./_components/todo/Todos";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col max-w-lg mx-auto mt-32">
     {/* todo form */}
     <TodoForm/>

     <Todos/>
    </div>
  );
}
