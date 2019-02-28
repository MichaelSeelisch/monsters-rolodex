import HomeComponent from './components/HomeComponent';
import StatsComponent from './components/StatsComponent';
import NewsComponent from './components/NewsComponent';
import TrendingComponent from './components/TrendingComponent';

const ROUTES = [
    {
        path: '/',
        component: HomeComponent,
    },
    {
        path: '/stats',
        component: StatsComponent,
    },
    {
        path: '/news',
        component: NewsComponent
    },
    {
        path: '/trending',
        component: TrendingComponent
    }
];

export default ROUTES;