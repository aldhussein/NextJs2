import connectToTheDatabase from "@/app/lib/db";
import TodoModel from "@/app/models/todoModel";
import { NextRequest, NextResponse } from "next/server";

interface Params {
    id: string
}

export async function PUT(req: NextRequest, {params}: {params: Params}) {

    await connectToTheDatabase();

    const isDone = await req.json();

    const updatedTodo = await TodoModel.findByIdAndUpdate(params.id, {isDone: isDone})


    return NextResponse.json(updatedTodo, {status: 201})
    
};


export async function DELETE(req: NextRequest, {params}: {params: Params}) {

    await connectToTheDatabase();


    const deletedTodo = await TodoModel.findByIdAndDelete(params.id)


    return NextResponse.json(deletedTodo, {status: 201})
    
}