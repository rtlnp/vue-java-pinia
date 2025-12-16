<template>
    <h2>创建 OR 回答？</h2>
    <RouterLink :to="{name: 'rolea'}">创建</RouterLink>
    <RouterLink :to="{name: 'roleb'}">回答</RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>

</style>