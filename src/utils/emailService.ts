import emailjs from 'emailjs-com';

const testSendEmail = async () => {
    const params = {
      user_name: 'Test User',
      user_email: 'test@example.com',
      message: 'This is a test message.',
    };
  
    try {
      const response = await sendEmail(params);
      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Error while sending email:', error);
    }
  };
  
  testSendEmail();

function sendEmail(params: { user_name: string; user_email: string; message: string; }) {
    throw new Error('Function not implemented.');
}
  