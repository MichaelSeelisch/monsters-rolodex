<template>
    <div id="app">
        <AccountNav />
        <PostCardConfigurator/>
    </div>
</template>

<script>
    import PostCardConfigurator from './components/configurator/PostCardConfigurator';
    import AccountNav from './components/account/AccountNav';

    export default {
        name: 'app',
        components: {
            PostCardConfigurator,
            AccountNav
        },
    }
</script>

<style lang="less">
    body {
        margin: 0;
        background: #fdfdfd;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 0px;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
