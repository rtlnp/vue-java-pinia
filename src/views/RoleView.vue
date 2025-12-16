<template>
    <Role />
    <RouterLink :to="{name: 'login'}" />
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Role from '../components/RoleCome.vue'
</script>

<style scoped>

</style>