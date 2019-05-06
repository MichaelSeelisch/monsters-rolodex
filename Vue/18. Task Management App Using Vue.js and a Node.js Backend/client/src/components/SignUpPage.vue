<template>
<div>
    <form v-on:submit.prevent="onSubmit">
        <p>
            <input placeholder="Firstname" type="text" name="firstName" v-model="firstName">
        </p>
        <p>
            <input placeholder="Lastname" type="text" name="lastName" v-model="lastName">
        </p>
        <p>
            <input placeholder="Email" type="text" name="email" v-model="email">
        </p>
        <p>
            <input placeholder="Password" type="password" name="password" v-model="password">
        </p>
        <p>
            <input type="submit" value="Signup">
        </p>
    </form>
</div>
</template>

<script>
import userService from "../services/user.service";
export default {
    data () {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    },
    methods: {
        onSubmit () {
            userService.signUp(this.firstName, this.lastName, this.email, this.password)
                .then(() => {
                    alert("Signup successful");
                    this.$router.push({name: "SignInPage"});  
                })
                .catch(() => {
                    alert("error signing up. please check the provided data.");
                });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
