import { LazyPage1, LazyPage2, LazyPage3 } from "../01-LazyLoad/pages";
import { Route } from 'react-router-dom';
import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from "../01-LazyLoad/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-LazyLoad/layout/LazyLayout'));

export const routes: Route[] = [
{
    to: '/lazyload',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'LazyLayout'
},
{
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
},
     
];