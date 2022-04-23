import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';

import logo from '../logo.svg'

// import { LazyPage1, LazyPage2, LazyPage3} from '../01-LazyLoad/pages/index'
import { routes } from './routes';

import { Suspense } from 'react';
import { spawn } from 'child_process';


export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> }>
        <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={ logo } alt="React Logo" />
                
            <ul>
                {
                    routes.map(route => (
                        <li key={ route.to }>
                            <NavLink 
                            to={ route.to } 
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' } >
                            { route.name }
                            </NavLink>
                        </li>
                    ))
                }
                
            </ul>

            </nav>

            <Routes>
                {
                    routes.map( route => (
                        <Route  
                            key={ route.to }
                            path={ route.path }
                            element={ <route.Component/> }
                        />
                    ))
                }

                <Route path='/*' element={ <Navigate to={ routes[0].to } replace /> }  />
            </Routes>


        </div>
        </BrowserRouter>
    </Suspense>
  )
}
