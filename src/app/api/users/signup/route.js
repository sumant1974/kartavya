import db from "@/utils/connect";
import User from "@/models/Usermodel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


db()
const key = process.env.SKEY;


export async function POST(request){
    try {
        const reqBody = await request.json()
        if(reqBody.isadmin !== key) {
            return NextResponse.json({error: "Invalid Admin Key"}, {status: 401})
        }
        const {username, email, password} = reqBody


        //check if user already exists
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()

        //send verification email

        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
        
        


    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}