import { getAllProducts } from '../database';
import Layout from '../components/Layout';
import ProductsList from '../components/ProductsList';
export default function Products() {
  const products = getAllProducts();
  return (
    <Layout>
      <main>
        <h1>Products page</h1>
        <ProductsList products={products} />
      </main>
    </Layout>
  );
}
