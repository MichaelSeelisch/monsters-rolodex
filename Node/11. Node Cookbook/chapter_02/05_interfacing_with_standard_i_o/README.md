Run:

$ echo -e "hi\nthere" | node base64.js

Or filter out logs to standard error:

$ echo -e "hi\nthere" | node base64.js 2> /dev/null
