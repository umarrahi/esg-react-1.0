import { lazy } from 'react';
const Social = lazy(() => import ('../pages/EsgForm/Social'));
const Environmental = lazy(() => import ('../pages/EsgForm/Environmental'));
const General = lazy(() => import ('../pages/EsgForm/General'));
// const Index = lazy(() => import('../pages/Index'));


const routes = [
    // General Page
    {
        path: '/',
        element: <General />,
    },
      // Environmental Page
    {
        path: '/esgform/environmental',
        element: <Environmental />,
    },
     // Social Page
    {
        path: '/esgform/social',
        element: <Social />,
    }
   
    
];

export { routes };
