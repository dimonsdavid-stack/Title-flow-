
export const metadata = {
  title: "TitleFlow",
  description: "Modern title & registration workflows."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        background: '#0b1020',
        color: '#ffffff'
      }}>
        {children}
      </body>
    </html>
  )
}
