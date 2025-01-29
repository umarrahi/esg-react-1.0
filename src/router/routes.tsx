import { lazy } from 'react';
const Environmental = lazy(() => import ('../pages/EsgForm/Environmental'));
const General = lazy(() => import ('../pages/EsgForm/General'));
// const Index = lazy(() => import('../pages/Index'));


const routes = [
    // General Page
    {
        path: '/esgform/general',
        element: <General />,
    },
      // Environmental Page
    {
        path: '/esgform/environmental',
        element: <Environmental />,
    },
    //  // Apps page
    //  {
    //     path: '/apps/chat',
    //     element: <Chat />,
    // },
    // {
    //     path: '/apps/scrumboard',
    //     element: <Scrumboard />,
    // },
   
    
];

export { routes };
