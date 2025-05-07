Proyecto React Vite -CRUD con API fake - Comision 1 Programacion 3 - uso basico hecho en clases 

Realizado y subido a github para que el alumno pueda ir guiando el proceso junto a los videos del drive

Instalacion comando npm create vite@latest
                                           1° colocar el nombre del proyecto
                                           2° elegir opcion React
                                           3° js
                                           4° Cd nombre proyecto
                                           5° npm i 
                                           6° npm run dev (ejecuta el proyecto de react vite)
                    
Router-Dom:
            npm i  react-router-dom

bootstrap
        npm i react-bootstrap bootstrap 
        npm install react-bootstrap bootstrap


Json-Server :
             npm i json-server --save -dev (instalacion local)
             npm i -g json-server (instalacion global)
             
        creacion de de archivo db.json formato

         {
           "atributo" : [
                {
                        "id":1
                }
                        ]                               
        }

           npx json-server --watch db.json --port 3001

Comando para hacer pedido HTTP:
   
                                 npm i axios

Hooks utilizados en el proyecto :
 
                                      useState -- estados
                                      useEffect -- controlar de ejecuciones
                                      useParams -- busqueda de id en barra de direcciones
                                      useNavigate -- pasar a otro componenete por medio de rutas en JS

Etiquetas
            
             <BrowserRouter> habilita la navegacion en la App
             <Routes> contenedor de rutas
             <Route> la rutas para uso de componente
             <Route path="rutas prefijada" element={<Componente de la page para mostrar/>}/> - asigna una ruta al componente de una pagina
             <Link to="ruta para ir a componente page"> uso en el HTML para manejo de las rutas
             
CRUD
       Create -- crear uso en peticion HTTP -- post
       Read   -- Ver/Mostrar usada en peticion HTTP -- get (agregando el Id lo sectorizo para ver osea en singular -- sin Id seria plural osea mostrar todo)  
       Update -- Actualizar uso en peticion HTTP -- put  (generalmente combinada con la get)
       Delete -- Borrar uso en peticiones HTTP -- delete (generalmente combinada con la get)