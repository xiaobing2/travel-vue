<template>
  <div class="page container">
    <header class="page-head">
      <p class="pill pill-soft">目的地</p>
      <h1>灵感地图库</h1>
      <p class="muted">用目的地标签快速找到你的下一个假期。</p>
    </header>

    <div class="grid cards-3">
      <article v-for="d in destinations" :key="d.id" class="card destination-card" :id="d.id">
        <div class="card-media" :style="{ backgroundImage: `url(${d.cover})` }"></div>
        <div class="card-body">
          <div class="card-title-row">
            <h3>{{ d.name }}</h3>
            <span class="tag">{{ d.region }}</span>
          </div>
          <p class="muted">{{ d.tag }}</p>
          <div class="tags">
            <span v-if="d.hot" class="badge">热门</span>
            <span class="badge badge-soft">当地向导</span>
            <span class="badge badge-soft">自由行</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSiteStore } from '../stores/site'

const store = useSiteStore()
const { destinations } = storeToRefs(store)
</script>

