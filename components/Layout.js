import Navbar from './Navbar';
import Head from 'next/head';
export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Homy Hon</title>
      </Head>
      <header>
        <div>
          <a>
            <img src="/shopping-cart.svg" />
            my cart{' '}
          </a>
          <a> login </a>
        </div>
      </header>
      <Navbar />
      {props.children}
      <footer>
        <div>
          <p>follow us on facebook twitter instagram</p>
        </div>
      </footer>
      <style jsx global>
        {`
          html,
          body {
            background: #ffe6c0;
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          header div {
            margin: auto;

            position: relative;
            width: 900px;
            height: 70px;

            display: flex;
          }
          header div img {
            position: absolute;
            width: 30px;
            height: 30px;
          }
        `}
      </style>
    </div>
  );
}
