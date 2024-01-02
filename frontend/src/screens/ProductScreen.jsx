import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'

import products from '../products'
import { FaBackward } from 'react-icons/fa'

const ProductScreen = () => {
  const { id: productId } = useParams()
  const product = products.find((p) => p._id === productId)
  console.log('====================================')
  console.log(product)
  console.log('====================================')

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        {' '}
        Retour
      </Link>

      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} Evaluations`} />
            </ListGroup.Item>
          </ListGroup>
            <ListGroup.Item>{product.description}</ListGroup.Item>
        </Col>
        
        <Col md={3}>

            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col>Prix:</Col>
                            <Col>
                                <strong>{product.price} XPF</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col>
                                {product.countInStock > 0 ? 'En stock' : 'Non disponible'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                            Ajouter au panier
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>

        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
