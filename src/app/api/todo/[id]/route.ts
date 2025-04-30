import { NextRequest, NextResponse } from "next/server";
import type { NextRequest as AppNextRequest } from "next/server"; // optional clarity
import connectToTheDatabase from "@/app/lib/db";
import TodoModel from "@/app/models/todoModel";

// Type for context from Next.js App Router
type RouteContext = {
  params: {
    id: string;
  };
};

export async function PUT(req: NextRequest, context: RouteContext) {
  await connectToTheDatabase();

  const isDone = await req.json();

  const updatedTodo = await TodoModel.findByIdAndUpdate(context.params.id, { isDone });

  return NextResponse.json(updatedTodo, { status: 201 });
}

export async function DELETE(req: NextRequest, context: RouteContext) {
  await connectToTheDatabase();

  const deletedTodo = await TodoModel.findByIdAndDelete(context.params.id);

  return NextResponse.json(deletedTodo, { status: 201 });
}
