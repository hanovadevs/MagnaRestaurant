import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real app, you would save this to a database
    console.log("New Reservation Request:", body);
    
    return NextResponse.json({ 
      success: true, 
      message: "Reservation request received successfully. We will contact you soon." 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: "Invalid request data." 
    }, { status: 400 });
  }
}
