<template>
    <!-- <form @submit.prevent="">
        <p>输入问卷码</p>
        <input 
            type="text"
            name="id"
            v-model="id"
            placeholder="6位问卷码"
            minlength="6"
            maxlength="6"
        >
        <button @click="FormSubmit">提交</button>
    </form> -->
<!-- 新增外层容器类，统一页面布局 -->
<div class="question-code-container">
    <!-- 新增表单卡片类，实现模块化视觉效果 -->
    <form @submit.prevent="" class="code-form">
        <!-- 新增标签类，优化提示文字样式 -->
        <p class="code-label">输入问卷码</p>
        <!-- 新增输入框类，统一表单控件风格 -->
        <input 
            type="text"
            name="id"
            v-model="id"
            placeholder="6位问卷码"
            minlength="6"
            maxlength="6"
            class="form-input code-input"
        >
        <!-- 新增提交按钮类，保持主操作按钮风格统一 -->
        <button @click="FormSubmit" class="operate-btn code-submit-btn">提交</button>
    </form>
</div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import request from '@/utils/request';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const id = ref();

const router = useRouter();

const FormSubmit = async () => {
    try {
        const res = await request.post('/question/out', id.value);

        if(res.data != null){
            const stores = useCounterStore();
            stores.count = id.value;
            router.push('/rend');
        } else {
            alert('问卷码错误');
        }

    } catch (error) {
        console.log('请求错误详情：', error);
        console.log('错误响应状态码：', error.response?.status);
        console.log('错误响应数据：', error.response?.data);
        alert('服务器没了喵');
    }
}
</script>

<style scoped>
/* 1. 整体容器：居中布局+页面留白，与问卷渲染/编辑页保持视觉统一 */
.question-code-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 80px 20px;
    box-sizing: border-box;
    min-height: 80vh;
    background-color: #F8F9FA;
}

/* 2. 表单卡片：白色背景+阴影，突出模块感，提升页面层次 */
.code-form {
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 36px 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    gap: 20px; /* 控制表单内元素垂直间距 */
}

/* 3. 问卷码提示文字：突出标题属性，引导用户操作 */
.code-label {
    margin: 0;
    font-size: 18px;
    color: #333333;
    font-weight: 500;
    line-height: 1.2;
}

/* 4. 输入框样式：复用统一表单控件风格，确保交互体验一致 */
.form-input {
    width: 100%;
    height: 48px;
    padding: 0 18px;
    border: 1px solid #E5E6EB;
    border-radius: 8px;
    font-size: 16px;
    color: #333333;
    box-sizing: border-box;
    transition: all 0.3s;
}
/* 输入框聚焦效果：增强视觉反馈，提示用户当前激活状态 */
.form-input:focus {
    outline: none;
    border-color: #4096FF;
    box-shadow: 0 0 0 3px rgba(64, 150, 255, 0.1);
}
/* 输入框占位符样式：弱化提示文字，避免干扰主视觉 */
.code-input::placeholder {
    color: #C9CDD4;
    font-size: 15px;
}

/* 5. 提交按钮：主操作按钮样式，突出点击优先级 */
.code-submit-btn {
    width: 100%;
    height: 52px;
    background-color: #4096FF;
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 8px;
}
/* 按钮hover效果：增强交互反馈，提示可点击 */
.code-submit-btn:hover {
    background-color: #1890FF;
    box-shadow: 0 6px 16px rgba(64, 150, 255, 0.15);
}
/* 按钮点击效果：模拟按压感，提升交互真实度 */
.code-submit-btn:active {
    background-color: #096DD9;
    box-shadow: 0 2px 8px rgba(64, 150, 255, 0.1);
}

/* 6. 响应式适配：小屏幕优化，确保移动端体验一致 */
@media (max-width: 576px) {
    .question-code-container {
        padding: 60px 15px;
    }
    .code-form {
        padding: 28px 18px;
        gap: 16px;
    }
    .code-label {
        font-size: 16px;
    }
    .form-input {
        height: 44px;
        font-size: 15px;
        padding: 0 16px;
    }
    .code-submit-btn {
        height: 48px;
        font-size: 15px;
    }
}
</style>