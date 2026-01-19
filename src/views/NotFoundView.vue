<template>
  <div class="page container not-found">
    <p class="pill pill-soft">404</p>
    <h1>这里还没有内容</h1>
    <p class="muted">试试返回首页或查看目的地/线路。</p>
    <div class="hero-actions">
      <RouterLink class="btn btn-primary" to="/">返回首页</RouterLink>
      <RouterLink class="btn btn-ghost" to="/destinations">目的地</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

