<template>
  <div class="page home">
    <section class="hero">
      <div class="hero-content container">
        <div>
          <p class="pill pill-soft">旅行 · 轻计划</p>
          <h1>把世界装进你的周末与假期</h1>
          <p class="lead">
            精选目的地、轻松行程与靠谱服务，让每一次出发都更简单。
          </p>
          <div class="hero-actions">
            <RouterLink class="btn btn-primary" to="/tours">查看热门线路</RouterLink>
            <RouterLink class="btn btn-ghost" to="/destinations">发现目的地</RouterLink>
          </div>
          <div class="hero-meta">
            <span>精选行程 · 口碑导游 · 24h 客服</span>
          </div>
        </div>
        <div class="hero-card">
          <p class="hero-card-title">当季推荐</p>
          <ul class="hero-list">
            <li v-for="d in hotDestinations" :key="d.id">
              <span class="badge">HOT</span>
              <span class="hero-dest">
                <strong>{{ d.name }}</strong>
                <small>{{ d.tag }}</small>
              </span>
              <RouterLink class="link" :to="{ name: 'destinations', hash: `#${d.id}` }">
                详情 →
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section container">
      <div class="section-head">
        <div>
          <p class="pill pill-soft">目的地</p>
          <h2>热门目的地</h2>
          <p class="muted">从古城到海岛，找到你下一站的灵感。</p>
        </div>
        <RouterLink class="link" to="/destinations">全部目的地 →</RouterLink>
      </div>
      <div class="grid cards-3">
        <article v-for="d in destinations" :key="d.id" class="card destination-card" :id="d.id">
          <div class="card-media" :style="{ backgroundImage: `url(${d.cover})` }"></div>
          <div class="card-body">
            <div class="card-title-row">
              <h3>{{ d.name }}</h3>
              <span class="tag">{{ d.region }}</span>
            </div>
            <p class="muted">{{ d.tag }}</p>
            <RouterLink class="btn btn-ghost small" :to="{ name: 'destinations', hash: `#${d.id}` }">
              了解更多
            </RouterLink>
          </div>
        </article>
      </div>
    </section>

    <section class="section container">
      <div class="section-head">
        <div>
          <p class="pill pill-soft">线路</p>
          <h2>精选小团 · 轻松行程</h2>
          <p class="muted">轻徒步、亲子、周末出逃，多种主题任你选。</p>
        </div>
        <RouterLink class="link" to="/tours">全部线路 →</RouterLink>
      </div>
      <div class="grid cards-3">
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
              <div class="price"><span class="muted">￥</span>{{ t.priceFrom }} 起</div>
              <RouterLink class="btn btn-primary small" to="/contact">咨询定制</RouterLink>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="section container">
      <div class="section-head">
        <div>
          <p class="pill pill-soft">攻略</p>
          <h2>旅行灵感</h2>
          <p class="muted">行前准备、路线设计与拍照技巧。</p>
        </div>
        <RouterLink class="link" to="/blog">更多攻略 →</RouterLink>
      </div>
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
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '../stores/site'

const store = useSiteStore()
const { hotDestinations, destinations, tours, blogPosts } = storeToRefs(store)
</script>

