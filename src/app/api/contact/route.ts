import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real production environment, you would use a service like Resend, 
    // SendGrid, or Nodemailer here to actually send the email.
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'leads@brakechambers.com',
    //   to: 'sales@brakechambers.com',
    //   subject: `New Lead: ${data.source || 'Website Form'}`,
    //   html: `<p>New submission from ${data.source}:</p><pre>${JSON.stringify(data, null, 2)}</pre>`
    // });

    console.log('--- NEW LEAD RECEIVED ---');
    console.log('To: sales@brakechambers.com');
    console.log('Data:', data);
    console.log('-------------------------');

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Lead submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}
