// Pseudo code for products page
export default ("products", () => {
    /*
     *  We don't want to execute the import, just the prefetch
     *  That's why we wrap it on a function
     */
    () => import(/* webpackPrefetch: true */ "./subscribe-page");
    // ...
});