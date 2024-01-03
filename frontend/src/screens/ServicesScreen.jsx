import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'

import axios from 'axios'
import Service from '../components/Service'

const ServicesScreen = () => {

    const [services, setServices] = useState([])

   
  
    useEffect(() => {
      const fetchServices = async () => {
        const { data } = await axios.get(`/api/services`)
        setServices(data)
      }
      fetchServices()
    }, [])



   
  


  return (
    <>
    <h1>Nos services de collecte</h1>
    <Row>
      {services.map((service) => (
        <Col key={service._id} sm={12} md={6} lg={4} xl={3}>
          <Service service={service} />
        </Col>
      ))}
    </Row>
  </>
  )
}

export default ServicesScreen