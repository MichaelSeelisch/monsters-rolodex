<template>
<div>
    <form v-on:submit.prevent="onSubmit">
        <p>
            <input placeholder="Email" type="text" name="email" v-model="email">
        </p>
        <p>
            <input placeholder="Password" type="password" name="password" v-model="password">
        </p>
        <p>
            <input type="submit" value="Signin">
        </p>
    </form>
</div>    
</template>

<script>
import userService from "../services/user.service";
export default {
    data () {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        onSubmit () {
            userService.signIn(this.email, this.password)
                .then(((user) => {
                    console.log("Logged in");
                    this.$router.push({name: "Dashboard"});
                }).bind(this)).catch(() => {
                    console.log("Error logging in");
                });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
