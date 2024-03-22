import db from "@/utils/connect";
import Revs from "@/models/Revs";
import { NextResponse } from "next/server";

export const GET = async() =>{
    await db();
    try {
        const events = await Revs.find()
        return NextResponse.json(events,{success : true})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong"},{success:false})
    }
}

export async function POST(req, res) {
    await db();
    try {

        const body = await req.json();

        const nv = await Revs.create(body);

        return NextResponse.json(nv,{
            message:"Message sent successfully!"
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