import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>AXON - Your Revenue Solution</title>
            <meta name="description" content="Never miss your revenue quota using all world's largest LLMs." />
            <meta name="keywords" content="keyword1, keyword2, keyword3" />
            <meta name="author" content="Your Name or Company" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="msapplication-config" content="/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Russo+One&display=swap" rel="stylesheet" />
        </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  );
};

export default Document;
