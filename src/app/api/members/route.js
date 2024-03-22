import db from "@/utils/connect";
import Member from "@/models/Member";
import { NextResponse } from "next/server";


export const GET = async() =>{
    await db();
    try {
        const events = await Member.find()
        return NextResponse.json(events,{success : true})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong"},{success:false})
    }
}

export async function POST(req, res) {
    await db();
    try {

        const body = await req.json();

        const nv = await Member.create(body);

        return NextResponse.json(nv,{
            message:"Member added successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}