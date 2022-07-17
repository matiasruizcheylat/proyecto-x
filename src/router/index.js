import Vue from 'vue'
import VueRouter from 'vue-router'
import VistaPrincipal from '../views/VistaPrincipal.vue'
import Posteos from '../views/Posteos.vue'
import Respuestas from '../views/Respuestas.vue'
import CargarUsuario from '../views/CargarUsuario.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'VistaPrincipal',
        component: VistaPrincipal
    },
    {
        path: '/posteos/:id',
        name: 'Posteos-todo',
        component: Posteos,
        props: true,
    },
    {
        path: '/respuestas',
        name: 'Respuestas',
        component: Respuestas,
        props: true,
    },
    {
        path: '/cargarUsuario',
        name: 'CargarUsuario',
        component: CargarUsuario,
        props: true,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router