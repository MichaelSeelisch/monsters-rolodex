Login to AWS Server:

$ ./aws_connect_script.sh

Running Your Node.js Application in AWS:

This part should be fairly trivial. You simply execute your script on the server the same way you have been executing on your machine. The best way to get the code on the server is simply to use a source control repository (such as github) and clone the code on the server. For example:

$ git clone git://github.com/youcompacy/yourproject.git git checkout master
$ npm install
$ node app.js

08.03.2017
Node 6.10.0 installiert