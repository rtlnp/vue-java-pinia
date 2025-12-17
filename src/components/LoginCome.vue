<template>
    <div class="login-container">
        <h2 class="login-title">登录页面</h2>
        <form @submit.prevent="FormSubmit" class="login-form">
            <div class="form-item">
                <label class="form-label">用户名</label>
                <input 
                    type="text"
                    name="username"
                    v-model="username"
                    placeholder="输入用户名"
                    required
                    class="form-input"
                >
            </div>
            <div class="form-item">
                <label class="form-label">密码</label>
                <input 
                    type="password" 
                    name="password" 
                    v-model="password"
                    placeholder="密码长度5~10位"
                    required
                    minlength="5"
                    maxlength="10"
                    class="form-input"
                >
            </div>
            <div class="form-item code-item">
                <label class="form-label">验证码</label>
                <div class="code-wrap">
                    <input 
                        type="text"
                        name="code"
                        v-model="verifyCode"
                        placeholder="输入4位验证码"
                        required
                        minlength="4"
                        maxlength="4"
                        class="form-input code-input"
                    >
                    <span v-if="codeBool">{{ code }}</span>
                    <button type="button" @click="CodeButton" class="code-btn">获取验证码</button>
                </div>
            </div>
            <button type="submit" class="login-btn">登录</button>
        </form>
    </div>
    <!-- <h2>登录页面</h2>
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
    </form> -->
</template>

<script setup>
import request from '@/utils/request';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const verifyCode = ref('');
const codeBool = ref(false);
const code = ref();

const router = useRouter();

const CodeButton = async () => {
    try {
        const res = await request.get('/user/code');

        code.value = res.data;
        codeBool.value = true;
    } catch (error) {
        console.error('登录请求失败：',error);
        alert('服务器没了喵');
    }
}

const FormSubmit = async () => {
    try {
        const res = await request.post('/user/out', verifyCode.value);

        if (!res.data) {
            alert('验证码错误');
            return;
        }

    } catch (error) {
        console.error('登录请求失败：',error);
        alert('服务器没了喵');
    }

    const form = {
        username: username.value,
        password: password.value
    }

    try {
        const res = await request.post('/user/get', form);

        if (res.data) {
            router.push('/role');
        }
        else {
            alert('用户名或密码错误');
        }
    } catch (error) {
        console.error('登录请求失败：',error);
        alert('服务器没了喵');
    }
}
</script>

<style scoped>
/* 全局容器：居中布局 + 背景色 */
.login-container {
    min-height: 90vh;
    background-color: #F5F7FA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
}

/* 标题样式：简洁居中 */
.login-title {
    font-size: 24px;
    font-weight: 600;
    color: #1D2129;
    margin-bottom: 30px;
    letter-spacing: 0.5px;
}

/* 表单容器：白色卡片 + 阴影 */
.login-form {
    width: 100%;
    max-width: 380px;
    background-color: #FFFFFF;
    padding: 40px 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
}

/* 表单项容器：控制间距 */
.form-item {
    margin-bottom: 24px;
}

/* 标签样式：清晰引导 */
.form-label {
    display: block;
    font-size: 14px;
    color: #4E5969;
    margin-bottom: 8px;
    font-weight: 500;
}

/* 输入框样式：统一简约 */
.form-input {
    width: 100%;
    height: 44px;
    padding: 0 16px;
    border: 1px solid #E5E6EB;
    border-radius: 8px;
    font-size: 14px;
    color: #1D2129;
    box-sizing: border-box;
    transition: border-color 0.3s, box-shadow 0.3s;
}

/* 输入框聚焦态：增强交互 */
.form-input:focus {
    outline: none;
    border-color: #165DFF;
    box-shadow: 0 0 0 3px rgba(22, 93, 255, 0.1);
}

/* 验证码区域：横向布局 */
.code-wrap {
    display: flex;
    gap: 12px;
}

.code-input {
    flex: 1;
}

/* 验证码按钮：次要按钮样式 */
.code-btn {
    width: 120px;
    height: 44px;
    background-color: #FFFFFF;
    border: 1px solid #165DFF;
    color: #165DFF;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
}
/* 验证码显示区域样式（仅新增，不修改原有样式） */
.code-wrap span {
  /* 与输入框/按钮同高，视觉对齐 */
  height: 44px;
  /* 内容垂直+水平居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* 浅色背景+细边框，区分区域且不刺眼 */
  background-color: #f0f5ff;
  border: 1px solid #e5e6eb;
  border-radius: 8px;
  /* 内边距，避免文字贴边 */
  padding: 0 12px;
  /* 字体样式：清晰易读 */
  font-size: 14px;
  color: #1d2129;
  letter-spacing: 2px; /* 字母间距拉开，验证码更易识别 */
  cursor: default; /* 鼠标悬浮不变指针，提示不可点击 */
}

.code-btn:hover {
    background-color: rgba(22, 93, 255, 0.05);
}

/* 登录按钮：主按钮样式 */
.login-btn {
    width: 100%;
    height: 48px;
    background-color: #165DFF;
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
}

.login-btn:hover {
    background-color: #0E48D8;
    box-shadow: 0 4px 12px rgba(22, 93, 255, 0.2);
}

/* 响应式适配：小屏幕优化 */
@media (max-width: 375px) {
    .login-form {
        padding: 30px 20px;
    }
    .code-btn {
        width: 100px;
        font-size: 13px;
    }
}
</style>