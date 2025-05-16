import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../../config/site.config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="OneDrive FTP Index" />
          <meta property="og:image" content="https://github.com/MrShadowRIFAT/cloudflare-onedrive-index/blob/main/public/images/Meta%20Image%20Banner.png" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          {siteConfig.googleFontLinks.map(link => (
            <link key={link} rel="stylesheet" href={link} />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6977117001356450"
     crossorigin="anonymous"></script>
<!-- Horizontal Display Ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-6977117001356450"
     data-ad-slot="5837595083"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
