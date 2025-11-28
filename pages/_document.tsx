import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A science-driven learning platform revolutionizing competitive exam preparation (NEET, UPSC, State PSC, JEE) through cognitive psychology, data analytics, and expert mentorship. The only exam prep platform that puts you in the top 5% of successful aspirants."
        />
        <meta name="keywords" content="exam preparation, NEET, UPSC, State PSC, JEE, competitive exams, cognitive learning, science-based learning, exam prep platform, learning analytics" />
        <meta name="author" content="Gestalty" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gestalty.com" />
        <meta property="og:title" content="Gestalty - Cognitive Precision Learning Platform for Competitive Exams" />
        <meta
          property="og:description"
          content="A science-driven learning platform revolutionizing competitive exam preparation through cognitive psychology, data analytics, and expert mentorship."
        />
        <meta property="og:image" content="https://gestalty.com/logo.svg" />
        <meta property="og:site_name" content="Gestalty" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gestalty - Cognitive Precision Learning Platform for Competitive Exams" />
        <meta
          name="twitter:description"
          content="A science-driven learning platform revolutionizing competitive exam preparation through cognitive psychology, data analytics, and expert mentorship."
        />
        <meta name="twitter:image" content="https://gestalty.com/logo.svg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#fbc10d" />
        <link rel="canonical" href="https://gestalty.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
