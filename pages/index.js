//import { getAllProducts } from '../database';
import Layout from '../components/Layout';
import ProductsList from '../components/ProductsList';
import ImagesSlide from '../components/ImagesSlide';

export default function Home(props) {
  const products = props.products;
  // function showOnlythreeProducts(id) {
  //   if (id === '1' || id === '4' || id === '3') return true;
  // }
  return (
    <Layout>
      <ImagesSlide />
      <div className="container">
        <main>
          <h1 className="title">welcome to our store</h1>
          <img src="/logo.png" />
          <p>
            as family owned shop we value family and we aim to make our
            customers have the experience of beenig at home with their family.{' '}
            <br />
            join our family and be part of the long term realtionship that we
            build with our customers and have the benifits of contious yearly
            checkups and our offers
          </p>
          <ProductsList products={products} />
        </main>
      </div>
      <style jsx>
        {`
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }
        `}
      </style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Karla', sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
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
