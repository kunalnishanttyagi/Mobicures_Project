import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  brand: string;
  deviceType: string;
  fault: string;
  city: string;
}

export function EmailTemplate({ name,email,phone,brand,deviceType,fault,city }: EmailTemplateProps) {
  return (
    <div>
      <h1>Hello, {name} as {email} and {phone} from {city} made a request for {deviceType} in their {fault} of{brand} !</h1>
    </div>
  );
}