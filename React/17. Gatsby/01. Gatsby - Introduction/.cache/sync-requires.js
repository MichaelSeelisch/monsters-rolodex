// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("/Applications/MAMP/htdocs/Private/Web-Projects/React/18. Gatsby Introduction/.cache/dev-404-page.js")),
  "page-component---src-pages-my-second-gatsby-page-js": preferDefault(require("/Applications/MAMP/htdocs/Private/Web-Projects/React/18. Gatsby Introduction/src/pages/my-second-gatsby-page.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Applications/MAMP/htdocs/Private/Web-Projects/React/18. Gatsby Introduction/src/pages/index.js")),
  "page-component---src-pages-counter-js": preferDefault(require("/Applications/MAMP/htdocs/Private/Web-Projects/React/18. Gatsby Introduction/src/pages/counter.js"))
}

exports.json = {
  "dev-404-page.json": require("/Applications/MAMP/htdocs/Private/Web-Projects/React/18. Gatsby Introduction/.cache/json/dev-404-page.json"),
  "my-second-gatsby-page.json": require("/Applications/MAMP/htdocs/Private/Web-Projects/React/18. Gatsby Introduction/.cache/json/my-second-gatsby-page.json"),
  "index.json": require("/Applications/MAMP/htdocs/Private/Web-Projects/React/18. Gatsby Introduction/.cache/json/index.json"),
  "counter.json": require("/Applications/MAMP/htdocs/Private/Web-Projects/React/18. Gatsby Introduction/.cache/json/counter.json")
}

exports.layouts = {

}