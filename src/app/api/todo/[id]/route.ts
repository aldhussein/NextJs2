import connectToTheDatabase from "@/app/lib/db";
import TodoModel from "@/app/models/todoModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
    await connectToTheDatabase();
    const isDone = await req.json();

    const updatedTodo = await TodoModel.findByIdAndUpdate(context.params.id, { isDone });

    return NextResponse.json(updatedTodo, { status: 201 });
}

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
    await connectToTheDatabase();

    const deletedTodo = await TodoModel.findByIdAndDelete(context.params.id);

    return NextResponse.json(deletedTodo, { status: 201 });
}
