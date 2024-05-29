import '../../css/main.css'
import '../../css/noscript.css'
import '../../css/fontawesome-all.min.css'
import Script from 'next/script'

export default function Head() {
  return (
    <>
      <Script src="/js/jquery.min.js" />
      <Script src="/js/browser.min.js" />
      <Script src="/js/breakpoints.min.js" />
      <Script src="/js/util.js" />
      <Script src="/js/main.js" />
    </>
  )
}
