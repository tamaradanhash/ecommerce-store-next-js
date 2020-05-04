import Layout from '../../components/Layout';
import Router from 'next/router';
import Cookies from 'js-cookie';

function ProductDetails({ product, onButtonClick }) {
  return (
    // <Link href="/products/[id]" as={`/products/${product.id}`}>
    <div key={product.id}>
      <div>
        <img src={product.picture} />
      </div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <span>price: {product.price}</span>
      <button onClick={onButtonClick}> add to cart </button>
    </div>
    // </Link>
  );
}

export default function Product(props) {
  const product = props.product;
  if (product === 'undefined') {
    return <div>error: this product doesn't exist</div>;
  }

  function addToCart() {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    };
    Cookies.set('item', item);
    Router.push('/myCart');
  }

  return (
    <Layout>
      <ProductDetails product={product} onButtonClick={addToCart} />
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const { getAllProducts } = await import('../../database');
  const products = await getAllProducts();
  return {
    props: {
      product: products.find(product => product.id === Number(ctx.params.id)),
    },
  };
}

export async function getStaticPaths() {
  const { getAllProducts } = await import('../../database');
  const products = await getAllProducts();

  const paths = products.map(product => ({
    params: { id: String(product.id) },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
