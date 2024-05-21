import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-TXQF8P3689"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-TXQF8P3689');
      </script>
      <meta
        name="google-site-verification"
        content="ndhfC9wbv0XJ1lR-lkEiWgAS50bjfCpDhhu5RRrXXkI"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
