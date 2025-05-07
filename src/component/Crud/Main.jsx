import React, { useState,useEffect } from 'react'
import { Table,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { URL_CLIENTES } from '../../Constants/Endpoints';
import { IoEyeSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { CREAR, EDITAR, HOME, VER } from '../../routers/router';




const Main = () => {

  const navigate = useNavigate()

const [datos, setDatos] = useState([])

const getClintes = async () => {
  try {
    const response = await axios.get(URL_CLIENTES)
    // console.log("respuesta ",response.data)
    setDatos(response.data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

useEffect(() => {
  getClintes()}, [])

const Borrar = async (id) => {
  try {
     await axios.delete(`${URL_CLIENTES}/${id}`)
    getClintes()
  } catch (error) {
    console.error('Error deleting data:', error)
  }
}
  

  return (
<div>
<br />
      <Link to={CREAR}>Agregar Cliente</Link>
      <br />
    <div className="container mx-auto mt-5">
      
     
     <h3>Tabla Clientes</h3> 
     <br />
     <Table striped>
      <thead>
        <tr>
          <th>N°</th>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Direccion</th>
          {/* <th>E-Mail</th>
          <th>Fecha Nacimiento</th>
          <th>Edad</th>
          <th>Sexo</th> */}
        </tr>
      </thead>
      {datos.map((cliente)=>(
      <tbody key={cliente.id}>
        <tr>
          <td>{cliente.id}</td>
          <td>{cliente.nombre}</td>
          <td>{cliente.telefono}</td>
          <td>
            <Link to={`/ver/${cliente.id}`}><IoEyeSharp /></Link>
            <Link to={`/editar/${cliente.id}`}><FaEdit/></Link>
            <Button onClick={()=>{Borrar(cliente.id)}}><MdDeleteForever/></Button>
          </td>
        </tr>
        
      </tbody>  ))}
    </Table>
     <br />
    </div></div>
  )
}

export default Main
