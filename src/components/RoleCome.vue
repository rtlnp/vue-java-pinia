<template>
    <div class="role-select-container">
        <h2 class="role-select-title">创建 OR 回答？</h2>
        <div class="role-link-group">
            <RouterLink :to="{name: 'rolea'}" class="role-link role-create">创建</RouterLink>
            <RouterLink :to="{name: 'roleb'}" class="role-link role-answer">回答</RouterLink>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* 全局容器：垂直水平居中，背景留白 */
.role-select-container {
    min-height:90vh;
    background-color: #F5F7FA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
}

/* 标题样式：简洁醒目，底部间距 */
.role-select-title {
    font-size: 28px;
    font-weight: 600;
    color: #1D2129;
    margin-bottom: 40px;
    letter-spacing: 0.8px;
}

/* 链接组：控制按钮间距 */
.role-link-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 300px;
}

/* 基础链接按钮样式：块级显示，统一形态 */
.role-link {
    display: block;
    text-align: center;
    padding: 16px 0;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
    text-decoration: none; /* 清除默认下划线 */
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* 「创建」按钮配色：蓝色系，传递“新建”属性 */
.role-create {
    background-color: #165DFF;
}
.role-create:hover {
    background-color: #0E48D8;
    box-shadow: 0 4px 12px rgba(22, 93, 255, 0.2);
}

/* 「回答」按钮配色：绿色系，传递“操作/完成”属性 */
.role-answer {
    background-color: #00B42A;
}
.role-answer:hover {
    background-color: #009120;
    box-shadow: 0 4px 12px rgba(0, 180, 42, 0.2);
}

/* 响应式适配：小屏幕优化按钮宽度 */
@media (max-width: 375px) {
    .role-select-title {
        font-size: 24px;
    }
    .role-link {
        font-size: 16px;
        padding: 14px 0;
    }
}
</style>