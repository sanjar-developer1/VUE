<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="redirect">
            <div>
                <label for="username">Username</label>
                <input required id="username" type="text" v-model="username" placeholder="Enter your username" />
            </div>
            <div>
                <label for="password">Password</label>
                <input required id="password" type="password" v-model="password" placeholder="Enter your password" />
            </div>
            <button type="submit" >Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        redirect() {
            this.$router.push('/');
        }
    }
}
</script>

<style>
.login-container {
    max-width: 300px;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 6px;
}

.login-container h2 {
    text-align: center;
}

.login-container form>div {
    margin-bottom: 15px;
}

.login-container label {
    display: block;
    margin-bottom: 5px;
}

.login-container input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.login-container button {
    width: 100%;
    padding: 10px;
    background: #42b983;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>