export default function Product({ product }) {
  return (
    <div>
      <div>
        <img src={product.picture} />
      </div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <span>{product.price}</span>
    </div>
  );
}
