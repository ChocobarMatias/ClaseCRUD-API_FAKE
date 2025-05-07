import React, {  useEffect, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'
import "../CSS/Login.css"
import { URL_User } from '../Constants/Endpoints'
import { useNavigate } from 'react-router-dom'
import { HOME } from "../routers/router"

const Login = () => {
const [user, setUser] = useState()
const [password, setPassword] = useState()
const [datos, setDatos] = useState([])

const navigate = useNavigate()

const getUser = async () => {
  try {
     const response = await axios.get(URL_User) // get mostrar toddo los datos de ese enpoint
      setDatos(response.data)
      console.log(response.data)
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

useEffect(() => { getUser() }, [])

const handleSubmit = async (e) => {
  e.preventDefault()
  const userFound = datos.find((item) => item.nombre === user && item.password === password)
  if (userFound) {
    alert("Bienvenido " + userFound.nombre)
    navigate(HOME)
  } else {
    alert("Usuario o contraseña incorrectos")
  }}

  return (
    <div>
      <h2>Iniciar Sesion</h2>
      <div className="container">
        <Container>
          <Form onSubmit={handleSubmit}>
            <br />
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text"  onChange={(e)=>setUser(e.target.value)}/>
            </Form.Group>
            <br />
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Group>
              <br />
            <Button variant="primary" type="submit">
              INGRESAR
            </Button>
          </Form>
        </Container>
    <br />
      </div>
    </div>
  )
}

export default Login
