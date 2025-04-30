import connectToTheDatabase from "@/app/lib/db";
import TodoModel from "@/app/models/todoModel";
import { NextRequest, NextResponse } from "next/server";
import { title } from "process";

export async function GET(req:NextRequest) {
    
 await connectToTheDatabase();

const todos = await TodoModel.find().sort({createdAt : "desc", isDone:"asc"})

return NextResponse.json(todos, {status: 200})

}



export async function POST(req: NextRequest) {

    await connectToTheDatabase();

    const body = await req.json();

    const newTodo = new TodoModel({
        title : body.title,
        isDone: body.isDone
    });


    newTodo.save();

    return NextResponse.json(newTodo, {status: 201})
    
}