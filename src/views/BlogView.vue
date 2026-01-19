<template>
  <div class="page container">
    <header class="page-head">
      <p class="pill pill-soft">攻略</p>
      <h1>旅行灵感与实用指南</h1>
      <p class="muted">从行前准备到拍照技巧，帮你少踩坑、多体验。</p>
    </header>

    <div class="grid cards-3">
      <article v-for="post in blogPosts" :key="post.id" class="card">
        <div class="card-body">
          <p class="muted tiny">{{ post.date }}</p>
          <h3>{{ post.title }}</h3>
          <p class="muted">{{ post.excerpt }}</p>
          <div class="tags">
            <span v-for="tag in post.tags" :key="tag" class="badge badge-soft">{{ tag }}</span>
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
const { blogPosts } = storeToRefs(store)
</script>

