import "./globals.css";

export const metadata = {
  title: "TitleFlow | Modern title & registration workflows",
  description:
    "Modern title and registration workflow management for dealers, registration shops, fleets, and title processors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
