import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="A science-driven learning platform revolutionizing competitive exam preparation (NEET, UPSC, State PSC, JEE) through cognitive psychology, data analytics, and expert mentorship. The only exam prep platform that puts you in the top 5% of successful aspirants."
        />
        <meta name="keywords" content="exam preparation, NEET, UPSC, State PSC, JEE, competitive exams, cognitive learning, science-based learning, exam prep platform, learning analytics" />
        <meta name="author" content="Gestalty" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gestalty - Cognitive Precision Learning Platform for Competitive Exams" />
        <meta
          property="og:description"
          content="A science-driven learning platform revolutionizing competitive exam preparation through cognitive psychology, data analytics, and expert mentorship."
        />
        <meta property="og:site_name" content="Gestalty" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gestalty - Cognitive Precision Learning Platform for Competitive Exams" />
        <meta
          name="twitter:description"
          content="A science-driven learning platform revolutionizing competitive exam preparation through cognitive psychology, data analytics, and expert mentorship."
        />
        
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
