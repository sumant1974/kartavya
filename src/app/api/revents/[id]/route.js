import db from "@/utils/connect";
import Revs from "@/models/Revs";
import { NextResponse } from "next/server";


export const GET = async (req, { params: { id } }) => {
    await db();
    try {
        const post = await Revs.findById(id);
        return NextResponse.json(post, { success: true })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { success: false })
    }
}

export const PUT = async (req, { params: { id } }) => {
    await db();
    try {
        const body = await req.json();
        const post = await Revs.findById(id);
        const updatedPost = await Revs.findByIdAndUpdate(id, { $set: { ...body } }, { new: true })
        return NextResponse.json(updatedPost, { success: true })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { success: false })

    }
}


export const DELETE = async (req, { params: { id } }) => {
    await db();
    try {
        
        const post = await Revs.findById(id);
        await Revs.findByIdAndDelete(id);
        return NextResponse.json({message:"successfully deleted the post"},{ success: true })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { success: false })

    }
}