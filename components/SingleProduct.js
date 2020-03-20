import Link from 'next/link';
export default function SingleProduct({ product }) {
  return (
    <Link href="../products/[id]" as={`products/${product.id}`}>
      <div key={product.id}>
        <div>
          <img src={product.picture} />
        </div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <span>price: {product.price}</span>
        <button id="hidden-button"> add to cart </button>
      </div>
    </Link>
  );
}
