
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Here you would typically send an email using a service like Resend
    console.log('Form data received:', { name, email, company, message });

    // Replace this with your actual email sending logic
    // For now, we'll just simulate a success response
    return NextResponse.json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({ success: false, message: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
