import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../css/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Kieran Vieira is a Senior Software Engineer looking to innovate user experience using languages such as Typescript, Go, C#, and many frameworks/libraries. More information leads beyond this link."/>
        <meta property="og:title" content="Kieran Vieira | Senior Software Engineer"/>
        <meta property="og:image" content="http://kieranvieira.com/img/ogimg.png"/>
        <meta property="og:site_name" content="kieranvieira.com"/>
        <meta property="og:url" content="https://kieranvieira.com"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Kieran Vieira is a Senior Software Engineer looking to innovate user experience using languages such as Typescript, Go, C#, and many frameworks/libraries. More information leads beyond this link."/>
        <meta name="keywords" content="HTML,CSS,JavaScript,Web Developer,Developer,Front end, Back end, Graphic Design, Website, website builder,responsive web design,web page design,build a website, design website, web design inspiration,webdesign"/>
        <meta name="author" content="Kieran Vieira"/>
        <title>Kieran Vieira | Senior Software Engineer</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
