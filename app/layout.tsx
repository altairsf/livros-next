import 'bootstrap/dist/css/bootstrap.css';
// import '../styles/globals.css';
import '../styles/Home.module.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metaData: Metadata =  {
  title :"Loja Next",
  viewport: "width=device-width, initial-scale=1",
};

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
