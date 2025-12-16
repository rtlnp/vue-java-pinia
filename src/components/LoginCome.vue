<template>
    <h2>登录页面</h2>
    <form @submit.prevent="handleLogin">
        <p>用户名</p>
        <input 
            type="text"
            name="username"
            :="username"
            placeholder="输入用户名"
            required
        >
        <p>密码</p>
        <input 
            type="password" 
            name="password" 
            :="password"
            placeholder="密码长度6~15位"
            required
            minlength="6"
            maxlength="15"
        >
        <p>验证码</p>
        <input 
            type="text"
            name="code"
            v-model="verifyCode"
            placeholder="输入4位验证码"
            required
            minlength="4"
            maxlength="4"
        >
        <button>获取验证码</button>

        <button type="submit">登录</button>
    </form>
</template>

<script setup>

</script>

<style scoped>

</style>