<template>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="navbar navbar-default navbar-inverse">
                    <div class="navbar-header">
                        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Super cool personal postcard configurator</a>
                    </div>
                    <LoginForm
                        :auth="auth"
                        @login="attemptLogin"
                        @logout="logout"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import LoginForm from './LoginForm';

    export default {
        name: 'AccountNav',
        components: {LoginForm},
        computed: {
            ...mapState('account', [
                'auth'
            ]),
        },
        methods: {
            ...mapActions('account', [
                'attemptLogin',
                'logout'
            ])
        },
    }
</script>

<style lang="less" scoped>
    @orange: #FF9900;
    .navbar {
        border-radius: 0;
        background: @orange;
        border-color: #cc7a00;

        .navbar-brand {
            color: white;
        }
    }
</style>