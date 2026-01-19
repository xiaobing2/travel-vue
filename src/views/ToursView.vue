<template>
  <div class="page container">
    <header class="page-head">
      <p class="pill pill-soft">线路</p>
      <h1>精选小团行程</h1>
      <p class="muted">更松弛的节奏、更靠谱的向导，让旅途专注体验。</p>
    </header>

    <div class="stack">
      <article v-for="t in tours" :key="t.id" class="card tour-card">
        <div class="card-body">
          <div class="card-title-row">
            <h3>{{ t.title }}</h3>
            <div class="tags">
              <span v-for="b in t.badges" :key="b" class="badge badge-soft">{{ b }}</span>
            </div>
          </div>
          <p class="muted">行程天数：{{ t.days }} 天</p>
          <ul class="list">
            <li v-for="h in t.highlights" :key="h">• {{ h }}</li>
          </ul>
          <div class="card-actions">
            <div class="price">
              <span class="muted">￥</span>
              <span class="price-value">{{ t.priceFrom }}</span>
              <span class="muted"> 起/人</span>
            </div>
            <RouterLink class="btn btn-primary" to="/contact">咨询并锁位</RouterLink>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '../stores/site'

const store = useSiteStore()
const { tours } = storeToRefs(store)
</script>

