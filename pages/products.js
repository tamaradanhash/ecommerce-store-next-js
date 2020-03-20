//import { getAllProducts } from '../database';
import Layout from '../components/Layout';
import ProductsList from '../components/ProductsList';
export default function Products(props) {
  const products = props.products;
  // const products = getAllProducts();
  return (
    <Layout>
      <main>
        <h1>Products page</h1>
        <ProductsList products={products} />
      </main>
    </Layout>
  );
}
export async function getStaticProps() {
  const { getAllProducts } = await import('../database');
  const products = await getAllProducts();
  return {
    props: {
      products: products,
    },
  };
}
