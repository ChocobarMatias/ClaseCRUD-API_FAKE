import { useEffect,useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import {HOME} from '../../routers/router'
import { URL_CLIENTES } from '../../Constants/Endpoints'
import { Button, Card } from 'react-bootstrap'

const ViewTabla = () => {
const navigate = useNavigate()
const [datos, setDatos] = useState([])
const {id} = useParams()
const getVer = async () => {
  try {
    const response = await axios.get(URL_CLIENTES+id)
    console.log("respuesta ",response.data)
    setDatos(response.data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }}

  useEffect(() => {
    getVer()
  }, [])

  return (
    <div>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{datos.nombre}</Card.Title>
        <Card.Text>
        Telegono : {datos.telefono}
         {datos.direccion}
         {datos.email}
         {datos.edad}
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate(HOME)}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ViewTabla
