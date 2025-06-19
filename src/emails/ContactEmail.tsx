import { Html } from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const ContactEmail = ({ name, email, phone, message }: ContactEmailProps) => (
  <Html>
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Phone:</strong> {phone || 'N/A'}</p>
    <p><strong>Message:</strong><br />{message}</p>
  </Html>
);
