import './globals.css';

export const metadata = {
  title: 'AlHafiz Surgical Hospital — 24/7 Trusted Healthcare in Lahore',
  description:
    'AlHafiz Surgical Hospital offers round-the-clock surgical, gynaecology, urology, and emergency care in Lahore. Experienced PMDC-verified doctors, modern diagnostics, and compassionate staff.',
  keywords:
    'AlHafiz Surgical Hospital, hospital Lahore, general surgery Lahore, gynecologist Lahore, urologist Lahore, 24 hour hospital',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/regular/style.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
