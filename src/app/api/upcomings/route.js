import db from "@/utils/connect";
import Upcoming from "@/models/Upcoming";
import { NextResponse } from "next/server";

export const GET = async() =>{
    await db();
    try {
        const events = await Upcoming.find()
        return NextResponse.json(events,{success : true})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong"},{success:false})
    }
}

export async function POST(req, res) {
    await db();
    try {

        const body = await req.json();

        const nv = await Upcoming.create(body);

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