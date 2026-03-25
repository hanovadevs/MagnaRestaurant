import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real app, you would send an email or save to a CRM
    console.log("New Contact Form Submission:", body);
    
    return NextResponse.json({ 
      success: true, 
      message: "Message sent successfully. Thank you for reaching out!" 
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: "Failed to send message." 
    }, { status: 400 });
  }
}
