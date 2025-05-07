import {BrowserRouter,Route, Routes} from 'react-router-dom'
import {HOME, CREAR, EDITAR, LOGIN, VER} from './routers/router'
import LoginPage from "./pages/LoginPage"
import React from 'react'
import HomePage from './pages/HomePage'
import CrearPage from './pages/CrearPage'
import EditarPage from './pages/EditarPage'
import ViewPage from './pages/ViewPage'

function App() {

  return (
    <>  
    {/* BrowserRouter - habilita la navegacion en la app */}
    <BrowserRouter>
    {/* Routes - Contenedor de Rutas */}
    <Routes>
      {/* Route - Rutas Predefinida en redireccionada a un componente */}
      <Route>
        <Route path={LOGIN} element={<LoginPage/>}/>
        <Route path={HOME} element={<HomePage/>}/>
        <Route path={CREAR} element={<CrearPage/>}/>
        <Route path={EDITAR} element={<EditarPage/>}/>
        <Route path={VER} element={<ViewPage/>}/>
        {/* <Route path="*" element={<Error404/>}/> */}
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
