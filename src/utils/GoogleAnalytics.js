const initialize = function (options) {
  window._gaq = window._gaq || []
  window._gaq.push(['_setAccount', 'UA-114993218-1'])
  window._gaq.push(['_trackPageview'])

  const loadGA = function() {
    var ga = document.createElement('script')
    ga.type = 'text/javascript'
    ga.async = true
    ga.src = 'https://ssl.google-analytics.com/ga.js'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(ga, s)
  }
  loadGA()
}

const pageView = () => {
  window._gaq.push(['_trackPageview'])
}

const event = (...args) => {
  window._gaq.push(['_trackEvent', ...args])
}

export default {
  initialize,
  pageView,
  event
}