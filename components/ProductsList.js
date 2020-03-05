import Product from './Product';
export default function ProductsList({ productsArray }) {
  return (
    <div>
      {' '}
      {productsArray.map(product => {
        return <Product product={product} />;
      })}
    </div>
  );
}
