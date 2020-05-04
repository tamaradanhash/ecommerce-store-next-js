import Layout from '../components/Layout';
import { useState } from 'react';
import SingleProduct from '../components/SingleProduct';
import cookies from 'next-cookies';
export default function MyCart(props) {
  const { item } = props;
  if (item === 'undefined') {
    return <div>error in the system</div>;
  }
  const [items, setItems] = useState([]);
  const itemsCounter = items.length;
  const quantityCounter = item.quantity;
  return (
    <Layout>
      <h1>my cart page</h1>
      <h3>subtotal price</h3>
      <p>you have {itemsCounter} items in your cart</p>
    </Layout>
  );
}
export async function getServerSideProps(ctx) {
  const item = cookies(ctx).item;
  return {
    props: {
      item: item,
    },
  };
}
