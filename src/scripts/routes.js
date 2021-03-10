import Homepage from './components/Homepage'
import Login from './components/Login'
import Dashboard from './components/Dashboard/Main'
import Presensi from './components/Dashboard/Presensi'
import CekLog from './components/Dashboard/CekLog'
import store from './store';

export default [
    {
        name:'Login',
        path: '/login', 
        component: Login,
        meta: {
            title: 'Login'
        },
    },
    {
        name:'Homepage',
        path: '/', 	 
        component:Homepage,
        meta: {
            title: 'Homepage'
        }
    },
    {
        name:'Dashboard',
        path: '/dashboard',
        component:Dashboard,
        meta: {
            title: 'Dashboard'
        },
        async beforeEnter(to, from, next) {
            var data = await store.dispatch('global/fetchGeneralData')
            if(data)
                next()
            else
                next({'name':'Login'})
        }
    },
    {
        name:'Presensi',
        path: '/presensi',
        component:Presensi,
        meta: {
            title: 'Presensi'
        },
        async beforeEnter(to, from, next) {
            var data = await store.dispatch('global/fetchGeneralData')
            if(data)
                next()
            else
                next({'name':'Login'})
        }
    },
    {
        name:'CekLog',
        path: '/cek-log',
        component:CekLog,
        meta: {
            title: 'Cek Log'
        },
        async beforeEnter(to, from, next) {
            var data = await store.dispatch('global/fetchGeneralData')
            if(data)
                next()
            else
                next({'name':'Login'})
        }
    }
]