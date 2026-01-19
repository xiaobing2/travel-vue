import { defineStore } from 'pinia'

const destinationsSeed = [
  {
    id: 'lijiang',
    name: '丽江',
    region: '云南',
    tag: '古城·雪山·慢生活',
    cover:
      'https://images.unsplash.com/photo-1543248939-8d2d47a5c8a2?auto=format&fit=crop&w=1400&q=70',
    hot: true,
  },
  {
    id: 'guilin',
    name: '桂林',
    region: '广西',
    tag: '山水·竹筏·溶洞',
    cover:
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=70',
    hot: true,
  },
  {
    id: 'xiamen',
    name: '厦门',
    region: '福建',
    tag: '海岛·骑行·日落',
    cover:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=70',
    hot: false,
  },
  {
    id: 'chengdu',
    name: '成都',
    region: '四川',
    tag: '美食·熊猫·城市漫游',
    cover:
      'https://images.unsplash.com/photo-1549194381-bc89d33b6c7c?auto=format&fit=crop&w=1400&q=70',
    hot: false,
  },
]

const toursSeed = [
  {
    id: 'yunnan-5d',
    title: '云南经典 5 天游（丽江-大理-洱海）',
    days: 5,
    priceFrom: 2399,
    badges: ['热卖', '轻徒步'],
    highlights: ['古城夜景', '玉龙雪山', '环洱海骑行'],
  },
  {
    id: 'guilin-3d',
    title: '桂林阳朔 3 天游（漓江竹筏）',
    days: 3,
    priceFrom: 1599,
    badges: ['亲子'],
    highlights: ['漓江山水', '十里画廊', '遇龙河漂流'],
  },
  {
    id: 'xiamen-2d',
    title: '厦门轻奢 2 天游（鼓浪屿）',
    days: 2,
    priceFrom: 1299,
    badges: ['周末'],
    highlights: ['海风栈道', '鼓浪屿', '日落咖啡'],
  },
]

const blogSeed = [
  {
    id: 'how-to-plan',
    title: '第一次自由行：怎么做一份不踩坑的行程表？',
    date: '2026-01-10',
    tags: ['行程', '预算', '避坑'],
    excerpt: '把“想去”变成“能去”：目的地、天数、交通、住宿与预算的最小闭环。',
  },
  {
    id: 'packing',
    title: '出门只带一个登机箱：四季通用打包清单',
    date: '2025-12-18',
    tags: ['打包', '清单'],
    excerpt: '用分层思路打包：基础层、保暖层、防雨层、应急层，一箱搞定。',
  },
  {
    id: 'travel-photo',
    title: '手机也能拍大片：旅行拍照 6 个构图技巧',
    date: '2025-11-02',
    tags: ['摄影', '技巧'],
    excerpt: '三分法、引导线、前景、对称、留白与色彩对比，拍出质感。',
  },
]

export const useSiteStore = defineStore('site', {
  state: () => ({
    brand: { name: '旅享 Travel', slogan: '把世界装进你的周末与假期' },
    supportPhone: '400-800-1234',
    supportEmail: 'hello@travel.example',
    destinations: destinationsSeed,
    tours: toursSeed,
    blogPosts: blogSeed,
  }),
  getters: {
    hotDestinations: (s) => s.destinations.filter((d) => d.hot),
  },
})

