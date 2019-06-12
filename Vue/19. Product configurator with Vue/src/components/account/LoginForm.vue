<template>
    <center>
        <div v-if="auth" class="pull-right" id="navbar-loggedin">
            You're logged in
            <button class="btn btn-secondary" @click="logout"><i class="fa fa-unlock"></i> Logout</button>
        </div>
        <div v-else class="navbar-collapse collapse" id="navbar-main">
            <form class="navbar-form navbar-right" role="search" @submit.prevent="login">
                <div class="form-group">
                    <input type="text" class="form-control" name="username" placeholder="Username" v-model="username">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="password" placeholder="Password" v-model="password">
                </div>
                <button type="submit" class="btn btn-secondary"><i class="fa fa-lock"></i> Sign In</button>
            </form>
        </div>
    </center>
</template>

<script>
    export default {
        name: 'LoginForm',
        props: ['auth'],
        data() {
            return {
                username: null,
                password: null,
            }
        },
        methods: {
            login() {
                if (this.username && this.username.length > 0 && this.password && this.password.length > 0) {
                    this.$emit('login')
                    // empty form
                    this.username = null
                    this.password = null
                }
            },
            logout() {
                this.$emit('logout')
            }
        },
    }
</script>

<style lang="less" scoped>
    .btn-secondary {
        background: #6AA84F;
        border: 1px solid #578b41;
        margin-left: auto;
        margin-right: auto;
        color: white;
        font-weight: bold;
        border-radius: 0;
    }

    #navbar-loggedin {
        height: 50px;
        line-height: 50px;
        color: white;
        font-size: 18px;
        padding-right: 15px;

        button {
            margin-left: 15px;
        }
    }
</style>