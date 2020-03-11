import SingleProduct from './SingleProduct';
export default function ProductsList({ products }) {
  return (
    <div>
      {products.map(product => {
        return <SingleProduct product={product} />;
      })}
    </div>
  );
}
