<template>
    <h2>要创建还是回答？</h2>
    <RouterLink :to="{name: 'rolea'}"><img src="" alt="创建者"></RouterLink>
    <RouterLink :to="{name: 'roleb'}"><img src="" alt="回答者"></RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>

</style>