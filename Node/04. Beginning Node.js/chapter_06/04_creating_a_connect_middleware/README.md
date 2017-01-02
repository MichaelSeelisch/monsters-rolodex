/*
  01_basic_middleware
  02_simple_middleware
*/
Run:
$ node *.js

/*
  03_echo_client_request
  05_object_as_middleware
*/
Run:
$ node *.js
$ curl http://127.0.0.1:3000/ -d 'Hello World!'

/*
  04_mounting_middleware_by_path_prefix
*/
Run:
$ curl http://127.0.0.1:3000/echo -d 'Hello World!'
Hello World!

$ curl http://127.0.0.1:3000/ -d 'Hello World!'
Wassup!

/*
  06_creating_configurable_middleware
*/
Run:
$ curl http://127.0.0.1:3000/hello
Hello World!

$ curl http://127.0.0.1:3000/hey
Hey There!

/*
  07_chaining_sharing_request_response_information
*/
Run:
$ curl http://127.0.0.1:3000/ -H "content-type: application/json" -d "{\"foo\":123}"
JSON parsed!, value of foo: 123

$ curl http://127.0.0.1:3000/ -H "content-type: application/json" -d "{\"foo\":123,}"
no JSON detected!

/*
  08_basic_access_authorization
*/
Run:
$ node 08_basic_access_authorization.js

 - Open http://localhost:3000/ in Browser
 - Native Prompt for Username and Password is shown

/*
  09_authenticate_areas
*/
Run:
$ node 09_authenticate_areas.js

 - Open http://localhost:3000/ in Browser will redirect to 'Public' Page
 - Open http://localhost:3000/admin in Browser will prompt a native Login-Form

/*
  10_simple_middleware_error
*/
Run:
$ node 10_simple_middleware_error.js

$ curl http://127.0.0.1:3000/
An error has occured!

/*
  11_handle_middleware_errors
*/
Run:
$ node 11_handle_middleware_errors.js

$ curl http://127.0.0.1:3000/
Unable to process the request
--> Look at detailed error message in server terminal window

/*
  12_simple_https_server
  13_simple_connect_https_server
*/
Run:
$ node 12_simple_https_server.js

// The -k argument allows insecure (insekure)/unverified certificates to work, since we created our certificate ourselves.
$ curl https://localhost:3000 -k
Hello Client!

/*
  14_http_and_https_server_together
*/
Run:
$ sudo node 14_http_and_https_server_together.js

$ curl https://127.0.0.1 -k
Secure!

$ curl http://127.0.0.1 -i
HTTP/1.1 301 Moved Permanently
Location: https://127.0.0.1/
Date: Sun, 01 Jun 2014 06:15:16 GMT
Connection: keep-alive
Transfer-Encoding: chunked

OR / AND
  - Open http://localhost/ in Browser will redirect to 'https' Page
  - Open https://localhost/ in Browser will prompt 'Secure!'