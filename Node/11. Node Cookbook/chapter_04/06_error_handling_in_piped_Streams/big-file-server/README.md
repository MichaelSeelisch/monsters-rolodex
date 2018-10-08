Run our server:

$ node index.js

If we use curl and hit Ctrl + C before finishing the download, we should be able to trigger the error state, with the server logging that the file was not fully streamed to the user:


$ curl http://localhost:8080 # hit Ctrl + C before finish
