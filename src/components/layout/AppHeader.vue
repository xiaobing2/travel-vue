<template>
  <header class="header">
    <div class="container header-inner">
      <RouterLink class="brand" to="/">
        <span class="brand-mark" aria-hidden="true">⛰</span>
        <span class="brand-text">
          <span class="brand-name">{{ brand.name }}</span>
          <span class="brand-slogan">{{ brand.slogan }}</span>
        </span>
      </RouterLink>

      <nav class="nav" aria-label="主导航">
        <RouterLink class="nav-link" to="/destinations">目的地</RouterLink>
        <RouterLink class="nav-link" to="/tours">线路</RouterLink>
        <RouterLink class="nav-link" to="/blog">攻略</RouterLink>
        <RouterLink class="nav-link" to="/contact">联系</RouterLink>
      </nav>

      <div class="header-cta">
        <a class="pill" :href="`tel:${supportPhone}`" title="电话咨询">
          <span class="pill-label">咨询</span>
          <span class="pill-value">{{ supportPhone }}</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '../../stores/site'

const store = useSiteStore()
const { brand, supportPhone } = storeToRefs(store)
</script>

