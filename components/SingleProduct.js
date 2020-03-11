import Link from 'next/link';
export default function SingleProduct({ product }) {
  return (
    <div>
      <div>
        <img src={product.picture} />
      </div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <span>{product.price}</span>
      <button>
        <Link href="../products/[id]" as={`products/${product.id}`}>
          <a>read more</a>
        </Link>
      </button>
    </div>
  );
}
