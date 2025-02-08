import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import { Metadata } from 'next';

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