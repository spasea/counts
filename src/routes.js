export default [
  {
    path: '/about/',
    component: require('./components/pages/about.vue')
  },
  {
    path: '/form/',
    component: require('./components/pages/form.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./components/pages/dynamic-route.vue')
  }
]
