import Post from "@/models/posts";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";
export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};
export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    await Post.deleteOne({ slug });
  } catch (error) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};
