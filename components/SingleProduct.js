import Link from 'next/link';
import Router from 'next/router';
import { Container, Row, Card, Button } from 'react-bootstrap';
export default function SingleProduct({ product, showButton, onButtonClick }) {
  function addToCart() {
    // const item = {
    //   id: product.id,
    //   name: product.name,
    //   price: product.price,
    //   quantity: 1,
    // };
    // Cookies.set('item', item);
    Router.push('/myCart');
    console.log('test');
  }

  return (
    <Link href="/products/[id]" as={`/products/${product.id}`}>
      <Card key={product.id} style={{ width: '30%', margin: '5px' }}>
        <Card.Img variant="top" src={product.picture} rounded />

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <span>price: {product.price}</span>
          <Button variant="primary" onClick={addToCart}>
            add to cart
          </Button>
        </Card.Body>
      </Card>
    </Link>
  );
}
