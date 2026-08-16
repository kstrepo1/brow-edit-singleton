import * as React from 'react';
import { Body, Container, Head, Html, Section, Text } from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  contactNumber?: string;
  email?: string;
  message: string;
}

export function EmailTemplate({ name, contactNumber, email, message }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body>
        <Container style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <Section>
            <Text>You have received a new message from {name}.</Text>
            {contactNumber ? (
              <Text>
                <strong>Contact number:</strong> {contactNumber}
              </Text>
            ) : null}
            {email ? (
              <Text>
                <strong>Email address:</strong> {email}
              </Text>
            ) : null}
            <Section style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
              <Text style={{ fontWeight: 'bold', marginBottom: '8px' }}>Message</Text>
              <Text>{message}</Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
