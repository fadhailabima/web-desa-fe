import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link rel = "stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"/>
      <Head />
      <body className="font-poppins">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
