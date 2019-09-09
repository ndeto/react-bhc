import Home from './../components/About';
import About from './../components/Home';

export default [
    {
        name: 'home',
        component: Home,
        exact: true,
        path: '/'
    },
    {
        name: 'about',
        component: About,
        exact: true,
        path: '/about'
    }
    /*{
        name: '404',
        component: NotFound,
        exact: true,
        path: '*',
    },*/
];