'use client';
import { API_URL } from '@/app/lib/config';
import { useRouter } from 'next/navigation';
import React from 'react'

const DeleteTodo = ({todoId} : {todoId : string}) => {
    const router = useRouter();
 
    const handleDelete = async () => {

        try{
    
            const res = await  fetch(`${API_URL}/api/todo/${todoId}`, {
                method: 'DELETE',
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
        <div>
        <button 
        onClick={handleDelete}
        type='button'
        className='relative inline-flex items-center rounded-l-md bg-white
        px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset
        ring-gray-300 hover:bg-gray-50 focus:z-10'>
        Delete
        </button>
    </div>
    </div>
  )
}

export default DeleteTodo




// echo "# NextJs2" >> README.md
// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/aldhussein/NextJs2.git
// git push -u origin main