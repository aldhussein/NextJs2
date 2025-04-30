'use client';
import { API_URL } from '@/app/lib/config';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation';
import React from 'react'

const TodoForm = () => {
  const router = useRouter();

     const handleSubmit = async ( event : React.FormEvent) => {

     event.preventDefault();

     const form = event.target as HTMLFormElement;

     const formData = new FormData(form);

     const data = {
        title: formData.get("title")
     }


     try{

        const res = await fetch(`${API_URL}/api/todo`, {
            method: 'POST',
            body: JSON.stringify(data)

            
        })

        await res.json();

        router.refresh();
        form.reset()

     }

     catch(e){
        console.error(e)
     }

     }

  return (

          <form className='w-full mb-22'
          onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Title</Label>
              <Input id="title" name='title' placeholder="title of your project" />
            </div>
          </div>
        </form>
    
  )
}

export default TodoForm
