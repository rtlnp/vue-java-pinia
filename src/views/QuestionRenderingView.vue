<template>
<router-link :to="{name: 'roleb'}" class="back-to-select-link">返回回答页</router-link>
<Rend/>
</template>

<script setup>
import Rend from '../components/QuestionRendering.vue'
</script>

<style scoped>
/* 返回选择页链接样式：简约按钮化设计，兼顾交互感与整洁度 */
.back-to-select-link {
  /* 基础布局：保证点击区域与上下间距 */
  display: inline-block;
  margin-top: 24px;
  padding: 11px 22px;
  /* 视觉风格：柔和圆角+低饱和配色 */
  border-radius: 8px;
  border: 1px solid #E5E6EB;
  background-color: #FFFFFF;
  color: #165DFF;
  /* 字体优化：清晰易读，避免杂乱 */
  font-size: 14px;
  font-weight: 500;
  text-decoration: none; /* 清除默认链接下划线 */
  /* 交互过渡：hover效果平滑自然 */
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
}

/* hover状态：增强反馈但不刺眼 */
.back-to-select-link:hover {
  background-color: rgba(22, 93, 255, 0.08);
  border-color: #165DFF;
  color: #0E48D8;
  box-shadow: 0 2px 8px rgba(22, 93, 255, 0.1);
}
</style>