import Layout from '../../components/Layout';
import { useState } from 'react';
import SingleProduct from '../../components/SingleProduct';
//import { getProductById } from '../../database';

export default function Product(props) {
  const product = props.product;
  // function setHiddenButton() {
  //   return (document.getElementById('hide-button').hidden = false);
  // }

  return (
    <Layout>
      <SingleProduct product={product} />
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
