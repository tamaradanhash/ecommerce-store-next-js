// import { addProduct } from '../database';
import { useState } from 'react';
import Layout from '../components/Layout';
export default function Login(props) {
  return (
    <>
      <Layout>
        <main>
          login page
          <form>
            product name
            <input type="text" placeholder="please add a product name"></input>
          </form>
        </main>
      </Layout>
    </>
  );
}
