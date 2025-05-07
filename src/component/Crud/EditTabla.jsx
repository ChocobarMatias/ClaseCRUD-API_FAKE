import React, { use } from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import {Button, Container, Form}  from 'react-bootstrap'
import {HOME} from '../../routers/router'
import {URL_CLIENTES} from '../../Constants/Endpoints'
import { HandIndex } from 'react-bootstrap-icons'

const EditTabla = () => {

const navigate = useNavigate()
const {id} = useParams()

const initialState = {
  nombre: "",
  telefono: "",
  direccion: "",
  email: "",
  fecha_nacimiento: "",
  edad: "",
  sexo: ""
}


const [datos, setDatos] = useState(initialState)

const getCliente = async () => {
  try {
      const response = await axios.get(`${URL_CLIENTES}/${id}`)
      setDatos(response.data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }}

  useEffect(() => {getCliente()}, [])

const handleSubmit = async (e) => {
  e.preventDefault()
try {
     const response = await axios.put(`${URL_CLIENTES}/${id}`, datos)
      if(response.status === 200){
        alert("Datos actualizados correctamente")
        navigate(HOME)
      }
} catch (error) {
  console.error("Error al guardar los datos", error)
}}

  return (
    <div>
  <Container>
    <Form onSubmit={handleSubmit}>
      <br />
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="nombre" value={datos.nombre} onChange={(e) => setDatos({...datos, [e.target.name]: e.target.value})}/>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail" >
        
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="telefono" value={datos.telefono} onChange={(e) => setDatos({...datos, [e.target.name]: e.target.value})}/>
        </Form.Group>
        <br />

        <Form.Label>Direccion</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="direccion" value={datos.direccion} onChange={(e) => setDatos({...datos, [e.target.name]: e.target.value})}/>
   
        <br />
        <Form.Label>E-Mail</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="email" value={datos.email} onChange={(e) => setDatos({...datos, [e.target.name]: e.target.value})}/>
        
        <br />
        <Form.Label>Fecha de Nacimiento </Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="fecha_nacimiento" value={datos.fecha_nacimiento} onChange={(e) => setDatos({...datos, [e.target.name]: e.target.value})}/>
        
        <br />
        <Form.Label>Edad</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="edad" value={datos.edad} onChange={(e) => setDatos({...datos, [e.target.name]: e.target.value})}/>
        {/* </Form.Group> */}
        <br />
        <Form.Label>Sexo</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="sexo" value={datos.sexo} onChange={(e) => setDatos({...datos, [e.target.name]: e.target.value})}/>
        {/* </Form.Group> */}
        <br />
        <Button variant="primary" type="submit" >
          Guardar
        </Button>
        {/* <Button variant="secondary" type="submit" onClick={() => navigate(HOME)}> */}
          Cancelar  
    </Form>

  </Container>
    </div>
  )
}

export default EditTabla
