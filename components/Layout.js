import Navigator from './Navbar';
import Head from 'next/head';

export default function Layout(props) {
  return (
    <div className="container">
      <Head>
        <title>Al Mutahida</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
        ></link>
      </Head>
      <header>
        <img className="logo" src="/logo3.png" height="300" />
      </header>
      <Navigator />
      {props.children}
      <hr />
      <footer>
        <p>follow us on facebook twitter instagram</p>
      </footer>
      <style jsx>
        {`
          .container {
            background-color: #fbf9fa;
          }
          hr {
            background-color: #fbf9fa;
            border-style: none;
            height: 2px;
            width: 40%;
          }
          header {
            height: 100px;
            padding: 0;
          }
          .logo {
            height: 100%;
            width: 200px;
            margin-left: auto;
            margin-right: auto;

            display: block;
          }
        `}
      </style>
    </div>
  );
}
