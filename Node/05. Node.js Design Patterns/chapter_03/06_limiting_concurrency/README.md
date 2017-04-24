Seite: 200

Our web spider application is perfect for applying what we learned about limiting the concurrency of a set of tasks. In fact, to avoid the situation in which we have thousands of links crawled at the same time, we can enforce a limit on the concurrency of this process by adding some predictability on the number of concurrent downloads. 

Execute:

$ node spider http://www.example.com
