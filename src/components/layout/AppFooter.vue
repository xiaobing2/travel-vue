<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-left">
        <div class="footer-brand">{{ brand.name }}</div>
        <div class="footer-sub">{{ brand.slogan }}</div>
        <div class="footer-meta">
          <span>工作时间：9:00-21:00</span>
          <span class="dot" aria-hidden="true">·</span>
          <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>
        </div>
      </div>

      <div class="footer-right">
        <div class="footer-links">
          <RouterLink to="/destinations">目的地</RouterLink>
          <RouterLink to="/tours">线路</RouterLink>
          <RouterLink to="/blog">攻略</RouterLink>
          <RouterLink to="/contact">联系</RouterLink>
        </div>
        <div class="footer-copy">© {{ year }} {{ brand.name }}. All rights reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '../../stores/site'

const store = useSiteStore()
const { brand, supportEmail } = storeToRefs(store)
const year = computed(() => new Date().getFullYear())
</script>

