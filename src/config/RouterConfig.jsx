import App from "../App.jsx";
import MapItem from "../components/MapItem/MapItem.jsx";


 export const routerData =[
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/',
                element: <MapItem/>,
                access: false,
                name: 'General',
                title: 'Мониторинг',
                icon: 'mdi-home',
                image: 'monitoring',
                accessFlag: 'General',
            },
            // {
            //     path: '/reestr-page',
            //     element: <reestrPage/>,
            //     access: false,
            //     name: 'reestrPage',
            //     title: 'Реестры',
            //     icon: 'mdi-file-document-outline',
            //     image: 'reestr',
            //     accessFlag: 'reestrAll'
            // },
            //
            //
            // {
            //     path: '/mainLogicBlock2',
            //     element: <mainLogicBlock2/>,
            //     access: true,
            //     name: 'mainLogicBlock2',
            //     title: 'Логистика',
            //     icon: 'mdi-car',
            //     image: 'logistic',
            //     accessFlag: 'logistics'
            // },
            // {
            //     path: '/dispatcher-block',
            //     element: <dispatcherBlock3/>,
            //     access: true,
            //     name: 'dispatcherBlock',
            //     title: 'Диспетчер',
            //     icon: 'mdi-clipboard-text',
            //     image: 'dispetcher',
            //     accessFlag: 'operators'
            // },
            // {
            //     path: '/RequestList',
            //     element: <RequestList/>,
            //     access: true,
            //     name: 'RequestList',
            //     title: 'Заявки',
            //     icon: 'mdi-folder-alert-outline',
            //     image: 'request',
            //     accessFlag: 'requests'
            // },
            // {
            //     path: '/report',
            //     element: <Report/>,
            //     access: true,
            //     name: 'report',
            //     title: 'Отчеты',
            //     icon: 'mdi-clipboard-outline',
            //     image: 'report',
            //     accessFlag: 'report'
            // },
        ]
    }
];

