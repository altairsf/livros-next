import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { ReactNode } from 'react';

export default function RootLayout ({
  children,
}: {
  children : React.ReactNode;
  }) {
    return (
        <html lang ="pt">
          <body>
          {children}
          </body>
        </html>
    );
};


