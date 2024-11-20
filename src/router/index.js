// src/router/index.js
import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/components/MainContent.vue'; // Página inicial
import Videos from '@/components/SiteVideos.vue'; // Página de vídeos
import Curriculo from '@/components/SiteCurriculo.vue'; // Página de currículo
import Links from '@/components/SiteLinks.vue'; // Página de links
import VideoPage from '@/components/VideoPage.vue'; // Componente dinâmico para páginas de vídeos

const routes = [
    {
        path: '/', // Rota para a página inicial
        name: 'Home',
        component: Home,
    },
    {
        path: '/videos', // Rota para a página de vídeos
        name: 'Videos',
        component: Videos,
    },
    {
        path: '/curriculo', // Rota para o currículo
        name: 'Curriculo',
        component: Curriculo,
    },
    {
        path: '/links', // Rota para os links
        name: 'Links',
        component: Links,
    },
    {
        path: "/video/:id",
        name: "VideoPage",
        component: VideoPage,
        props: true, // Permite que o parâmetro seja passado como prop para o componente
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
