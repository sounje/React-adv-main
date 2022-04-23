import { LazyPage1, LazyPage2, LazyPage3 } from "../01-LazyLoad/pages";
import { Route } from 'react-router-dom';
import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-LazyLoad/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-LazyLoad/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-LazyLoad/pages/LazyPage3'));

export const routes: Route[] = [
{
    to: '/Lazy1',
    path: 'Lazy1',
    Component: Lazy1,
    name: 'Lazy-1'
},
{
    to: '/Lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'Lazy-2'
},
{
    to: '/Lazy3',
    path: 'lazy3',
    Component: Lazy3,
    name: 'Lazy-3'
}      
];