class MyModule {
    constructor(greeting) {
        this.hello = greeting;
    }

    printvar() {
        console.log(this.hello);
    }
}

export default MyModule;
