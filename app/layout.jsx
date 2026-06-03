import './globals.css'

export const metadata = {
  title: 'Yamini Savalia | Cybersecurity Analyst',
  description: 'SOC Analyst, Malware Analyst & Incident Responder with 4+ years of experience. CompTIA Security+ certified.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-primary font-sans antialiased">{children}</body>
    </html>
  )
}
