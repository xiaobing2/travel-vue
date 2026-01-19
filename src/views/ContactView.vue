<template>
  <div class="page container">
    <header class="page-head">
      <p class="pill pill-soft">联系</p>
      <h1>让行程顾问帮你出方案</h1>
      <p class="muted">告诉我们你想去的地方、天数和预算，1 小时内给到可行方案。</p>
    </header>

    <div class="grid cards-2">
      <div class="card">
        <div class="card-body">
          <h3>快速表单</h3>
          <form class="form">
            <label>
              <span>你的称呼</span>
              <input type="text" placeholder="如：王先生 / Lisa" />
            </label>
            <label>
              <span>想去的目的地</span>
              <input type="text" placeholder="如：丽江、大理、三亚" />
            </label>
            <label>
              <span>出行人数与日期</span>
              <input type="text" placeholder="如：2 人，2 月底或 3 月初" />
            </label>
            <label>
              <span>大致预算</span>
              <input type="text" placeholder="如：人均 3000-4000" />
            </label>
            <label>
              <span>联系方式</span>
              <input type="text" placeholder="手机号 / 微信 / 邮箱" />
            </label>
            <button type="button" class="btn btn-primary">提交需求</button>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h3>直接联系</h3>
          <p class="muted">人工顾问在线时间 9:00 - 21:00。</p>
          <div class="info-block">
            <div>
              <p class="muted tiny">电话</p>
              <a class="link" :href="`tel:${supportPhone}`">{{ supportPhone }}</a>
            </div>
            <div>
              <p class="muted tiny">邮箱</p>
              <a class="link" :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>
            </div>
            <div>
              <p class="muted tiny">微信</p>
              <span class="pill">旅行顾问</span>
            </div>
          </div>
          <div class="card note">
            <div class="card-body">
              <p class="muted tiny">提示</p>
              <p class="muted">
                提交需求后，我们会根据你的时间与预算做 1-2 版方案，并标注可选升级项，方便你快速决策。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSiteStore } from '../stores/site'

const store = useSiteStore()
const { supportPhone, supportEmail } = storeToRefs(store)
</script>

