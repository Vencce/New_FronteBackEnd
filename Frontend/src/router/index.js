import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LivrosView from "../views/LivrosView.vue";
import EditorasView from "../views/EditorasView.vue";
import CategoriasView from "../views/CategoriasView.vue";
import AutoresView from "../views/AutoresView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/livros',
      name: 'livros',
      component: () => import('../views/LivrosView.vue')
    },
    {
      path: '/editoras',
      name: 'editoras',
      component: () => import('../views/EditorasView.vue')
    },
    {
      path: '/autores',
      name: 'autores',
      component: () => import('../views/AutoresView.vue')
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: () => import('../views/CategoriasView.vue')
    },
  ]
})

export default router
