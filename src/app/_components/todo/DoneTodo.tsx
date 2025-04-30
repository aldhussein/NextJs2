'use client'
import { API_URL } from '@/app/lib/config';
import { useRouter } from 'next/navigation'
import React from 'react'

const DoneTodo =  ({todoId, isDone} : {todoId: string, isDone: Boolean}) => {
    const router = useRouter();

  const handleDone = async () => {
 
    

    try{
        const newStatus = !isDone;

        const res = await fetch(`${API_URL}/api/todo/${todoId}`, {
            method: 'PUT',
            body: JSON.stringify(newStatus)     
        })

        await res.json();

        router.refresh();

     }

     catch(e){
        console.error(e)
     }

     }
  

  return (
    <div>
        <button 
        onClick={handleDone}
        type='button'
        className='relative inline-flex items-center rounded-l-md bg-white
        px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset
        ring-gray-300 hover:bg-gray-50 focus:z-10'>
        {isDone ? "unDone" : "Done"}
        </button>
    </div>
  )
}

export default DoneTodo