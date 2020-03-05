import productsArray from '../database';
import Layout from '../components/Layout';
import ProductsList from '../components/ProductsList';
export default function Products() {
  return (
    <>
      <Layout>
        <main>
          <h1>Products page</h1>
          <ProductsList productsArray={productsArray} />
        </main>
      </Layout>
    </>
  );
}
