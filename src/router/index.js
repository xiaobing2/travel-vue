import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/HomeView.vue')
const Destinations = () => import('../views/DestinationsView.vue')
const Tours = () => import('../views/ToursView.vue')
const Blog = () => import('../views/BlogView.vue')
const Contact = () => import('../views/ContactView.vue')
const NotFound = () => import('../views/NotFoundView.vue')

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    if (to.path === from.path) return false
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    { path: '/', name: 'home', component: Home, meta: { title: '首页' } },
    { path: '/destinations', name: 'destinations', component: Destinations, meta: { title: '目的地' } },
    { path: '/tours', name: 'tours', component: Tours, meta: { title: '线路' } },
    { path: '/blog', name: 'blog', component: Blog, meta: { title: '攻略' } },
    { path: '/contact', name: 'contact', component: Contact, meta: { title: '联系' } },
    { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFound, meta: { title: '页面不存在' } }
  ],
})

router.afterEach((to) => {
  const brand = '旅享 Travel'
  const t = to.meta?.title ? `${to.meta.title} - ${brand}` : brand
  document.title = t
})

export default router

