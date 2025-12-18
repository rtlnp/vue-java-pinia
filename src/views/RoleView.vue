<template>
    <Role />
    <router-link :to="{name: 'login'}" class="back-link">返回登录页</router-link>
</template>

<script setup>
import Role from '../components/RoleCome.vue'
</script>

<style scoped>
/* 返回选择页链接样式：简约按钮式设计 */
.back-link {
    /* 基础形态：块级显示+合理点击区域 */
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    /* 视觉风格：柔和圆角+低饱和色调 */
    border-radius: 8px;
    border: 1px solid #E5E6EB;
    background-color: #FFFFFF;
    color: #165DFF;
    /* 字体样式：清晰易读 */
    font-size: 14px;
    font-weight: 500;
    text-decoration: none; /* 清除默认下划线 */
    /* 交互过渡：hover效果平滑 */
    transition: all 0.3s ease;
}

/*  hover反馈：增强交互感不刺眼 */
.back-link:hover {
    background-color: rgba(22, 93, 255, 0.08);
    border-color: #165DFF;
    color: #0E48D8;
    box-shadow: 0 2px 6px rgba(22, 93, 255, 0.1);
}
</style>