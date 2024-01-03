import { Card } from "react-bootstrap"
import {Link} from 'react-router-dom'
import Rating from "./Rating"
const Service = ({service}) => {
  return (
    <Card className="my-3 p-3 rounded">
    <Link to={`/service/${service._id}`}>
        <Card.Img src={service.subscriptionImage} variant="top" className="image-product"/>

    </Link>
    <Card.Body>
        <Link to={`/service/${service._id}`}>
            <Card.Title as="div" className="product-title">
                <strong>{service.subscriptionType}</strong>
            </Card.Title>
        </Link>
       
        <Card.Text as="h3">
          Mensuelle :  {service.subscriptionPlan.monthlyPrice} XPF
        </Card.Text> 
        <Card.Text as="h3">
          Anuelle :  {service.subscriptionPlan.annualPrice} XPF
        </Card.Text> 
       
    </Card.Body>
</Card>
  )
}

export default Service