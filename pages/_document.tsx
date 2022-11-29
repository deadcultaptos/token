import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Alexandria&family=Noto+Sans:wght@300;600&family=Permanent+Marker&display=swap" rel="stylesheet" />


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}