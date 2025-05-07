import { useState } from 'react'
import { Container, Form,Button } from 'react-bootstrap'
import { URL_CLIENTES } from '../../Constants/Endpoints'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { HOME } from '../../routers/router'

const CreateTabla = () => {

  const navigate = useNavigate()

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

  const Guardar = async(e) =>{
    e.preventDefault()
  
  try {
     const response = await axios.post(URL_CLIENTES, datos)

     if(response.status === 201){
    alert("Datos guardados correctamente")
    
    navigate("/home")
     }
  } catch (error) {
    console.error("Error al guardar los datos", error)
  }
  }

const handleChange = (e) => {
  setDatos({...datos,[e.target.name]: e.target.value})}

  return (
    <div>
   <Container>
    <Form  onSubmit={Guardar}>
    <br />
      <Form.Group className="mb-3" controlId="formBasicEmail" >
       
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="nombre" onChange={handleChange}/>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail" >
       
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="telefono" onChange={handleChange}/>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Label>Direccion</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="direccion" onChange={handleChange}/>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Label>E-Mail</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="email" onChange={handleChange}/>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Label>Fecha Nacimiento</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="fecha_nacimiento" onChange={handleChange}/>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Label>Edad</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="edad" onChange={handleChange}/>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Label>Sexo</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="sexo" onChange={handleChange}/>
        </Form.Group>
        <br />
        <Button type='submit'>GUARDAR</Button>
        <Button>Volver</Button>
        <br />
   
     <br />
    </Form>
    
    </Container>
    
    </div>
  )
}

export default CreateTabla
