import Link from 'next/link';
import Router from 'next/router';
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

  const myButton = showButton && (
    <button onClick={addToCart}> add to cart </button>
  );
  return (
    <Link href="/products/[id]" as={`/products/${product.id}`}>
      <div key={product.id}>
        <div>
          <img src={product.picture} />
        </div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <span>price: {product.price}</span>
        {myButton}
      </div>
    </Link>
  );
}
