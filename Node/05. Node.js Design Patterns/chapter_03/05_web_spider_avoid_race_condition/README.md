Seite: 194

This web spider version actually contains a race condition (can you spot it?).

The problem we are talking about lies in the spider() function, where we check if a file already exists, before starting to download the corresponding URL.

The problem is that, two spider tasks operating on the same URL might invoke fs.readFile() on the same file before one of the two tasks completes the download and creates a file, causing both tasks to start a download.

How can we fix that? The answer is much simpler than we might think. In fact, all we need is a variable to mutually exclude multiple spider() tasks running on the same URL.

Execute:

$ node spider http://www.example.com
