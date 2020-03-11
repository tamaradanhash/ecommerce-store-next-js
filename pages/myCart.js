import Layout from '../components/Layout';
import { useState } from 'react';
import SingleProduct from '../components/SingleProduct';
export default function MyCart(props) {
  const [items, setItems] = useState([]);

  return (
    <Layout>
      <div>
        <div>my cart page</div>
      </div>
    </Layout>
  );
}
