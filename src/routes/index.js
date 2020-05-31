import RegionPage from './RegionPage';
import RegionsPage from './RegionsPage';

export const REGION_ROUTE = 'REGION_ROUTE';
export const REGIONS_ROUTE = 'REGIONS_ROUTE';

const routes = [
  {
    id: REGIONS_ROUTE,
    path: '/',
    title: 'Регионы и библиотеки',
    component: RegionsPage,
    exact: true,
  },
  {
    id: REGION_ROUTE,
    path: '/region/:id',
    title: 'Детальная информация по библиотеке',
    component: RegionPage,
  }
];

export default routes;

export function getNavUrl(pageId) {
    const currentRoute = routes.find(route => route.id === pageId);
    return currentRoute && currentRoute.path;
}
