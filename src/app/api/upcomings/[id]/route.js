import db from "@/utils/connect";
import Upcoming from "@/models/Upcoming";
import { NextResponse } from "next/server";


export const GET = async (req, { params: { id } }) => {
    await db();
    try {
        const post = await Upcoming.findById(id);
        return NextResponse.json(post, { success: true })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { success: false })
    }
}

export const PUT = async (req, { params: { id } }) => {
    await db();
    try {
        const body = await req.json();
        const post = await Upcoming.findById(id);
        const updatedPost = await Upcoming.findByIdAndUpdate(id, { $set: { ...body } }, { new: true })
        return NextResponse.json(updatedPost, { success: true })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { success: false })

    }
}


export const DELETE = async (req, { params: { id } }) => {
    await db();
    try {
        
        const post = await Upcoming.findById(id);
        await Upcoming.findByIdAndDelete(id);
        return NextResponse.json({message:"successfully deleted the post"},{ success: true })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { success: false })

    }
}