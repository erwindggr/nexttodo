'use client'
import { useState, ChangeEvent  } from "react"

export default function Sidebar() {
    const [todo, setTodo] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }

    const handleTodo = () => {
        console.log("todo added:", todo);
        setTodo("")
    }

    return (
        <div className="h-full w-full flex">
            <div className="m-auto flex flex-col text-black">
                <input
                    type="text" placeholder="what to do"
                    value={todo} onChange={handleChange}
                />
                <button onClick={handleTodo} className="text-white mt-10">Add</button>
            </div>
        </div>
    )
}