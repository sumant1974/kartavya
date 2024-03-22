import db from "@/utils/connect";
import Member from "@/models/Member";
import { NextResponse } from "next/server";


export const GET = async (req, { params: { id } }) => {
    await db();
    try {
        const mem = await Member.findById(id);
        return NextResponse.json(mem, { success: true })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { success: false })
    }
}


export const PUT = async (req, { params: { id } }) => {
    await db();
    try {
        const body = await req.json();
        const mem = await Member.findById(id);
        const updatedMem = await Member.findByIdAndUpdate(id, { $set: { ...body } }, { new: true })
        return NextResponse.json(updatedMem, { success: true })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { success: false })

    }
}


export const DELETE = async (req, { params: { id } }) => {
    await db();
    try {
        
        const mem = await Member.findById(id);
        await Member.findByIdAndDelete(id);
        return NextResponse.json({message:"successfully deleted the member"},{ success: true })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { success: false })

    }
}