import { NextResponse } from "next/server"

export function GET(req, res){
    return NextResponse.json({"message":"This is the base route!"});
}

export function POST(req, res){
    let data=req.body;
    return NextResponse.json({"message":"This is the base route!"});
}

