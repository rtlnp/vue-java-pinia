<template>
    <h2>登录页面</h2>
    <form @submit.prevent="FormSubmit">
        <p>用户名</p>
        <input 
            type="text"
            name="username"
            v-model="username"
            placeholder="输入用户名"
            required
        >
        <p>密码</p>
        <input 
            type="password" 
            name="password" 
            v-model="password"
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const verifyCode = ref('');

const router = useRouter();

const FormSubmit = () => {
    router.push('/role');
}
</script>

<style scoped>

</style>