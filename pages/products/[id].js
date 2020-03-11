import Layout from '../../components/Layout';
import SingleProduct from '../../components/SingleProduct';
import { getProductById } from '../../database';

export default function Product(props) {
  const product = getProductById(props.id);

  return (
    <Layout>
      <SingleProduct product={product} />
    </Layout>
  );
}

Product.getInitialProps = async ctx => {
  return { id: ctx.query.id };
};
