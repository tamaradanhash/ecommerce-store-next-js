//import { getAllProducts } from '../database';
import Layout from '../components/Layout';
import ProductsList from '../components/ProductsList';

export default function Home(props) {
  const products = props.products;
  // function showOnlythreeProducts(id) {
  //   if (id === '1' || id === '4' || id === '3') return true;
  // }
  return (
    <Layout>
      <div className="container">
        <main>
          <h1 className="title">ho ho ho ho</h1>
          <img src="/Homi Hon.png" />
          <p>dfgushguhguhuhughduhsuhgughughu</p>
          <ProductsList products={products} />
        </main>
      </div>
      <style jsx>
        {`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }
        `}
      </style>
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

// .filter(product =>
//   showOnlythreeProducts(product.id),
// )
