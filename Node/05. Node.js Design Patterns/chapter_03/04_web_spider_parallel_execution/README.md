Our web spider application seems like a perfect candidate to apply the concept of parallel execution. So far, our application is executing the recursive download of the linked pages in a sequential fashion. We can easily improve the performance of this process by downloading all the linked pages in parallel.

To do that, we just need to modify the spiderLinks() function to make sure to spawn all the spider() tasks at once, and then invoke the final callback only when all of them have completed their execution.

Execute:

$ node spider http://www.example.com
