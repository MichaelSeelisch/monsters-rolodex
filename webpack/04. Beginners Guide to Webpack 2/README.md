Webpack loader:
The array of loaders are processed in reverse order:

-sass-loader transforms Sass into CSS.
-css-loader parses the CSS into JavaScript and resolves any dependencies.
-style-loader outputs our CSS into a <style> tag in the document.
-You can think of these as function calls, the output of one loader feeds as input into the next.

=> styleLoader(cssLoader(sassLoader('source')))