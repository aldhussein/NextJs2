import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Todo from './Todo'
import { API_URL } from '@/app/lib/config'

 export interface TodoItem {
    _id: string,
    title: string,
    isDone: boolean
  }

const Todos = async () => {
    const res = await fetch(`${API_URL}/api/todo`, {
     cache: "no-cache"
    })

  const todosList : TodoItem[] =  await res.json();
 
  return (
    <div className='w-full'>
        <Card>
  <CardHeader>
    <CardTitle>Todo</CardTitle>
    <CardDescription>Become Productive</CardDescription>
  </CardHeader>
  <CardContent>
   <ul role='list' className='divide-y divide-gray-200'>
    {todosList.map((todo) => (
        <Todo todo={todo} key={todo._id}/>
    ))}
   </ul>
  </CardContent>
</Card>
    </div>
  )
}

export default Todos