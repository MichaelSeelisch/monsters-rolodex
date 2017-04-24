To show an example of sequential iteration, let's introduce a new feature to the web spider application. We now want to download all the links contained in a web page recursively. To do that, we are going to extract all the links from the page and then trigger our web spider on each one of them recursively and in sequence.

Also, instead of checking if the file already exists, we now try to read it, and start spidering its links; this way, we are able to resume interrupted downloads. As a final change, we make sure we propagate a new parameter, nesting, which helps us limit the recursion depth.

Execute:

$ node spider http://www.example.com
